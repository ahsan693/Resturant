# Feature Testing Checklist ✅

Use this checklist when demonstrating the application to clients or for QA testing.

## 🛍️ Customer Side Testing

### Home Page (`/`)
- [ ] Page loads with restaurant branding
- [ ] Current date is displayed
- [ ] Menu items are displayed in grid layout
- [ ] Category filter buttons work (All, Breakfast, Lunch, Dinner)
- [ ] Dish cards show:
  - [ ] Image
  - [ ] Name (English & Urdu)
  - [ ] Price
  - [ ] Description
  - [ ] Category badge
  - [ ] "Add to Cart" button
- [ ] Sold out dishes are grayed out
- [ ] "Only X left" badge shows for low stock items
- [ ] Cart icon shows item count
- [ ] Hover animation on dish cards works

### Dish Detail Page (`/dish/:id`)
- [ ] Click on dish card navigates to detail page
- [ ] Large dish image is displayed
- [ ] All dish information is visible:
  - [ ] Name (English & Urdu)
  - [ ] Price
  - [ ] Description
  - [ ] Serving size
  - [ ] Availability status
  - [ ] Ingredients list
  - [ ] Allergens (if any)
- [ ] Quantity selector works:
  - [ ] Increment button (+)
  - [ ] Decrement button (-)
  - [ ] Cannot go below 1
- [ ] Price updates with quantity
- [ ] Add to Cart button works
- [ ] Toast notification appears on add to cart
- [ ] Back button works
- [ ] Sold out dishes show disabled button

### Cart Page (`/cart`)
- [ ] Cart icon in navbar shows correct count
- [ ] Empty cart shows empty state
- [ ] Cart items display:
  - [ ] Dish image
  - [ ] Name
  - [ ] Price per item
  - [ ] Quantity controls
  - [ ] Subtotal per item
  - [ ] Remove button
- [ ] Quantity controls work:
  - [ ] Increase quantity
  - [ ] Decrease quantity
  - [ ] Remove item when quantity = 0
- [ ] Remove button works
- [ ] Toast shows when item removed
- [ ] Price calculations are correct:
  - [ ] Subtotal
  - [ ] Delivery charges (Rs. 100)
  - [ ] Total
- [ ] "Continue Shopping" link works
- [ ] "Proceed to Checkout" button works
- [ ] Prices animate on quantity change

### Checkout Page (`/checkout`)
- [ ] Redirects to cart if cart is empty
- [ ] Customer information form:
  - [ ] Name field
  - [ ] Phone field
  - [ ] Address field
  - [ ] All fields are required
- [ ] Payment method selection:
  - [ ] COD option
  - [ ] Card option
  - [ ] Radio buttons work
- [ ] Card payment fields show when selected:
  - [ ] Card number
  - [ ] Cardholder name
  - [ ] Expiry
  - [ ] CVV
  - [ ] Demo notice is shown
- [ ] Order summary shows:
  - [ ] All items with quantities
  - [ ] Subtotal
  - [ ] Delivery charges
  - [ ] Total
- [ ] Form validation works
- [ ] "Place Order" button works

### Order Placed Page (`/order-placed`)
- [ ] Success animation plays
- [ ] Green checkmark shows
- [ ] Order details display:
  - [ ] Unique order ID
  - [ ] Estimated delivery time
  - [ ] Customer name
  - [ ] Phone number
  - [ ] Delivery address
  - [ ] All ordered items
  - [ ] Price breakdown
  - [ ] Payment method
- [ ] "Track Order" button is disabled
- [ ] "Continue Shopping" button works
- [ ] "Print Receipt" button works
- [ ] Contact information is shown

## ⚙️ Admin Panel Testing

### Admin Dashboard (`/admin`)
- [ ] Admin navigation bar shows
- [ ] Stats cards display:
  - [ ] Today's orders count
  - [ ] Today's revenue
  - [ ] Active dishes count
  - [ ] Sold out items count
- [ ] Stats are clickable and navigate correctly
- [ ] Quick actions menu works:
  - [ ] Manage Menu link
  - [ ] View Orders link
  - [ ] Customer View link
- [ ] Recent orders section shows:
  - [ ] Order ID
  - [ ] Customer name
  - [ ] Total amount
  - [ ] Status badge
- [ ] Empty state shows when no orders

### Menu Management (`/admin/menu`)
- [ ] Page loads with all dishes
- [ ] Filter buttons work:
  - [ ] All Dishes
  - [ ] Available
  - [ ] Sold Out
- [ ] Table displays all dish information:
  - [ ] Image
  - [ ] Name (English & Urdu)
  - [ ] Category
  - [ ] Price
  - [ ] Stock
  - [ ] Status badge
  - [ ] Toggle switch
- [ ] Price editing works:
  - [ ] Click edit icon
  - [ ] Input field appears
  - [ ] Save button (✓) saves new price
  - [ ] Cancel button (✗) cancels edit
  - [ ] Toast notification shows
