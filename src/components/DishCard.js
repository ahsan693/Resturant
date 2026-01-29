import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/helpers';

const DishCard = ({ dish, showCategory = true }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!dish.available) return;
    
    addToCart(dish, 1);
    showToast(`${dish.name} added to cart!`, 'success');
  };

  const isLowStock = dish.stock > 0 && dish.stock <= 5;

  return (
    <Link to={`/dish/${dish.id}`}>
      <motion.div
        className={`group card overflow-hidden relative ${
          !dish.available ? 'opacity-70' : ''
        }`}
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-72">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Delicious+Food';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Sold Out Overlay */}
          {!dish.available && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="bg-white px-6 py-3">
                <span className="text-dark-900 font-bold uppercase tracking-wider text-sm">Sold Out</span>
              </div>
            </div>
          )}

          {/* Low Stock Badge */}
          {dish.available && isLowStock && (
            <div className="absolute top-4 right-4">
              <span className="bg-gold text-dark-900 px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
                Only {dish.stock} left!
              </span>
            </div>
          )}

          {/* Category Badge */}
          {showCategory && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-dark-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                {dish.category}
              </span>
            </div>
          )}

          {/* Quick View Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white p-2 rounded-full shadow-elegant">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          {/* Title and Price Row */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-dark-900 mb-1 group-hover:text-gold transition-colors">
                {dish.name}
              </h3>
              {dish.urduName && (
                <p className="text-sm text-gray-500 font-medium">{dish.urduName}</p>
              )}
            </div>
            <span className="text-xl font-bold text-gold ml-4">
              {formatPrice(dish.price)}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
            {dish.description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-4"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              {dish.servingSize}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={!dish.available}
              className={`px-6 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                dish.available
                  ? 'bg-gold text-dark-900 hover:bg-gold-dark hover:shadow-gold'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {dish.available ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-gold border-l-[40px] border-l-transparent"></div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DishCard;
