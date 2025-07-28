# 01 - User Registration with Context and Validation

This is the first step in the **Road to Senior Frontend Developer** project.

## ✅ Objective

Build a simple registration flow using modern React practices, with a focus on:

- Form validation using `react-hook-form` and `zod`
- Type-safe form data with TypeScript
- Context API to manage user session
- Protected routes using React Router

## 🧩 Features

- `/register`:

  - User registration form with the following fields:
    - Full Name
    - Email
    - Age (must be at least 16)
    - City
  - Validations:
    - All fields required
    - Valid email
    - Age ≥ 16

- `/profile`:
  - Displays registered user info from context
  - If no user exists, redirects to `/register`

## 🛠️ Tech Stack

- React + TypeScript
- React Router DOM
- React Hook Form
- Zod for schema validation
- Context API

## 🚀 How to Run

```bash
npm install
npm run dev
Then navigate to http://localhost:5173/register to begin the flow.
```
