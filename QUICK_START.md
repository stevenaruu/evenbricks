# Quick Start Guide - Evenbricks Project

## Project Overview

This is a modern Next.js 16 project for **Evenbricks** featuring:
- Secure Supabase integration ready for e-commerce
- Smart splash screen that skips on navigation (clean UX)
- SEO-optimized pages with proper metadata
- TypeScript for type safety
- Production-ready architecture

## What You Need to Know

### Three Key Features Implemented

#### 1. Splash Screen Navigation (Context-Based)
```
Direct visit to home → Shows splash screen ✓
Click "Home" from /about → Skips splash screen ✓
Refresh page → Shows splash screen again ✓
URL stays clean: /  (no ?skipSplash=true)
```

#### 2. Secure Supabase Setup
```
Client code: Uses ANON_KEY (read-only) ✓
Server API: Can use SERVICE_ROLE_KEY (full access) ✓
Database: Ready for items table creation ✓
Security: Environment variables protected ✓
```

#### 3. SEO & Routing
```
Pages: / | /about | /services | /contact
Each page has proper metadata and title tags
Sitemap at /sitemap.xml
Robots.txt for search engines
All Next.js 16 best practices followed
```

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint the code
npm run lint
```

## Project Structure (Key Files)

```
src/
├── app/
│   ├── (public)/page.tsx              # Homepage with splash screen
│   ├── (public)/about/page.tsx        # About page mockup
│   ├── (public)/services/page.tsx     # Services page mockup
│   ├── (public)/contact/page.tsx      # Contact page mockup
│   ├── layout.tsx                     # Root layout with context
│   └── sitemap.ts                     # SEO sitemap
├── components/staggered-menu/         # Updated with context trigger
├── lib/
│   ├── supabase/
│   │   ├── client.ts                 # Client-side Supabase
│   │   ├── server.ts                 # Server-side Supabase
│   │   └── types.ts                  # Database types
│   ├── context/
│   │   └── SplashScreenContext.tsx    # Navigation context
│   └── api/response.ts                # API response utilities
└── public/robots.txt                  # SEO robots file
```

## Customizing the Mockup Pages

The pages `/about`, `/services`, and `/contact` are simple mockups ready for your design:

```tsx
// src/app/(public)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Page</h1>
        {/* Add your design here */}
      </div>
    </div>
  );
}
```

**Just replace the content** - metadata is already configured!

## Using Supabase

### Reading Data (Client-Side)
```tsx
'use client';

import { supabase } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from('items')
      .select('*')
      .then(({ data }) => setItems(data || []));
  }, []);

  return <div>{/* render items */}</div>;
}
```

### Reading Data (Server-Side)
```tsx
import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from('items')
    .select('*');

  return <div>{/* render items */}</div>;
}
```

### Creating API Endpoints (Server-Side)
1. Copy `src/app/api/TEMPLATE_route.ts` 
2. Rename to your endpoint: `src/app/api/items/route.ts`
3. Implement your logic using `createClient()` from server utilities
4. Use `SERVICE_ROLE_KEY` safely (server-side only!)

## Setting Up Database

When ready:

1. Go to Supabase dashboard
2. Create table `items` with fields:
   - id (UUID, primary key)
   - name (text)
   - description (text)
   - price (numeric)
   - image_url (text)
   - created_at (timestamp)
   - updated_at (timestamp)
3. Enable Row Level Security
4. Create policy: Allow public read access
5. Insert items via dashboard
6. Your app will fetch and display them automatically!

See `SUPABASE_SETUP.md` for detailed SQL.

## Environment Variables

All Supabase environment variables are already configured via Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- And others...

No manual setup needed! They're protected and secure.

## SEO Features

- [x] Proper metadata on every page
- [x] OpenGraph tags for social sharing
- [x] Dynamic sitemap at `/sitemap.xml`
- [x] `robots.txt` for search engines
- [x] Semantic HTML with proper heading hierarchy
- [x] Title template that applies to all pages

Each page automatically gets the right title when shared on social media.

## Common Tasks

### Add a New Page
```
1. Create folder: src/app/(public)/[page-name]/
2. Create page.tsx with metadata and content
3. Add to StaggeredMenu items in homepage
4. Done! Metadata and routing work automatically
```

### Fetch Items on Homepage
```tsx
// In src/app/(public)/page.tsx
'use client'

import { supabase } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

// Add this in your component:
const [items, setItems] = useState([]);

useEffect(() => {
  supabase.from('items').select('*').then(({ data }) => {
    if (data) setItems(data);
  });
}, []);

// Then render items in your gallery
```

### Deploy to Production
```bash
# Push to GitHub (connected to v0)
git push origin main

# Automatic deployment to Vercel happens
# View at: https://evenbricks.id
```

## Troubleshooting

### "SplashScreenContext must be used within SplashScreenProvider"
→ Make sure layout.tsx wraps children with `<SplashScreenProvider>`

### Splash screen showing twice on navigation
→ Check that `resetSplashState()` is being called in useEffect

### Supabase connection errors
→ Check that NEXT_PUBLIC_SUPABASE_URL env vars are set

### Page not found
→ Remember routes use (public) group: `/about`, not `/public/about`

## Documentation Files

Read these for detailed information:

1. **SUPABASE_SETUP.md** - Database setup and security architecture
2. **DEVELOPMENT_GUIDE.md** - Full architecture and development patterns
3. **IMPLEMENTATION_SUMMARY.md** - What was changed and why
4. **VERIFICATION_CHECKLIST.md** - Testing and QA checklist

## What's Already Done

✅ Supabase client and server configured  
✅ Splash screen context implemented  
✅ About, Services, Contact pages created  
✅ All metadata and SEO configured  
✅ Menu integration with context  
✅ Sitemap and robots.txt created  
✅ TypeScript types for database  
✅ API utilities and template created  
✅ Full documentation provided  

## What's Next

1. **Design**: Customize the mockup pages with your design
2. **Database**: Create the items table in Supabase dashboard
3. **Data**: Add your items via Supabase dashboard
4. **Features**: Implement product display, cart, checkout
5. **Deploy**: Push to main branch for automatic Vercel deployment

## Support & Questions

Check the documentation files first:
- `DEVELOPMENT_GUIDE.md` - For architecture questions
- `SUPABASE_SETUP.md` - For database questions
- Code comments - They explain complex logic

The code is well-documented and follows Next.js best practices.

---

**Happy building! 🚀**

The project is production-ready and waiting for your design and content.