- [ ] Availability toggle works:
  - [ ] Switch toggles on/off
  - [ ] Status badge updates
  - [ ] Toast notification shows
- [ ] Stock shows color coding:
  - [ ] Red for 0
  - [ ] Yellow for ≤5
  - [ ] Green for >5
- [ ] Hover effect on table rows

### Orders View (`/admin/orders`)
- [ ] All orders are displayed
- [ ] Filter buttons work:
  - [ ] All Orders
  - [ ] Pending
  - [ ] Preparing
  - [ ] Completed
  - [ ] Cancelled
- [ ] Each order card shows:
  - [ ] Order ID
  - [ ] Date and time
  - [ ] Status badge
  - [ ] Customer name
  - [ ] Phone number
  - [ ] Address
  - [ ] Payment method
  - [ ] All items with quantities
  - [ ] Price breakdown
  - [ ] Status dropdown
- [ ] Status dropdown works:
  - [ ] Changes order status
  - [ ] Toast notification shows
  - [ ] Badge updates immediately
- [ ] Empty state shows when no orders match filter

## 🔄 Integration Testing

### Customer → Admin Flow
- [ ] Place an order as customer
- [ ] Navigate to admin panel
- [ ] New order appears in dashboard
- [ ] New order appears in orders view
- [ ] Update order status in admin
- [ ] Revenue updates in dashboard

### Admin → Customer Flow
- [ ] Mark dish as "Sold Out" in admin
- [ ] Navigate to customer home page
- [ ] Dish shows as "Sold Out"
- [ ] Cannot add to cart
- [ ] Mark as "Available" again
- [ ] Can add to cart again

### Data Persistence
- [ ] Add items to cart
- [ ] Refresh page
- [ ] Cart items persist
- [ ] Update dish price in admin
- [ ] Refresh page
- [ ] New price persists
- [ ] Place an order
- [ ] Refresh page
- [ ] Order persists in admin

## 📱 Responsive Testing

### Mobile (< 768px)
- [ ] Navigation works
- [ ] Menu grid shows 1 column
- [ ] Cart layout is single column
- [ ] Checkout form is mobile-friendly
- [ ] Admin tables are scrollable
- [ ] All buttons are touch-friendly

### Tablet (768px - 1024px)
- [ ] Menu grid shows 2 columns
- [ ] Cart shows responsive layout
- [ ] Admin dashboard is 2 columns

### Desktop (> 1024px)
- [ ] Menu grid shows 4 columns
- [ ] All layouts are properly spaced
- [ ] Admin panel is full featured

## 🎨 Visual Testing

### Animations
- [ ] Dish cards hover effect
- [ ] Button hover effects
- [ ] Toast slide-in animation
- [ ] Order success checkmark animation
- [ ] Page transitions are smooth

### Colors & Branding
- [ ] Orange theme is consistent
- [ ] Status colors are clear:
  - [ ] Green for success/available
  - [ ] Yellow for warning/low stock
  - [ ] Red for error/sold out
  - [ ] Blue for info/preparing
- [ ] Text is readable
- [ ] Contrast is sufficient

### Icons & Images
- [ ] All emoji icons display
- [ ] Dish images load
- [ ] Fallback images work
- [ ] Cart icon badge shows

## 🐛 Error Handling

- [ ] Invalid dish ID shows error page
- [ ] Empty cart checkout redirects to cart
- [ ] Order placed without order data handles gracefully
- [ ] Image loading errors show placeholder
- [ ] Form validation shows errors

## ✨ Polish Features

- [ ] Toast notifications appear for:
  - [ ] Add to cart
  - [ ] Remove from cart
  - [ ] Price updated
  - [ ] Availability toggled
  - [ ] Status changed
- [ ] Loading states where appropriate
- [ ] Empty states for:
  - [ ] Empty cart
  - [ ] No orders
  - [ ] No dishes in filter
- [ ] Smooth scrolling
- [ ] Disabled states are clear
- [ ] Active states are highlighted

---

## 🎯 Client Demo Script

**Recommended flow for 5-minute demo:**

1. **Start:** Home page - "This is what customers see"
2. **Browse:** Show category filters
3. **Detail:** Click a dish, show detailed view
4. **Add:** Add 2-3 items to cart (show toasts)
5. **Cart:** Review cart, adjust quantities
6. **Checkout:** Fill form, select COD
7. **Success:** Show professional order confirmation
8. **Admin:** Navigate to `/admin`
9. **Dashboard:** Show today's stats
10. **Menu:** Toggle availability (show real-time update)
11. **Orders:** Show the order we just placed
12. **Update:** Change order status
13. **Finale:** "All without any backend - perfect for demos!"

**Time:** ~5 minutes | **Impact:** Maximum 🚀

---

**All features working?** Ship it! 🎉
