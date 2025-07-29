# Prime Enroll - Lead Management System

## Overview

Prime Enroll is a full-stack web application designed for insurance agents to manage leads and orders across multiple service types including ACA, Medicare, Life Insurance, Final Expense, and VA Support. The system features a React frontend with TypeScript, Express.js backend, PostgreSQL database, and includes authentication through Replit's OAuth system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Authentication**: Replit OAuth with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL storage
- **API**: RESTful endpoints with JSON responses

### Database Architecture
- **Database**: PostgreSQL (via Neon Database)
- **ORM**: Drizzle ORM with TypeScript
- **Schema**: Type-safe database schema with Zod validation
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Authentication System
- **Provider**: Replit OAuth using OpenID Connect
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple
- **User Management**: Automatic user creation/updates on login
- **Security**: HTTPS-only cookies, session expiration, CSRF protection

### Lead Management
- **Lead Orders**: Agents can create orders for different service types
- **Lead Tracking**: Individual lead management with status updates
- **Service Types**: ACA, Medicare, Life Insurance, Final Expense, VA Support
- **Pricing**: Flexible pricing per lead with total order calculations

### Frontend Features
- **Responsive Design**: Mobile-first responsive layout
- **Dark/Light Theme**: System preference with manual toggle
- **Multi-language**: English/Spanish support with context-based translations
- **Component Library**: Comprehensive UI components (buttons, forms, modals, tables)
- **Toast Notifications**: User feedback for actions and errors

### Data Models
- **Users**: Profile information from OAuth provider
- **Lead Orders**: Service type, quantity, pricing, status tracking
- **Leads**: Individual lead records with contact info and status
- **Sessions**: Authentication session persistence

## Data Flow

### Authentication Flow
1. User clicks "Agent Portal" → redirected to Replit OAuth
2. OAuth callback validates and creates/updates user record
3. Session established with PostgreSQL storage
4. Frontend receives user data via `/api/auth/user`

### Lead Order Flow
1. Authenticated user creates lead order via `/api/lead-orders`
2. Order stored with pricing and service type information
3. Individual leads created and associated with order
4. Dashboard displays orders and leads with real-time status

### Client-Server Communication
- **API Requests**: Fetch-based with credential inclusion
- **Error Handling**: Centralized error handling with toast notifications
- **Data Fetching**: React Query for caching and synchronization
- **Type Safety**: Shared TypeScript types between client and server

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **@radix-ui/**: UI primitive components
- **passport**: Authentication middleware
- **express-session**: Session management

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Backend bundling for production

## Deployment Strategy

### Development Environment
- **Server**: Express.js with Vite middleware for HMR
- **Database**: Neon PostgreSQL with connection pooling
- **Environment**: Replit-optimized with runtime error overlays

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static file serving through Express
- **Database**: Production PostgreSQL with environment-based configuration

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Session encryption key
- `REPLIT_DOMAINS`: Allowed domains for OAuth
- `ISSUER_URL`: OAuth provider endpoint
- `REPL_ID`: Replit application identifier

### File Structure
- `client/`: React frontend application
- `server/`: Express.js backend with API routes
- `shared/`: Common TypeScript types and database schema
- `migrations/`: Database migration files
- Configuration files in project root