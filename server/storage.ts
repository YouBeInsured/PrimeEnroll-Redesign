import {
  users,
  leadOrders,
  leads,
  type User,
  type UpsertUser,
  type LeadOrder,
  type InsertLeadOrder,
  type Lead,
  type InsertLead,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Lead order operations
  createLeadOrder(userId: string, order: InsertLeadOrder): Promise<LeadOrder>;
  getLeadOrdersByUser(userId: string): Promise<LeadOrder[]>;
  getLeadOrder(id: string): Promise<LeadOrder | undefined>;
  updateLeadOrderStatus(id: string, status: string): Promise<LeadOrder>;

  // Lead operations
  createLead(lead: InsertLead): Promise<Lead>;
  getLeadsByOrder(orderId: string): Promise<Lead[]>;
  getLeadsByUser(userId: string): Promise<Lead[]>;
  updateLeadStatus(id: string, status: string, notes?: string): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Lead order operations
  async createLeadOrder(userId: string, order: InsertLeadOrder): Promise<LeadOrder> {
    const [leadOrder] = await db
      .insert(leadOrders)
      .values({ ...order, userId })
      .returning();
    return leadOrder;
  }

  async getLeadOrdersByUser(userId: string): Promise<LeadOrder[]> {
    return await db
      .select()
      .from(leadOrders)
      .where(eq(leadOrders.userId, userId))
      .orderBy(desc(leadOrders.orderDate));
  }

  async getLeadOrder(id: string): Promise<LeadOrder | undefined> {
    const [order] = await db.select().from(leadOrders).where(eq(leadOrders.id, id));
    return order;
  }

  async updateLeadOrderStatus(id: string, status: string): Promise<LeadOrder> {
    const [order] = await db
      .update(leadOrders)
      .set({ status })
      .where(eq(leadOrders.id, id))
      .returning();
    return order;
  }

  // Lead operations
  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await db.insert(leads).values(lead).returning();
    return newLead;
  }

  async getLeadsByOrder(orderId: string): Promise<Lead[]> {
    return await db
      .select()
      .from(leads)
      .where(eq(leads.orderId, orderId))
      .orderBy(desc(leads.assignedAt));
  }

  async getLeadsByUser(userId: string): Promise<Lead[]> {
    return await db
      .select({
        id: leads.id,
        orderId: leads.orderId,
        firstName: leads.firstName,
        lastName: leads.lastName,
        email: leads.email,
        phone: leads.phone,
        state: leads.state,
        age: leads.age,
        income: leads.income,
        status: leads.status,
        assignedAt: leads.assignedAt,
        contactedAt: leads.contactedAt,
        notes: leads.notes,
      })
      .from(leads)
      .innerJoin(leadOrders, eq(leads.orderId, leadOrders.id))
      .where(eq(leadOrders.userId, userId))
      .orderBy(desc(leads.assignedAt));
  }

  async updateLeadStatus(id: string, status: string, notes?: string): Promise<Lead> {
    const updateData: any = { status };
    if (status === 'contacted' && !notes) {
      updateData.contactedAt = new Date();
    }
    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const [lead] = await db
      .update(leads)
      .set(updateData)
      .where(eq(leads.id, id))
      .returning();
    return lead;
  }
}

export const storage = new DatabaseStorage();
