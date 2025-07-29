# 02 - Product Listing with Supabase and React Query

This is the second exercise in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Build a fully functional product listing page by integrating **Supabase** for data, **React Query** for fetching and caching, and **shadcn/ui** for modern UI components.

---

## 🧩 Features

- 📦 Fetch products from Supabase
- 🚀 Display loading state with Skeletons
- 💅 Responsive product cards using shadcn/ui
- ✅ Type-safe code with TypeScript
- 🔄 React Query for cache and async control

---

## 🛠️ Tech Stack

- Vite + React + TypeScript
- Supabase
- React Query
- shadcn/ui
- Tailwind CSS

---

## 📁 Folder Structure

/02-product-listing
├── src/
│ ├── components/
│ │ ├── ui/
│ │ │ ├── card.tsx
│ │ │ └── skeleton.tsx
│ ├── hooks/
│ │ └── useProducts.tsx
│ ├── lib/
│ │ └── supabaseClient.ts
│ ├── pages/
│ │ └── Products.tsx
│ ├── services/
│ │ └── getProducts.service.ts
│ ├── types/
│ │ └── product.ts
│ ├── App.tsx
│ └── main.tsx

---

## 🧱 Supabase Table Schema

Table: `products`

| Column      | Type      | Required           |
| ----------- | --------- | ------------------ |
| id          | UUID      | ✅ Primary Key     |
| name        | text      | ✅                 |
| description | text      | ✅                 |
| price       | numeric   | ✅                 |
| stock       | integer   | ✅                 |
| created_at  | timestamp | ✅ default = now() |

---

## 🌐 How to Run

1. Add your Supabase keys in a `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. Install dependencies:

```
npm install
```

3. Start dev server:

```
npm run dev
Visit http://localhost:5173
```
