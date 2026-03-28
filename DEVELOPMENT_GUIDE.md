# Development Guide - Evenbricks

## Project Architecture

### Folder Structure

```
src/
├── app/                          # Next.js app directory (App Router)
│   ├── (public)/                # Route group for public pages
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx       # About page
│   │   ├── services/page.tsx    # Services page
│   │   └── contact/page.tsx     # Contact page
│   ├── api/                      # API routes (future)
│   ├── layout.tsx               # Root layout with SplashScreenProvider
│   ├── globals.css              # Global styles
│   └── sitemap.ts               # SEO sitemap
├── components/                   # React components
│   ├── splash-screen/           # Splash screen component
│   ├── staggered-menu/          # Navigation menu with context integration
│   └── [other components]
├── lib/
│   ├── supabase/                # Supabase configuration
│   │   ├── client.ts           # Client-side Supabase instance
│   │   ├── server.ts           # Server-side Supabase instance
│   │   └── types.ts            # Database types
│   ├── context/                 # React contexts
│   │   └── SplashScreenContext.tsx  # Navigation state management
│   ├── seo/
│   │   └── keywords.ts          # SEO keywords
│   └── utils.ts                 # Utility functions
└── styles/
    └── fonts.ts                 # Custom font imports
```

## Key Features

### 1. Splash Screen with Navigation Context

**File**: `src/lib/context/SplashScreenContext.tsx`

The SplashScreenContext manages the splash screen display state across navigation:
- On direct home visits: splash screen shows
- On navigation from other pages: splash screen is skipped (clean UX)
- On page refresh: splash screen shows again (expected behavior)

Usage:
```tsx
import { useSplashScreen } from '@/lib/context/SplashScreenContext';

// In a component
const { skipSplash, setSplashSkipped, resetSplashState } = useSplashScreen();

// Trigger skip
setSplashSkipped(true);
```

### 2. Supabase Integration

**Files**: 
- `src/lib/supabase/client.ts` - Client-side operations (read-only)
- `src/lib/supabase/server.ts` - Server-side operations (full access)
- `src/lib/supabase/types.ts` - TypeScript type definitions

**Security Principle**: Never expose `SUPABASE_SERVICE_ROLE_KEY` to client-side code.

### 3. SEO Configuration

**Files**:
- `src/app/layout.tsx` - Global metadata and root layout
- Individual page files - Per-page metadata using Metadata API
- `src/app/sitemap.ts` - Sitemap for search engines
- `public/robots.txt` - Robots configuration

Each page includes:
- Proper title and description
- OpenGraph tags for social sharing
- Keywords for SEO
- Structured metadata

### 4. Next.js Best Practices

- **Route Groups**: `(public)` organizes public pages logically
- **Metadata API**: Export `metadata` object from page components
- **Server Components**: Default to server components (use `'use client'` only when needed)
- **App Router**: Modern Next.js 16 with Turbopack
- **Fonts**: Custom fonts loaded via Next.js font system

## Adding New Pages

To create a new page with proper structure:

1. Create the folder: `src/app/(public)/[page-name]/`
2. Create `page.tsx` with metadata:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description for SEO',
  openGraph: {
    title: 'Your Page Title | Evenbricks',
    description: 'Your page description for SEO',
    url: 'https://evenbricks.id/your-page',
    type: 'website',
  },
};

export default function YourPage() {
  return (
    <div className="min-h-screen">
      {/* Your content */}
    </div>
  );
}
```

## Adding Database Queries

### Client-Side Read (Supabase Client)

```tsx
'use client';

import { supabase } from '@/lib/supabase/client';

export function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from('items')
      .select('*')
      .then(({ data, error }) => {
        if (!error) setItems(data);
      });
  }, []);

  return <div>{/* render items */}</div>;
}
```

### Server-Side Query (Supabase Server)

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

## Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Fonts**: Melon Pop (display), Poor Story (tagline), Montserrat (body)
- **Colors**: Adjust in globals.css as needed

## Environment Variables

All Supabase environment variables are automatically configured via Vercel integration. No manual setup needed.

## Future E-Commerce Features

The architecture is ready for e-commerce with:

1. **Supabase Backend**: Scalable PostgreSQL database
2. **Server API Routes**: For secure transaction processing
3. **Row Level Security**: For per-user data isolation
4. **Authentication Ready**: Space for user auth and sessions
5. **Type-Safe Database**: TypeScript types from Supabase schema

Simply add tables and API endpoints as needed while maintaining security patterns.
