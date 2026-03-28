# Struktur Folder Update

## Perubahan yang Dilakukan

### 1. Hapus Route Group `(public)`
- ❌ Folder `src/app/(public)` telah dihapus
- ✅ Semua pages sekarang langsung di `src/app/`

### 2. Struktur Folder Baru

```
src/app/
├── page.tsx                    ← Home page (/)
├── layout.tsx                  ← Root layout dengan SplashScreenProvider
├── sitemap.ts                  ← XML sitemap untuk SEO
│
├── collection/
│   ├── page.tsx               ← Collection page (/collection)
│   └── metadata.ts            ← Metadata untuk SEO
│
├── about/
│   ├── page.tsx               ← About Us page (/about)
│   └── metadata.ts            ← Metadata untuk SEO
│
└── policy/
    ├── page.tsx               ← Policy page (/policy)
    └── metadata.ts            ← Metadata untuk SEO
```

### 3. Menu Items (Konsisten di Semua Pages)

```javascript
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Collection', ariaLabel: 'View our collection', link: '/collection' },
  { label: 'About Us', ariaLabel: 'Learn more about us', link: '/about' },
  { label: 'Policy', ariaLabel: 'View our policy', link: '/policy' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/evenbricks' },
  { label: 'Tiktok', link: 'https://www.tiktok.com/@evenbricks' },
];
```

### 4. Setiap Page Sudah Punya Menu

✅ Home page (`/`) - Menu + Splash Screen  
✅ Collection page (`/collection`) - Menu + Content  
✅ About Us page (`/about`) - Menu + Content  
✅ Policy page (`/policy`) - Menu + Content  

**User bisa navigate antara pages:**
- Click menu items untuk pindah page
- Menu tersedia di setiap page
- Dari other pages ke Home: splash screen di-skip (via context)
- Direct visit ke Home: splash screen tampil

### 5. Metadata untuk SEO

Setiap page punya metadata file:
- `collection/metadata.ts` - Title, description, OpenGraph
- `about/metadata.ts` - Title, description, OpenGraph
- `policy/metadata.ts` - Title, description, OpenGraph

### 6. Sitemap Update

File `src/app/sitemap.ts` sudah di-update dengan:
- `/` (Home) - priority 1
- `/collection` (Collection) - priority 0.9
- `/about` (About Us) - priority 0.8
- `/policy` (Policy) - priority 0.8

## URLs

| Page | URL | Route |
|------|-----|-------|
| Home | `/` | `src/app/page.tsx` |
| Collection | `/collection` | `src/app/collection/page.tsx` |
| About Us | `/about` | `src/app/about/page.tsx` |
| Policy | `/policy` | `src/app/policy/page.tsx` |

## Catatan Penting

1. **Route Group `(public)` tidak diperlukan** karena semua pages adalah public
2. **Folder structure lebih clean** tanpa nesting yang tidak perlu
3. **SEO tetap optimal** dengan metadata exports di setiap folder
4. **Navigation konsisten** - menu ada di semua pages
5. **Splash screen logic** tetap bekerja dengan context

## File yang Dihapus

- ❌ `src/app/(public)/page.tsx`
- ❌ `src/app/(public)/about/page.tsx`
- ❌ `src/app/(public)/services/page.tsx`
- ❌ `src/app/(public)/contact/page.tsx`
- ❌ Seluruh folder `(public)`

## File yang Ditambah

- ✅ `src/app/page.tsx` (home)
- ✅ `src/app/collection/page.tsx`
- ✅ `src/app/collection/metadata.ts`
- ✅ `src/app/about/page.tsx`
- ✅ `src/app/about/metadata.ts`
- ✅ `src/app/policy/page.tsx`
- ✅ `src/app/policy/metadata.ts`

## Next Steps

1. **Design pages** - Replace mockup content dengan design Anda
2. **Add images/content** - Setiap page siap untuk dikustomisasi
3. **Test navigation** - Pastikan menu bekerja dengan baik
4. **Check SEO** - Metadata sudah siap untuk Google indexing
