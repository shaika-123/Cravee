<p align="center">
  <img src="https://raw.githubusercontent.com/shaika-123/Cravee/main/frontend/src/assets/logo.png" alt="Cravee Logo" width="250"/>
</p>

<h1 align="center">🍽️ Cravee — Food Ordering App</h1>

[![Deployment Status](https://img.shields.io/badge/Deployment-Live-brightgreen)](https://cravee.onrender.com)
[![Frontend](https://img.shields.io/badge/Frontend-Live-blue)](https://cravee-two.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/Admin-Live-orange)](https://cravee-n92s.vercel.app/)
[![Node.js Version](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)](https://www.mongodb.com/)
[![Cloudinary](https://img.shields.io/badge/Storage-Cloudinary-blue)](https://cloudinary.com/)
![Stripe](https://img.shields.io/badge/Stripe-Integrated-blueviolet?logo=stripe)

**Cravee** is a full-stack food ordering web application built with the MERN stack. It features a user-friendly customer frontend, an admin panel for managing food items and orders, secure online payments using Stripe, and cloud-based image management with Cloudinary.

---

## 🌐 Live Links

* **🛒 Frontend (Customer):** [https://cravee-two.vercel.app/](https://cravee-two.vercel.app/)
* **⚙️ Admin Panel:** [https://cravee-n92s.vercel.app/](https://cravee-n92s.vercel.app/)
* **🔌 Backend API:** [https://cravee.onrender.com](https://cravee.onrender.com)

---

## 🏗️ Project Structure

```
Cravee/
├── 📁 backend/          # Node.js/Express API
│   ├── config/          # Database & Cloudinary config
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth & file upload middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   └── uploads/         # Local file storage (dev)
├── 📁 frontend/         # React customer interface
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # State management
│   │   ├── pages/       # Page components
│   │   └── assets/      # Images and styles
├── 📁 admin/            # React admin dashboard
│   ├── src/
│   │   ├── components/  # Admin components
│   │   ├── pages/       # Admin pages
│   │   └── assets/      # Admin assets
└── 📄 README.md
```
---

## 📦 Tech Stack

**Frontend:** React.js, Vite, CSS3, Axios, Context API
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
**File Upload:** Multer, Cloudinary
**Payments:** Stripe API (Test Mode)
**Hosting:** Frontend (Vercel), Backend (Render), Database (MongoDB Atlas)

---

## ⚙️ Features

### 🛒 **Customer Experience**
* 🍕 Browse food items by categories (Salads, Rolls, Desserts, Sandwiches, etc.)
* � Add to Cart, Remove from Cart with quantity management
* 🔐 User authentication and secure login with JWT
* 💳 **Secure online payments with Stripe Checkout**
* 📦 Place orders and track order status
* 📱 Responsive design for all devices

### 👨‍💼 **Admin Panel**
* � Upload product images with Cloudinary integration
* ➕ Add, edit, and remove food items
* 📋 Manage orders and update order status
* � View user orders and analytics
* 🖼️ Cloud-based image management

### 🔧 **Technical Features**
* 🔒 JWT-based authentication system
* 📡 RESTful API design
* �️ File upload with Multer and Cloudinary
* ✅ Input validation and comprehensive error handling
* 🚀 Production-ready deployment configuration
* 🏥 Health check endpoints for monitoring

---

## 📡 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Management
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `DELETE /api/food/remove` - Remove food item (Admin)

### Cart & Orders
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart/get` - Get user cart
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)

### Health Check
- `GET /` - API status and information
- `GET /health` - Health check endpoint

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

For the backend, create a `.env` file in the `backend` directory:

```env
# Database Configuration
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/cravee

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Server Configuration
PORT=4000
NODE_ENV=development
```

### 🚀 Render Deployment Environment Variables
When deploying to Render, set these environment variables in your service settings:
- `NODE_ENV=production`
- `MONGO_URL` (your MongoDB Atlas connection string)
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `JWT_SECRET`
- `STRIPE_SECRET_KEY`
## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account
- Stripe account (for payments)

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/shaika-123/Cravee.git
cd Cravee

# 2. Setup Backend
cd backend
npm install

# 3. Setup Frontend
cd ../frontend
npm install

# 4. Setup Admin Panel
cd ../admin
npm install

# 5. Create .env file in backend directory with your credentials

# 6. Start Backend Server
cd backend
npm start
# Server runs on http://localhost:4000

# 7. Start Frontend (in new terminal)
cd frontend
npm run dev
# App runs on http://localhost:5173

# 8. Start Admin Panel (in new terminal)
cd admin
npm run dev
# Admin panel runs on http://localhost:5174
```

## 🌐 Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set **Root Directory**: `backend/`
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `npm start`
6. Add all environment variables listed above
7. Deploy!

### Frontend Deployment (Vercel)
1. Create new project on Vercel
2. Connect your GitHub repository
3. Set **Framework Preset**: Vite
4. Set **Root Directory**: `frontend/`
5. Deploy!

### Admin Panel Deployment (Vercel)
1. Create new project on Vercel
2. Set **Root Directory**: `admin/`
3. Deploy!

---

## 🛠️ Technical Implementation Details

### Image Upload System
- **Development**: Files stored locally in `uploads/` folder
- **Production**: Images uploaded to Cloudinary for scalable storage
- **Processing**: Base64 encoding for reliable cross-platform uploads
- **Validation**: File type and size restrictions

### Authentication System
- JWT tokens for secure user sessions
- Password hashing with bcrypt
- Protected routes for admin functionality
- Session persistence across page refreshes

### Payment Integration
- Stripe Checkout for secure payment processing
- Test mode enabled for safe development
- Webhook integration for order status updates
- PCI-compliant payment handling

### Database Design
- MongoDB with Mongoose ODM
- Optimized schemas for food items, users, and orders
- Indexing for improved query performance
- Data validation at database level

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


## 🙋‍♀️ Made with 💖 by Afifa Shaik

**Connect with me:**
- 💼 [LinkedIn](https://www.linkedin.com/in/afifa-shaik-470072268/)
- 🐱 [GitHub](https://github.com/shaika-123)
- 📧 Email: [afifashaik248@gmail.com]



---

## 🙏 Acknowledgments

- **Cloudinary** for robust image management
- **Stripe** for secure payment processing
- **MongoDB Atlas** for reliable database hosting
- **Render** for seamless backend deployment
- **Vercel** for lightning-fast frontend hosting

---

<div align="center">
  <strong>🍽️ Made with ❤️ for food lovers everywhere! 🍽️</strong>
  
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
