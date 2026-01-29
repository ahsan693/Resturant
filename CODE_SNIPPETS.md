# Code Snippets for Common Customizations

Quick copy-paste code snippets for customizing your restaurant management system.

## 🍽️ Adding New Dishes

### Add to mockData.js

```javascript
// src/data/mockData.js
// Add to dishesData array:

{
  id: 9,
  name: 'Chicken Tikka',
  urduName: 'چکن ٹکہ',
  description: 'Grilled chicken marinated in spices and yogurt',
  price: 280,
  image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
  category: 'Dinner', // Breakfast, Lunch, or Dinner
  servingSize: '1 person',
  ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lemon'],
  allergens: ['Dairy'],
  available: true,
  stock: 20,
},
```

## 🎨 Customizing Colors

### Update Tailwind Config

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color scale
        500: '#YOUR_COLOR',
        600: '#YOUR_DARKER_COLOR',
      },
      food: {
        orange: '#FF6B35',  // Change these
        yellow: '#F7931E',
        green: '#6BCB77',
        red: '#FF4C4C',
        // Add more colors
        blue: '#4A90E2',
        purple: '#9B59B6',
      }
    },
  },
},
```

### Use Custom Colors

```javascript
// In any component
<button className="bg-food-orange hover:bg-food-yellow text-white">
  Order Now
</button>
```

## 🏪 Changing Restaurant Branding

### Update Navbar

```javascript
// src/components/Navbar.js
<Link to="/" className="flex items-center space-x-2">
  <span className="text-2xl">🍽️</span> {/* Your emoji/logo */}
  <div>
    <h1 className="text-xl font-bold text-gray-900">
      Your Restaurant Name
    </h1>
    <p className="text-xs text-gray-500">
      Your tagline here
    </p>
  </div>
</Link>
```

### Update Footer

```javascript
// src/components/Footer.js
<div>
  <h3 className="text-lg font-bold mb-3">🍽️ Your Restaurant Name</h3>
  <p className="text-gray-400 text-sm">
    Your restaurant description and value proposition here.
  </p>
</div>

// Contact section
<div className="space-y-2 text-sm text-gray-400">
  <p>📞 Phone: YOUR-PHONE-NUMBER</p>
  <p>📧 Email: YOUR-EMAIL</p>
  <p>📍 YOUR-ADDRESS</p>
</div>
```

### Update Page Title

```html
<!-- public/index.html -->
<title>Your Restaurant Name - Fresh Meals Delivered</title>
```

## 💰 Changing Prices

### Update Delivery Charge

```javascript
// src/pages/Cart.js (Line ~12)
const deliveryCharges = 100; // Change to your amount

// src/pages/Checkout.js (Line ~27)
const deliveryCharges = 100; // Change to your amount
```

### Add Delivery Zones

```javascript
// src/utils/helpers.js - Add this function:

export const getDeliveryCharges = (area) => {
  const deliveryZones = {
    'Zone A': 50,
    'Zone B': 100,
    'Zone C': 150,
    'default': 100,
  };
  return deliveryZones[area] || deliveryZones.default;
};

// Then use in Cart.js and Checkout.js:
const deliveryCharges = getDeliveryCharges(selectedArea);
```

## 📱 Adding Categories

### Add New Category

```javascript
// src/pages/Home.js
const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drinks'];

// Then add dishes with these categories in mockData.js
```

## 🎨 Custom Animations

### Add New Animation

```javascript
// Import framer-motion
import { motion } from 'framer-motion';

// Fade in from bottom
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>

// Scale on hover
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Your button
</motion.div>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

## 🔔 Custom Toast Messages

### Add Different Toast Types

```javascript
// Use the toast context
import { useToast } from '../context/ToastContext';

const { showToast } = useToast();

// Success (green)
showToast('Order placed successfully!', 'success');

// Error (red)
showToast('Something went wrong!', 'error');

// Warning (yellow)
showToast('Low stock available!', 'warning');

// Info (blue)
showToast('Checking availability...', 'info');
```

## 📊 Admin Dashboard Stats

### Add Custom Stats

```javascript
// src/admin/AdminDashboard.js

// Add to stats array:
{
  title: 'Total Customers',
  value: getTotalCustomers(),
  icon: '👥',
  color: 'bg-purple-500',
  link: '/admin/customers',
},

// Implement the function:
const getTotalCustomers = () => {
  const uniqueCustomers = new Set(orders.map(o => o.customerName));
  return uniqueCustomers.size;
};
```

## 🎯 Custom Filters

### Add Dish Filters

```javascript
// src/pages/Home.js

const [filters, setFilters] = useState({
  category: 'All',
  priceRange: 'All',
  availability: 'All',
});

const filteredDishes = dishes.filter(dish => {
  if (filters.category !== 'All' && dish.category !== filters.category) return false;
  if (filters.priceRange === 'Budget' && dish.price > 200) return false;
  if (filters.priceRange === 'Premium' && dish.price < 300) return false;
  if (filters.availability === 'Available' && !dish.available) return false;
  return true;
});

// UI for filters
<select 
  value={filters.priceRange} 
  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
>
  <option value="All">All Prices</option>
  <option value="Budget">Budget (Under Rs. 200)</option>
  <option value="Premium">Premium (Over Rs. 300)</option>
</select>
```

## 🔍 Search Functionality

### Add Search Bar

```javascript
// src/pages/Home.js or src/components/Navbar.js

const [searchQuery, setSearchQuery] = useState('');

const searchedDishes = dishes.filter(dish =>
  dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  dish.urduName?.includes(searchQuery) ||
  dish.description.toLowerCase().includes(searchQuery.toLowerCase())
);

// Search input
<input
  type="text"
  placeholder="Search dishes..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="input-field"
/>
```

