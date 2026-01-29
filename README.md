# Restaurant Management System

A complete cloud kitchen ordering platform built with React JS and Tailwind CSS. This is a frontend-only demo application designed for client presentations.

![Restaurant Management System](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.6-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

### Customer Side
- **Home Page** - Browse today's menu with category filters (Breakfast, Lunch, Dinner)
- **Dish Details** - View complete information including ingredients, allergens, and serving size
- **Shopping Cart** - Add/remove items, adjust quantities, view order summary
- **Checkout** - Customer information form with payment method selection (COD & Card Demo)
- **Order Confirmation** - Professional order placed screen with order ID and delivery estimate

### Admin Panel (`/admin`)
- **Dashboard** - Overview of orders, revenue, and dish availability
- **Menu Management** - Toggle dish availability, update prices, manage stock
- **Orders View** - View and manage customer orders with status updates

## Tech Stack

- React 18.2.0
- React Router DOM 6.20.0
- Tailwind CSS 3.3.6
- Framer Motion 10.16.4
- Webpack 5
- Babel

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── admin/              # Admin panel pages
│   ├── AdminDashboard.js
│   ├── AdminLayout.js
│   ├── MenuManagement.js
│   └── OrdersView.js
├── components/         # Reusable components
│   ├── DishCard.js
│   ├── EmptyState.js
│   ├── Footer.js
│   ├── Navbar.js
│   └── Skeleton.js
├── context/           # Context API state management
│   ├── CartContext.js
│   ├── MenuContext.js
│   ├── OrderContext.js
│   └── ToastContext.js
├── data/              # Mock data
│   └── mockData.js
├── pages/             # Customer-facing pages
│   ├── Cart.js
│   ├── Checkout.js
│   ├── DishDetail.js
│   ├── Home.js
│   └── OrderPlaced.js
├── utils/             # Helper functions
│   └── helpers.js
├── App.js             # Main app with routing
├── index.js           # Entry point
└── index.css          # Global styles
```

## Key Features

### State Management
- Context API for global state (Cart, Menu, Orders)
- localStorage persistence
- Toast notifications for user feedback

### UX Enhancements
- Mobile-first responsive design
- Smooth animations with Framer Motion
- Loading skeletons
- Empty states with illustrations
- Real-time cart updates
- Sticky add-to-cart buttons

### Pakistani Market Touches
- Cash on Delivery (COD) as default
- Urdu/English dish names
- "Order before 5 PM" notice
- Home kitchen branding
- Simple, accessible language

## Routes

### Customer Routes
- `/` - Home page with menu
- `/dish/:id` - Dish detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout form
- `/order-placed` - Order confirmation

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/menu` - Menu management
- `/admin/orders` - Orders management

## Demo Data

The application includes pre-populated mock data for:
- 8 sample dishes (Biryani, Nihari, Karahi, etc.)
- 2 sample orders
- Price ranges: Rs. 150 - 500

All data is stored in localStorage and persists between sessions.

## Portfolio Presentation

**Title:** Cloud Kitchen Ordering Platform (Frontend Demo)

**Description:** A complete restaurant ordering UI with admin dashboard, cart, checkout, and payment flow designed for local food businesses in Pakistan.

**Technologies:** React, Tailwind CSS, Context API, Framer Motion, React Router

**Highlights:**
- Production-ready UI/UX
- Complete customer journey from browsing to order confirmation
- Admin panel for restaurant management
- Mobile-responsive design
- No backend required - perfect for client demos

## Future Enhancements

- Real-time order tracking
- Customer authentication
- Backend integration with Node.js/Express
- Payment gateway integration
- SMS/Email notifications
- Multi-restaurant support
- Reviews and ratings

## License

MIT License - feel free to use this for your portfolio or client demos.

## Contact

For questions or collaboration:
- GitHub: [Your GitHub]
- Email: [Your Email]

---

**Note:** This is a frontend demo application. No real payments are processed, and no backend server is required.
