![Cravee Logo](https://your-image-url.com/logo.png)

# 🍽️ Cravee — Food Ordering App

**Cravee** is a full-stack food ordering web application built with the MERN stack. It features a user-friendly customer frontend, an admin panel for managing food items and orders, and secure online payments using Stripe.

---
## 🌐 Live Links

* **Frontend (Customer):** [https://cravee-n92s.vercel.app/](https://cravee-n92s.vercel.app/)
* **Admin Panel:** [https://cravee-two.vercel.app/](https://cravee-two.vercel.app/)
* **Backend API:** [https://cravee.onrender.com](https://cravee.onrender.com)
* ---

## 📦 Tech Stack

**Frontend:** React, Vite, CSS, Axios
**Backend:** Node.js, Express.js, MongoDB, Mongoose
**Payments:** Stripe API (Test Mode)
**Hosting:** Frontend (Vercel), Backend (Render)

---

## ⚙️ Features

* 🍕 Customer-facing food ordering website
* 👩‍💻 Admin dashboard to manage items, orders
* 🔐 User authentication with JWT
* 💳 **Online payments with Stripe (test mode)**
* 🛒 Add to Cart, Remove from Cart
* 📦 Place orders and track status
* 📤 Upload product images
* 🌐 Hosted frontend (Vercel), backend (Render)

---

## 💳 Stripe Payment Integration

Cravee uses **Stripe Checkout** to securely handle payments.

### 🧪 Test it using these test card details:

* **Card Number:** `4242 4242 4242 4242`
* **Expiry Date:** Any future date
* **CVV:** Any 3 digits

🚨 No real money is used or transferred. All transactions are handled in **Stripe Test Mode**.

---

## 🔐 Environment Variables

For the backend, create a `.env` file:

```env
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

For the frontend:

```env
VITE_BACKEND_URL=https://cravee.onrender.com
```

---

## 🚀 How to Run Locally

```bash
# Clone repo
$ git clone https://github.com/shaika-123/Cravee.git

# Install frontend dependencies
$ cd frontend
$ npm install
$ npm run dev

# Install backend dependencies
$ cd backend
$ npm install
$ npm start
```


## 🙋‍♀️ Made with 💖 by Afifa Shaik

Let's connect on [LinkedIn](https://www.linkedin.com/in/afifa-shaik/)
Portfolio and more projects coming soon!

![Stripe](https://img.shields.io/badge/Stripe-Integrated-blueviolet?logo=stripe)
