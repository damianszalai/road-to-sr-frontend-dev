# 🧪  01 - Registro de Usuario con Context y Formulario

Este es el primer ejercicio del roadmap personal hacia Senior Frontend Developer.

## 🎯 Objetivo

Practicar e integrar:

- React + TypeScript
- React Router DOM
- Context API
- React Hook Form
- Validación con Zod
- Buenas prácticas de organización

---

## 📝 Funcionalidad

### 1. `/register`

Pantalla con un formulario de registro de usuario:

- Nombre completo
- Email
- Edad
- Ciudad

**Validaciones:**

- Todos los campos requeridos
- Email válido
- Edad mínima: 16 años

Al enviar:

- Los datos se guardan en un `UserContext`
- Se redirige al perfil

---

### 2. `/profile`

- Muestra los datos registrados desde el Context
- Si no hay datos, redirige a `/register`
