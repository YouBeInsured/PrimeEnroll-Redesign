import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertLeadOrderSchema, insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Lead order routes
  app.post('/api/lead-orders', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const orderData = insertLeadOrderSchema.parse(req.body);
      
      const order = await storage.createLeadOrder(userId, orderData);
      res.json(order);
    } catch (error) {
      console.error("Error creating lead order:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid order data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create order" });
      }
    }
  });

  app.get('/api/lead-orders', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const orders = await storage.getLeadOrdersByUser(userId);
      res.json(orders);
    } catch (error) {
      console.error("Error fetching lead orders:", error);
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });

  app.get('/api/lead-orders/:id', isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const order = await storage.getLeadOrder(id);
      
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      // Verify user owns this order
      const userId = req.user.claims.sub;
      if (order.userId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      res.json(order);
    } catch (error) {
      console.error("Error fetching lead order:", error);
      res.status(500).json({ message: "Failed to fetch order" });
    }
  });

  // Lead routes
  app.get('/api/leads', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { orderId } = req.query;

      let leads;
      if (orderId) {
        // Verify user owns this order first
        const order = await storage.getLeadOrder(orderId as string);
        if (!order || order.userId !== userId) {
          return res.status(403).json({ message: "Access denied" });
        }
        leads = await storage.getLeadsByOrder(orderId as string);
      } else {
        leads = await storage.getLeadsByUser(userId);
      }

      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ message: "Failed to fetch leads" });
    }
  });

  app.patch('/api/leads/:id/status', isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      if (!status) {
        return res.status(400).json({ message: "Status is required" });
      }

      const validStatuses = ['new', 'contacted', 'qualified', 'enrolled', 'lost'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      const lead = await storage.updateLeadStatus(id, status, notes);
      res.json(lead);
    } catch (error) {
      console.error("Error updating lead status:", error);
      res.status(500).json({ message: "Failed to update lead status" });
    }
  });

  // Service pricing endpoint
  app.get('/api/services/pricing', async (req, res) => {
    try {
      const pricing = {
        aca: {
          name: "ACA Kick Starter",
          pricePerLead: 2500, // $25.00 in cents
          minOrder: 10,
          description: "Exclusive ACA leads from compliant ad funnels"
        },
        medicare: {
          name: "Medicare Live Transfers",
          pricePerLead: 3500, // $35.00 in cents
          minOrder: 5,
          description: "High-quality Medicare leads tailored to your state"
        },
        life: {
          name: "Life Insurance Leads",
          pricePerLead: 3000, // $30.00 in cents
          minOrder: 5,
          description: "Qualified life insurance prospects"
        },
        final_expense: {
          name: "Final Expense Live Transfers",
          pricePerLead: 4000, // $40.00 in cents
          minOrder: 5,
          description: "Prospects over 50 actively seeking final expense plans"
        },
        va_support: {
          name: "Virtual Assistance",
          pricePerLead: 1500, // $15.00 in cents per hour
          minOrder: 20,
          description: "Trained VA team for CRM management and follow-ups"
        }
      };

      res.json(pricing);
    } catch (error) {
      console.error("Error fetching pricing:", error);
      res.status(500).json({ message: "Failed to fetch pricing" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
