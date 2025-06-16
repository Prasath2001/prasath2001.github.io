# Prasath Murugesan Portfolio Application

## Overview

This is a modern, responsive portfolio website built for Prasath Murugesan, an AI/ML Consultant and Engineer. The application showcases a personal portfolio with sections for about, experience, education, and projects. It features a stunning dark theme with glassmorphism design elements and smooth animations.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React-based SPA using Vite for bundling and development
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Replit with autoscale deployment target

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom glassmorphism design system
- **Fonts**: Inter, Poppins, and JetBrains Mono for typography hierarchy

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL session store (connect-pg-simple)
- **Development**: Hot reload with Vite middleware integration
- **API Structure**: RESTful API with `/api` prefix (currently minimal implementation)

### Design System
- **Theme**: Dark Material 3 theme with #a100ff primary accent and enhanced gradients
- **Glass Effects**: Advanced glassmorphism with 24px blur and dynamic shadows
- **Animations**: Material 3 transitions with cubic-bezier easing and enhanced hover effects
- **Typography**: Three-tier font system (Inter, Poppins, JetBrains Mono) with improved text rendering
- **Responsive**: Mobile-first design with adaptive layouts and enhanced button styling

## Data Flow

### Current Implementation
1. **Static Content**: Portfolio data is hardcoded in React components
2. **Navigation**: Client-side routing with smooth scroll navigation
3. **Animations**: Intersection Observer API for scroll-triggered animations
4. **State**: Minimal state management for UI interactions

### Database Schema
- **Users Table**: Basic user authentication schema (id, username, password)
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Extensibility**: Ready for additional tables and data models

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **drizzle-orm**: Type-safe database ORM
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety and development experience
- **ESBuild**: Production bundling for server code
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server with HMR on port 5000
- **Database**: PostgreSQL 16 module in Replit
- **File Watching**: Automatic restart with tsx for server development

### Production Deployment
- **Build Process**: 
  1. Vite builds client to `dist/public`
  2. ESBuild bundles server to `dist/index.js`
- **Runtime**: Node.js with ES modules
- **Static Assets**: Served from built client directory
- **Port Configuration**: External port 80 maps to internal port 5000

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Auto-deployment**: Triggered on git push
- **Environment**: Autoscale deployment target for production

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 15, 2025: Updated React components to match standalone HTML portfolio
  - Updated HeroSection with actual profile picture (Profilepic_1750008568840.jpg)
  - Added correct social media links: LinkedIn, GitHub, and Email (replaced Twitter with Mail)
  - Fixed Tamil quote in AboutSection to match HTML version
  - Corrected "Mani Selvag" typo in AboutSection
  - Updated Experience section with latest role: Associate Solutions Engineer at MiQ Digital
  - Fixed company name from "Grow.com" to "Growfin.ai"
  - Corrected education descriptions: "polysemous" and "Shamshu Dharwez"
  - Updated Tamil quote in About section to match index.html version
  - Removed calendar symbols from Experience and Education sections
  - Added duration indicators with bullet points (e.g., "Jun 2024 - July 2024 • 2 months")
  - Added clickable project links to GitHub and Kaggle repositories in Projects section
  - Updated to Material 3 design with #a100ff primary color theme
  - Enhanced glassmorphism effects with 24px blur and dynamic shadows
  - Fixed "Murugesan" text rendering with improved typography and spacing
  - Made Tamil quote semi-bold with gradient text effects
  - Enhanced buttons with rounded corners and hover animations
  - Added radial gradient background effects for better visual depth
  - Implemented geometric wave-style lines background with flowing animations
  - Added liquid morphing effects to Hero section and "வணக்கம்!" text
  - Created dynamic SVG patterns with multi-layered wave lines and floating nodes
  - Enhanced glassmorphism with liquid-style border-radius animations
  - All content now synchronized between React app and standalone HTML file

## Changelog

Changelog:
- June 15, 2025. Initial setup
- June 15, 2025. Synchronized React components with standalone HTML content