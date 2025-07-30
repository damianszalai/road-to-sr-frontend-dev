# 05 - Admin Orders Panel (Next.js + shadcn/ui + Supabase)

This is the fifth exercise in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Build an administrative panel to view and manage **orders**, using:

- `Next.js` (App Router)
- `Supabase` as database
- `React Query` for data fetching
- `shadcn/ui` components for a clean, responsive UI

---

## 🧩 Features

- 📄 Order list view with status and metadata
- 🔄 Change order status via dropdown (`Pending`, `Paid`, `shipped`, `Cancelled`)
- 🧠 Optimistic UI on status updates
- 🔍 Optional filters (e.g. by status)
- 🎨 Clean table layout with modern styling

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Supabase** (database)
- **React Query**
- **shadcn/ui**
- **Tailwind CSS**

---

## 📁 Folder Structure

/05-orders-admin-next
├── app/
│ ├── layout.tsx
│ ├── page.tsx # Main order list
├── components/
│ ├── OrderTable.tsx
│ ├── OrderRow.tsx
│ ├── StatusDropdown.tsx
├── lib/
│ ├── supabaseClient.ts
│ └── queries.ts
├── types/
│ └── order.ts

---

## 🧱 Supabase Table Schema

```sql
create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  total numeric not null,
  status text not null default 'pending',
  created_at timestamp with time zone default now()
);

✅ Valid values for status: 'pending', 'paid', 'canceled'

🌐 How to Run
1. Setup environment variables:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

2. Install dependencies:
npm install

3. Start dev server:
npm run dev
```
