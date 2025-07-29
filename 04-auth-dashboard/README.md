# 04 - Supabase Auth + Protected Dashboard

This is the fourth exercise in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Implement user authentication with Supabase using email and password, along with a protected dashboard using React Router.

---

## 🧩 Features

- 🔐 User registration and login with Supabase Auth
- 🔁 Persist session across reloads
- 👤 Protected route `/dashboard`
- 🧭 Redirection after login/register
- 🚪 Logout functionality
- 🎨 Forms with React Hook Form + Zod

---

## 🛠️ Tech Stack

- React + TypeScript
- Vite
- Supabase Auth
- React Router DOM
- React Hook Form
- Zod
- Tailwind CSS + shadcn/ui

---

## 📁 Folder Structure

/04-auth-dashboard
├── components/
│ └── ProtectedRoute.tsx
├── context/
│ └── AuthProvider.tsx
├── hooks/
│ └── useAuth.ts
├── pages/
│ ├── Login.tsx
│ ├── Register.tsx
│ ├── Dashboard.tsx
│ └── Home.tsx
├── lib/
│ └── supabaseClient.ts
├── App.tsx
└── main.tsx

---

## 🌐 Routes

| Path         | Access      | Description             |
| ------------ | ----------- | ----------------------- |
| `/`          | Public      | Landing page (optional) |
| `/register`  | Public      | Sign up form            |
| `/login`     | Public      | Login form              |
| `/dashboard` | Protected 🛡 | Requires login          |

---

## 🚀 How to Run

1. Add Supabase keys to `.env`:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. Install dependencies:

```
npm install
```

3. Run the app:

```
npm run dev
```

Visit http://localhost:5173
