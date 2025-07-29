# 03 - Product Variants with Supabase Relations

This is the third exercise in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Extend the product listing system to support **variants** (e.g., color, size), using relational data in Supabase and nested queries.

---

## 🧩 Features

- ➕ Variants attached to each product (1:N relation)
- 🧩 Nested fetch from Supabase with `.select('*, variants(*)')`
- 🧠 Type-safe models with nested arrays
- 🎨 Visual display of variants per product
- 📦 Realistic stock control per variant

---

## 🛠️ Tech Stack

- Supabase (relational schema)
- React + TypeScript
- React Query
- shadcn/ui

---

## 📁 Folder Structure

/03-product-variants
├── components/
│ └── VariantBadge.tsx
├── hooks/
│ └── useProductsWithVariants.tsx
├── services/
│ └── getProductsWithVariants.service.ts
├── types/
│ └── productWithVariants.ts
├── pages/
│ └── Products.tsx
├── lib/
│ └── supabaseClient.ts
├── App.tsx
└── main.tsx

---

## 🧱 Supabase Schema

### `products` table (same as previous)

### `variants` table

```sql
create table public.variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  name text not null,
  stock integer not null
);


🌐 How to Run
Add Supabase keys to .env:


VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
Install dependencies:


npm install
Start dev server:


npm run dev
```