## 💳 Payment Method Customization

### Add Payment Options

```javascript
// src/pages/Checkout.js

const paymentMethods = [
  {
    id: 'cod',
    name: 'Cash on Delivery',
    description: 'Pay when you receive your order',
    icon: '💵',
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Pay securely with your card',
    icon: '💳',
  },
  {
    id: 'easypaisa',
    name: 'Easypaisa',
    description: 'Pay with Easypaisa mobile wallet',
    icon: '📱',
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    description: 'Pay with JazzCash mobile wallet',
    icon: '📱',
  },
];

// Render payment options
{paymentMethods.map(method => (
  <div
    key={method.id}
    onClick={() => handlePaymentMethodChange(method.id)}
    className={`payment-option ${selected === method.id ? 'selected' : ''}`}
  >
    <span className="text-2xl">{method.icon}</span>
    <div>
      <p className="font-semibold">{method.name}</p>
      <p className="text-sm text-gray-500">{method.description}</p>
    </div>
  </div>
))}
```

## 📅 Date/Time Features

### Add Time Slots

```javascript
// src/pages/Checkout.js

const timeSlots = [
  '11:00 AM - 12:00 PM',
  '12:00 PM - 1:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
];

const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

// UI
<div>
  <label>Preferred Delivery Time</label>
  <select
    value={selectedTimeSlot}
    onChange={(e) => setSelectedTimeSlot(e.target.value)}
    className="input-field"
  >
    <option value="">Select time slot</option>
    {timeSlots.map(slot => (
      <option key={slot} value={slot}>{slot}</option>
    ))}
  </select>
</div>
```

## 🏷️ Discount/Promo Codes

### Add Promo Code Feature

```javascript
// src/pages/Cart.js or Checkout.js

const [promoCode, setPromoCode] = useState('');
const [discount, setDiscount] = useState(0);

const promoCodes = {
  'FIRST10': 10, // 10% off
  'SAVE50': 50,  // Rs. 50 off
  'WELCOME': 15, // 15% off
};

const applyPromoCode = () => {
  const code = promoCode.toUpperCase();
  if (promoCodes[code]) {
    const discountValue = promoCodes[code];
    // If percentage
    if (code.includes('10') || code.includes('15')) {
      setDiscount(subtotal * (discountValue / 100));
    } else {
      // Fixed amount
      setDiscount(discountValue);
    }
    showToast(`Promo code applied! Rs. ${discount} off`, 'success');
  } else {
    showToast('Invalid promo code', 'error');
  }
};

// UI
<div className="flex gap-2">
  <input
    type="text"
    placeholder="Enter promo code"
    value={promoCode}
    onChange={(e) => setPromoCode(e.target.value)}
    className="input-field"
  />
  <button onClick={applyPromoCode} className="btn-primary">
    Apply
  </button>
</div>

// Show discount in total
{discount > 0 && (
  <div className="flex justify-between text-green-600">
    <span>Discount</span>
    <span>- {formatPrice(discount)}</span>
  </div>
)}
```

## 📸 Image Upload (Demo)

### Add Image Upload UI

```javascript
// src/admin/MenuManagement.js

const [newDishImage, setNewDishImage] = useState(null);

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setNewDishImage(imageUrl);
    
    // In a real app, you'd upload to a server here
    // For demo, we just use the local URL
  }
};

// UI
<div>
  <label>Dish Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="input-field"
  />
  {newDishImage && (
    <img src={newDishImage} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
  )}
</div>
```

## 🌐 Multi-Language Support

### Add Language Toggle

```javascript
// src/context/LanguageContext.js - Create this

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'ur'

  const t = {
    en: {
      home: 'Home',
      cart: 'Cart',
      checkout: 'Checkout',
      addToCart: 'Add to Cart',
      // ... more translations
    },
    ur: {
      home: 'ہوم',
      cart: 'کارٹ',
      checkout: 'چیک آؤٹ',
      addToCart: 'کارٹ میں شامل کریں',
      // ... more translations
    },
  };

  const translate = (key) => t[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Use in components
import { useLanguage } from '../context/LanguageContext';

const { t, language, setLanguage } = useLanguage();

<button>{t('addToCart')}</button>

// Language toggle
<button onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}>
  {language === 'en' ? 'اردو' : 'English'}
</button>
```

## 📊 Export Orders to CSV

### Add Export Feature

```javascript
// src/admin/OrdersView.js

const exportToCSV = () => {
  const headers = ['Order ID', 'Customer', 'Phone', 'Total', 'Status', 'Date'];
  const rows = orders.map(order => [
    order.id,
    order.customerName,
    order.phone,
    order.total + order.deliveryCharges,
    order.status,
    new Date(order.createdAt).toLocaleDateString(),
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `orders-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  
  showToast('Orders exported successfully!', 'success');
};

// Button
<button onClick={exportToCSV} className="btn-secondary">
  📥 Export to CSV
</button>
```

---

## 💡 Pro Tips

1. **Always test after changes:**
   ```bash
   npm start
   # Check console for errors
   ```

2. **Use existing components as templates**
3. **Keep mock data realistic**
4. **Test on mobile after UI changes**
5. **Clear localStorage when testing data changes:**
   ```javascript
   localStorage.clear()
   location.reload()
   ```

## 🎯 Next Level Features

Want to go further? Consider:
- User authentication (Firebase Auth)
- Real-time updates (Firebase Realtime DB)
- Backend API (Node.js + Express)
- Payment gateway (Stripe/PayPal)
- Email notifications (SendGrid)
- SMS integration (Twilio)

---

**Copy, paste, customize, and make it yours! 🚀**
