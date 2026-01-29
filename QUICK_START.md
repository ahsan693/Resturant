# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies (Already Done!)
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will automatically open at `http://localhost:3000`

### 3. Explore the Application

#### Customer Side:
- **Home:** Browse menu at `http://localhost:3000/`
- **Dish Details:** Click any dish to see details
- **Cart:** Add items and view cart (cart icon in navbar)
- **Checkout:** Complete the order flow
- **Order Confirmation:** See the professional order placed screen

#### Admin Panel:
- **Dashboard:** Visit `http://localhost:3000/admin`
- **Menu Management:** `http://localhost:3000/admin/menu`
  - Toggle dish availability with switches
  - Click the edit icon (✏️) to update prices
  - Filter by Available/Sold Out
- **Orders:** `http://localhost:3000/admin/orders`
  - View all orders
  - Change order status with dropdown

## 📱 Key Features to Demo

### Customer Features:
1. **Smart Cart:**
   - Add dishes from home or detail page
   - Adjust quantities
   - Automatic price calculations
   - Persists in localStorage

2. **Checkout Flow:**
   - Customer information form
   - Multiple payment methods (COD & Card Demo)
   - Order summary

3. **Order Confirmation:**
   - Unique order ID
   - Estimated delivery time
   - Complete order details
   - Print receipt option

### Admin Features:
1. **Dashboard Stats:**
   - Today's orders count
   - Today's revenue
   - Active dishes count
   - Sold out items

2. **Menu Management:**
   - Toggle availability with switches (toast notifications!)
   - Edit prices inline
   - See stock levels with color coding

3. **Order Management:**
   - View all orders
   - Filter by status
   - Update order status
   - See customer details

## 🎨 UI/UX Highlights

- **Animations:** Smooth transitions with Framer Motion
- **Responsive:** Works perfectly on mobile, tablet, and desktop
- **Toast Notifications:** Real-time feedback for user actions
- **Color-coded Status:** Visual indicators for stock, availability, order status
- **Pakistani Market Touch:** Urdu names, COD payment, local pricing

## 💾 Data Persistence

All data is stored in browser's localStorage:
- Cart items persist between sessions
- Menu updates persist
- Orders persist
- Price changes persist

## 🎯 Demo Flow for Clients

1. **Start on Home:** Show the clean menu layout
2. **Click a Dish:** Demonstrate detailed view
3. **Add to Cart:** Show the toast notification
4. **View Cart:** Display cart management
5. **Checkout:** Complete a test order
6. **Order Confirmation:** Show the professional success page
7. **Switch to Admin:** Navigate to `/admin`
8. **Toggle Availability:** Show real-time updates
9. **Update Price:** Demonstrate inline editing
10. **Check Orders:** Show the new order in admin panel

## 🔧 Customization

### Change Restaurant Name:
Edit [src/components/Navbar.js](src/components/Navbar.js) and [src/components/Footer.js](src/components/Footer.js)

### Add More Dishes:
Edit [src/data/mockData.js](src/data/mockData.js) and add to the `dishesData` array

### Change Colors:
Edit [tailwind.config.js](tailwind.config.js) to customize the color scheme

### Modify Delivery Charge:
Edit the `deliveryCharges` constant in:
- [src/pages/Cart.js](src/pages/Cart.js)
- [src/pages/Checkout.js](src/pages/Checkout.js)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder that you can:
- Deploy to Netlify, Vercel, or any static hosting
- Show to clients as a live demo
- Include in your portfolio

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process using port 3000 (Windows)
npx kill-port 3000
```

**Cart not saving?**
- Check browser localStorage is enabled
- Clear localStorage: Open DevTools → Application → Local Storage → Clear

**Images not loading?**
- Images use Unsplash CDN
- Placeholders will show if images fail to load

## 🎓 Portfolio Tips

When presenting this project:
- Emphasize the **complete user journey**
- Highlight **UX touches** (animations, toasts, empty states)
- Mention **state management** with Context API
- Show **responsive design** on different screen sizes
- Demonstrate **real-time updates** between admin and customer views

## 📞 Support

Need help? Check:
- Console for errors: F12 → Console
- Network tab for failed requests: F12 → Network
- React DevTools for component state

---

**Ready to impress clients!** 🚀
