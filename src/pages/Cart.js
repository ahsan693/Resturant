import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/helpers';
import EmptyState from '../components/EmptyState';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const deliveryCharges = 100;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryCharges;

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
    showToast(`${item.name} removed from cart`, 'info');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <EmptyState
          icon={
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          title="Your cart is empty"
          description="Looks like you haven't added any delicious dishes yet. Start exploring our menu and add your favorites!"
          action={
            <Link to="/" className="btn-primary inline-block">
              Browse Menu
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-dark-900 mb-2">
                Shopping Cart
              </h1>
              <p className="text-gray-600">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <Link
              to="/"
              className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-elegant transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/200?text=Food';
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-dark-900 mb-1">
                            {item.name}
                          </h3>
                          {item.urduName && (
                            <p className="text-sm text-gray-500">{item.urduName}</p>
                          )}
                        </div>
                        <button
                          onClick={() => handleRemove(item)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-2"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-gold font-semibold text-lg mb-4">
                        {formatPrice(item.price)} <span className="text-sm text-gray-500">each</span>
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center space-x-4 bg-gray-50 rounded-lg px-2 py-1">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-9 h-9 rounded-lg bg-white hover:bg-gold hover:text-white transition-all font-bold shadow-sm"
                          >
                            −
                          </button>
                          <span className="w-10 text-center font-semibold text-dark-900 text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-9 h-9 rounded-lg bg-white hover:bg-gold hover:text-white transition-all font-bold shadow-sm"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Subtotal</p>
                          <p className="font-bold text-xl text-dark-900">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-elegant p-8 sticky top-24"
            >
              <h2 className="font-display text-2xl font-bold text-dark-900 mb-6 pb-4 border-b border-gray-200">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="text-sm">Delivery Charges</span>
                  <span className="font-semibold">{formatPrice(deliveryCharges)}</span>
                </div>
                
                {/* Divider */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-lg font-bold text-dark-900">Total</span>
                    <span className="font-display text-2xl font-bold text-gold">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3 mb-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Fast & reliable delivery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">100% satisfaction guaranteed</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="btn-primary w-full mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block text-center text-gold hover:text-gold-dark font-semibold transition-colors"
              >
                ← Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
