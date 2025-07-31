# 06 - Event Registration with Limited Spots

This is the sixth exercise in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Build a system to register users to an event, where the event has a **limited number of spots**, and:

- Prevent overbooking
- Handle full capacity (waitlist or error)
- Manage state updates in real-time via UI

---

## 🧩 Features

- 📄 List of events
- ✅ Register button per event
- 🚫 If full → prevent new registrations
- 🔄 Spot count updates in UI
- 🧠 Optional waitlist logic

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Supabase (DB + Auth)
- React Query
- shadcn/ui

---

## 📁 Structure

/06-event-registration
├── app/
│ ├── events/page.tsx
│ └── layout.tsx
├── components/
│ └── EventCard.tsx
├── hooks/
│ ├── useEvents.ts
│ └── useRegisterToEvent.ts
├── services/
│ ├── getEvents.ts
│ └── registerToEvent.ts
├── types/
│ └── event.ts

---

## 🧱 Supabase Schema

### `events` table

```sql
create table events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  date timestamp not null,
  spots integer not null,
  created_at timestamp with time zone default now()
);

registrations table

create table registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  user_id uuid not null,
  created_at timestamp with time zone default now(),
  unique (event_id, user_id)
);

```

🚀 How to Run:

```
npm install
npm run dev

```
