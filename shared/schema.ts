import { sql } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table (required for Replit Auth)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table (required for Replit Auth)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Lead orders table for agent portal
export const leadOrders = pgTable("lead_orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  serviceType: varchar("service_type").notNull(), // 'aca', 'medicare', 'life', 'final_expense', 'va_support'
  orderDate: timestamp("order_date").defaultNow(),
  status: varchar("status").notNull().default('pending'), // 'pending', 'active', 'completed', 'cancelled'
  leadCount: integer("lead_count").notNull(),
  pricePerLead: integer("price_per_lead").notNull(), // in cents
  totalAmount: integer("total_amount").notNull(), // in cents
  notes: text("notes"),
});

// Leads table for tracking individual leads
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  orderId: varchar("order_id").references(() => leadOrders.id).notNull(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone").notNull(),
  state: varchar("state").notNull(),
  age: integer("age"),
  income: integer("income"),
  status: varchar("status").notNull().default('new'), // 'new', 'contacted', 'qualified', 'enrolled', 'lost'
  assignedAt: timestamp("assigned_at").defaultNow(),
  contactedAt: timestamp("contacted_at"),
  notes: text("notes"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  firstName: true,
  lastName: true,
  profileImageUrl: true,
});

export const insertLeadOrderSchema = createInsertSchema(leadOrders).pick({
  serviceType: true,
  leadCount: true,
  pricePerLead: true,
  totalAmount: true,
  notes: true,
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  orderId: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  state: true,
  age: true,
  income: true,
  notes: true,
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type InsertLeadOrder = z.infer<typeof insertLeadOrderSchema>;
export type LeadOrder = typeof leadOrders.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
