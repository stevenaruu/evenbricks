# Supabase Integration Setup Guide

This project integrates Supabase for secure data management with a focus on e-commerce readiness.

## Security Architecture

### Environment Variables

Your Supabase integration uses the following environment variables (already configured via Vercel):

- `NEXT_PUBLIC_SUPABASE_URL` - Public Supabase project URL (safe to expose)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anonymous key (safe to expose)
- `SUPABASE_SERVICE_ROLE_KEY` - Private service role key (NEVER expose, server-side only)

### Client-Side Security

All client-side code uses only the `ANON_KEY` which provides:
- Read-only access by default
- Row Level Security (RLS) enforcement
- No direct write capabilities

File: `src/lib/supabase/client.ts`

### Server-Side Security

API routes can safely access all environment variables and use `SERVICE_ROLE_KEY` for admin operations.

File: `src/lib/supabase/server.ts`

## Database Schema

When you're ready to set up your database, create the following table in Supabase:

```sql
CREATE TABLE items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access" ON items
  FOR SELECT USING (true);
```

## Data Management

Since you plan to insert data manually via the Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to the `items` table
3. Click "Insert row" to add items manually
4. Your Next.js app will automatically fetch and display them

## API Routes (Future Enhancement)

When you need POST/PUT/DELETE operations:

- API routes are in `src/app/api/items/route.ts`
- They run server-side and can safely use `SERVICE_ROLE_KEY`
- Implement proper validation and error handling
- These endpoints will handle secure transaction processing for future e-commerce features

## SEO

The project includes:
- Per-page metadata for all routes
- Sitemap generation (`src/app/sitemap.ts`)
- robots.txt for search engines
- Open Graph tags for social sharing
- Proper heading hierarchy and semantic HTML

All pages maintain SEO best practices with proper title tags and descriptions.
