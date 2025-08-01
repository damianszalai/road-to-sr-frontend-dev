# 07 - Performance: SSR vs CSR in Next.js with React Query

This is the seventh exercise in the **Road to Senior Frontend Developer** roadmap.

## ✅ Objective

Compare and understand the performance tradeoffs between:

- ✅ Server-Side Rendering (SSR) with React Query hydration
- ❌ Client-Side Rendering (CSR) with standard `useQuery`

---

## 🧠 Key Concepts

| Approach | Render Timing  | SEO | Initial UX    | TTFB | Complexity         |
| -------- | -------------- | --- | ------------- | ---- | ------------------ |
| CSR      | In the browser | ❌  | Loader → Data | Slow | Simple             |
| SSR      | On the server  | ✅  | Instant       | Fast | Requires hydration |

---

## 🛠️ Tech Stack

- **Next.js App Router**
- **React Query** + `HydrationBoundary`
- **Supabase** (data source)
- **shadcn/ui** for design system
- **Tailwind CSS**
- **TypeScript**

---

## 🧩 Features

- `/csr`: Client-side fetch using `useQuery()`
- `/ssr`: Server-side fetch with `prefetchQuery` + `dehydrate`
- React Query integration and cache
- Loading feedback and user-perceived speed comparison

---

## 🗂 Folder Structure

/07-performance-ssr-vs-csr
├── app/
│ ├── layout.tsx
│ ├── csr/page.tsx # CSR approach
│ ├── ssr/page.tsx # SSR prefetch + hydration
│ └── ssr/EventsList.tsx # Client-side hydrated component
├── lib/
│ ├── queryClient.ts # React Query setup
│ └── supabaseClient.ts
├── services/
│ └── getEvents.ts # Shared fetch logic

1. Add Supabase env:

NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key

2. Run:
   npm run dev
