import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { MenuProvider } from './context/MenuContext';
import { OrderProvider } from './context/OrderContext';
import { ToastProvider } from './context/ToastContext';

// Customer Pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DishDetail from './pages/DishDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';

// Admin Pages
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import MenuManagement from './admin/MenuManagement';
import OrdersView from './admin/OrdersView';

const CustomerLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <MenuProvider>
        <CartProvider>
          <OrderProvider>
            <ToastProvider>
              <Routes>
                {/* Customer Routes */}
                <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
                <Route path="/dish/:id" element={<CustomerLayout><DishDetail /></CustomerLayout>} />
                <Route path="/cart" element={<CustomerLayout><Cart /></CustomerLayout>} />
                <Route path="/checkout" element={<CustomerLayout><Checkout /></CustomerLayout>} />
                <Route path="/order-placed" element={<CustomerLayout><OrderPlaced /></CustomerLayout>} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="menu" element={<MenuManagement />} />
                  <Route path="orders" element={<OrdersView />} />
                </Route>
              </Routes>
            </ToastProvider>
          </OrderProvider>
        </CartProvider>
      </MenuProvider>
    </Router>
  );
}

export default App;
