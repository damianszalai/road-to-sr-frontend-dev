# 02 - Product Listing with Supabase and React Query

This is the second exercise in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Build a page that lists products from a Supabase database, using React Query to handle async fetching, and display them with a clean UI using shadcn/ui components.

## 🧩 Features

- 📦 Fetch product list from Supabase
- 🔄 Loading and error states with React Query
- 🎨 Display products in cards using `shadcn/ui`
- ✅ Strong typing with TypeScript

## 🛠️ Tech Stack

- React + TypeScript
- Supabase
- React Query
- shadcn/ui
- Vite

## 🧱 Supabase Table Schema

Table: `products`

| Column      | Type      | Required           |
| ----------- | --------- | ------------------ |
| id          | UUID      | ✅ PK              |
| name        | text      | ✅                 |
| description | text      | ✅                 |
| price       | numeric   | ✅                 |
| stock       | integer   | ✅                 |
| created_at  | timestamp | ✅ default = now() |

## 📁 Folder Structure

/02-product-listing
/components
ProductCard.tsx # UI for each product
/pages
Products.tsx # List page
/lib
supabase.ts # Supabase client instance
queries.ts # React Query logic

markdown
Copy
Edit

## 🚀 How to Run

1. Set up a `.env` with Supabase keys:
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_anon_key

go
Copy
Edit

2. Install dependencies:

```bash
npm install
Run the project:

npm run dev
Go to http://localhost:5173/products

```
