# E-Commerce Website — Final Project (Module 7, DEV.F)

This is a full-stack e-commerce application built as the final project for Module 7 of the Web Development program at DEV.F.

The project simulates a real online store with role-based features for regular users and administrators, mock API integration, and client-side functionality using React and Bootstrap.

---

## 🚀 Tech Stack

- **Frontend:** React, React Router DOM, Bootstrap 5
- **State & Forms:** React Hooks, Context API, react-hook-form, yup
- **Routing & Navigation:**
  - Centralized with a `RoutesIndex` component
  - Role-based route protection
  - Conditional rendering depending on login status, role, and viewport
- **Alerts & Utilities:** SweetAlert2, image fallback handling, utility abstraction
- **API:** Axios integration with a mock REST API powered by `json-server-jwt`

---

## 🔐 User Access

You can log in using one of the following pre-registered accounts:

- 👤 **Regular User**
  - Email: `drstrange@marvel.com`
  - Password: `multiverso`

- 🛠️ **Admin User**
  - Email: `superman@dc.com`
  - Password: `superman`

Or you can create your own account via the **Sign Up** page.  
> ⚠️ The mock server resets when idle (due to Render’s free tier), so any newly created data (e.g., user accounts or products) will be lost when the server goes to sleep.

---

## 📚 Documentation

- 🔗 [Mock API Documentation (json-server-jwt)](https://github.com/warderer/json-server-jwt)  
- 🔗 [Live Mock API Server](https://ecommerce-json-jwt.onrender.com/)
- 🔗 [Project Repository](https://github.com/davittrdzv/M7-ProyectoFinalSensei-ECommerce)

---

## 🧪 Features Summary

- Shopping cart with persistent state (localStorage)
- Role-based rendering: Admins can create products; users can browse and purchase
- Custom 404 page for invalid routes
- Responsive layout with viewport-aware rendering
- Modular and reusable logic across the app

---

## 📦 Setup & Run (Local)

1. Clone the repository:

   ```
   git clone https://github.com/davittrdzv/M7-ProyectoFinalSensei-ECommerce.git
   ```
2. Install dependencies:

    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```
4. (Optional) Start the local mock API server (if not using the hosted one):
    ```
    json-server-auth --watch db.json --port 3000
    ```

---
## 🎓 Credits

Created by David Rodríguez as part of the DEV.F Web Development Program.
