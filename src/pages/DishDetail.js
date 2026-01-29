import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/helpers';

const DishDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getDishById } = useMenu();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const dish = getDishById(id);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-dark-900 mb-4">Dish not found</h2>
          <p className="text-gray-600 mb-6">The dish you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(dish, quantity);
    showToast(`${quantity}x ${dish.name} added to cart!`, 'success');
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Menu</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-[600px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Delicious+Dish';
                }}
              />
              {!dish.available && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="bg-white px-8 py-4">
                    <span className="text-dark-900 font-bold uppercase tracking-wider text-xl">Sold Out</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-lg -z-10"></div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col bg-white rounded-lg shadow-elegant p-8 lg:p-10"
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-gold/10 text-gold px-4 py-2 text-xs font-bold uppercase tracking-widest">
                {dish.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-3">
              {dish.name}
            </h1>
            {dish.urduName && (
              <p className="text-xl text-gray-600 mb-6 font-serif">{dish.urduName}</p>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-bold text-gold">
                {formatPrice(dish.price)}
              </span>
              <span className="text-gray-500 text-sm uppercase tracking-wider">per serving</span>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gold mb-8"></div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">{dish.description}</p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-5 rounded-lg hover:border-gold transition-colors">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Serving Size</p>
                <p className="font-semibold text-dark-900 text-lg">{dish.servingSize}</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-lg hover:border-gold transition-colors">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Status</p>
                <p className={`font-semibold text-lg flex items-center gap-2 ${dish.available ? 'text-green-600' : 'text-red-600'}`}>
                  {dish.available ? (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Available
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Sold Out
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1.5 text-sm rounded-full">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Allergens */}
            {dish.allergens && dish.allergens.length > 0 && (
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Allergen Information
                </h3>
                <div className="flex flex-wrap gap-2">
                  {dish.allergens.map((allergen, index) => (
                    <span key={index} className="bg-red-50 text-red-700 px-3 py-1.5 text-sm rounded-full font-medium">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="mt-auto pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-700 font-semibold text-lg">Quantity</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gold hover:text-white transition-all font-bold text-lg"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-dark-900 w-12 text-center">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gold hover:text-white transition-all font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!dish.available}
                className={`w-full py-5 font-bold text-lg uppercase tracking-wider transition-all ${
                  dish.available
                    ? 'btn-primary'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {dish.available ? `Add to Cart - ${formatPrice(dish.price * quantity)}` : 'Currently Unavailable'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
