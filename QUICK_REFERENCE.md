# Quick Reference - Restaurant Management System

## 🎯 Essential Commands

### Development
```bash
# Start development server (app opens at http://localhost:3000)
npm start

# Build for production
npm run build

# Test production build locally
npx serve dist
```

### Project Location
```
d:\resturant-managwmnt-system
```

## 🌐 Important URLs

### Local Development
- **Customer Site:** http://localhost:3000/
- **Admin Panel:** http://localhost:3000/admin
- **Network Access:** http://192.168.100.7:3000/

### Customer Pages
- Home: `/`
- Dish Detail: `/dish/:id` (e.g., `/dish/1`)
- Cart: `/cart`
- Checkout: `/checkout`
- Order Placed: `/order-placed`

### Admin Pages
- Dashboard: `/admin`
- Menu Management: `/admin/menu`
- Orders: `/admin/orders`

## 📁 Quick File Reference

### Need to Edit?

**Restaurant Name:**
- [src/components/Navbar.js](src/components/Navbar.js) (Line 11-12)
- [src/components/Footer.js](src/components/Footer.js) (Line 8)
- [public/index.html](public/index.html) (Line 6)

**Dishes/Menu:**
- [src/data/mockData.js](src/data/mockData.js)

**Colors:**
- [tailwind.config.js](tailwind.config.js) (Lines 8-21)

**Delivery Charges:**
- [src/pages/Cart.js](src/pages/Cart.js) (Line 12)
- [src/pages/Checkout.js](src/pages/Checkout.js) (Line 27)

**Contact Info:**
- [src/components/Footer.js](src/components/Footer.js) (Lines 14-17)
- [src/pages/OrderPlaced.js](src/pages/OrderPlaced.js) (Line 127)

## 🎨 Color Scheme

```css
Primary Orange: #FF6B35
Yellow: #F7931E
Green: #6BCB77
Red: #FF4C4C
```

## 📝 Mock Data

### Sample Dishes (8 total)
1. Chicken Biryani - Rs. 350
2. Halwa Puri - Rs. 200
3. Nihari - Rs. 400
4. Chicken Karahi - Rs. 450
5. Beef Pulao - Rs. 380
6. Paratha Roll - Rs. 150
7. Daal Chawal - Rs. 180
8. Fish Tikka - Rs. 500 (Sold Out)

### Sample Orders (2 total)
- ORD-2026-001 - Ahmed Khan
- ORD-2026-002 - Fatima Ali

## 🔧 Common Tasks

### Add a New Dish
Edit `src/data/mockData.js`:
```javascript
{
  id: 9, // Next ID
  name: 'Your Dish Name',
  urduName: 'اردو نام',
  description: 'Description here',
  price: 300,
  image: 'https://unsplash.com/photo-url',
  category: 'Lunch', // Breakfast, Lunch, or Dinner
  servingSize: '1-2 persons',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  allergens: ['Dairy'], // Optional
  available: true,
  stock: 15,
}
```

### Change Restaurant Name
1. `src/components/Navbar.js` - Line 11
2. `src/components/Footer.js` - Line 8
3. `public/index.html` - Line 6

### Update Delivery Charge
Change the `deliveryCharges` value in:
1. `src/pages/Cart.js`
2. `src/pages/Checkout.js`

### Customize Colors
Edit `tailwind.config.js` theme.extend.colors

### Clear All Data
Open browser console:
```javascript
localStorage.clear()
location.reload()
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npx kill-port 3000
npm start
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm cache clean --force
npm install
npm run build
```

### Images Not Loading
- Check internet connection (uses Unsplash CDN)
- Placeholder images will show on error

### Cart Not Saving
- Check browser allows localStorage
- Open DevTools → Application → Local Storage

## 📊 Project Stats

- **Total Files:** 40+
- **Components:** 9
- **Pages:** 10
- **Context Providers:** 4
- **Routes:** 10
- **Dependencies:** 17

## 📚 Documentation

- **README.md** - Project overview
- **QUICK_START.md** - Getting started
- **TESTING_CHECKLIST.md** - Feature testing
- **DEPLOYMENT.md** - Deploy instructions
- **PROJECT_SUMMARY.md** - Complete overview
- **QUICK_REFERENCE.md** - This file

## 🎯 5-Minute Demo Script

1. **Start** → Home page (`/`)
2. **Browse** → Category filters
3. **Detail** → Click dish (`/dish/1`)
4. **Add** → Add to cart (see toast)
5. **Cart** → View cart (`/cart`)
6. **Checkout** → Fill form (`/checkout`)
7. **Success** → Order placed (`/order-placed`)
8. **Admin** → Go to admin (`/admin`)
9. **Toggle** → Mark dish sold out
10. **Update** → Change order status

**Time:** 5 minutes | **Impact:** Maximum!

## 🚀 Deploy in 3 Steps

### Netlify (Easiest)
```bash
npm run build
# Drag 'dist' folder to netlify.com/drop
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run deploy
```

## 💡 Pro Tips

1. **Test locally before deploy:**
   ```bash
   npm run build
   npx serve dist
   ```

2. **Check for errors:**
   - F12 → Console
   - Look for red errors

3. **Test on mobile:**
   - Use your phone's browser
   - Or Chrome DevTools → Toggle device toolbar

4. **Clear cache if needed:**
   ```bash
   Ctrl + Shift + Delete (or Cmd + Shift + Delete on Mac)
   ```

5. **View on network:**
   - Access from phone: `http://192.168.100.7:3000/`
   - Make sure you're on same WiFi

## 🎉 Success Indicators

✅ **App is working if:**
- Server starts at http://localhost:3000
- No console errors (F12)
- Home page shows dishes
- Cart icon shows count when items added
- Admin panel loads at /admin
- Toast notifications appear
- LocalStorage saves data (check Application tab)

## 📞 Quick Help

**Can't start server?**
- Check if port 3000 is free
- Try: `npx kill-port 3000`

**Build fails?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Can't see changes?**
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache

**Need to reset data?**
- Console: `localStorage.clear()`
- Refresh page

---

**Everything you need in one place! 🎯**

**App running?** Start exploring at http://localhost:3000 🚀
