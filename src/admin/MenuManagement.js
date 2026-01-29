import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMenu } from '../context/MenuContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/helpers';

const MenuManagement = () => {
  const { dishes, toggleAvailability, updateDishPrice } = useMenu();
  const { showToast } = useToast();
  const [editingId, setEditingId] = useState(null);
  const [editPrice, setEditPrice] = useState('');
  const [filter, setFilter] = useState('all');

  const handleToggleAvailability = (dish) => {
    toggleAvailability(dish.id);
    showToast(
      `${dish.name} is now ${dish.available ? 'unavailable' : 'available'}`,
      dish.available ? 'warning' : 'success'
    );
  };

  const handlePriceEdit = (dish) => {
    setEditingId(dish.id);
    setEditPrice(dish.price.toString());
  };

  const handlePriceSave = (dishId) => {
    const newPrice = parseInt(editPrice);
    if (newPrice && newPrice > 0) {
      updateDishPrice(dishId, newPrice);
      showToast('Price updated successfully!', 'success');
      setEditingId(null);
      setEditPrice('');
    } else {
      showToast('Invalid price', 'error');
    }
  };

  const handlePriceCancel = () => {
    setEditingId(null);
    setEditPrice('');
  };

  const filteredDishes = filter === 'all' 
    ? dishes 
    : filter === 'available'
    ? dishes.filter(d => d.available)
    : dishes.filter(d => !d.available);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-gray-600">Manage your dishes, prices, and availability</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-food-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Dishes ({dishes.length})
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'available'
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Available ({dishes.filter(d => d.available).length})
          </button>
          <button
            onClick={() => setFilter('soldout')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'soldout'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Sold Out ({dishes.filter(d => !d.available).length})
          </button>
        </div>

        {/* Dishes Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dish
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDishes.map((dish, index) => (
                  <motion.tr
                    key={dish.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-12 h-12 rounded-lg object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/50?text=Food';
                          }}
                        />
                        <div>
                          <p className="font-medium text-gray-900">{dish.name}</p>
                          {dish.urduName && (
                            <p className="text-sm text-gray-500">{dish.urduName}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="badge bg-gray-100 text-gray-700">{dish.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      {editingId === dish.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                            className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-food-orange"
                            autoFocus
                          />
                          <button
                            onClick={() => handlePriceSave(dish.id)}
                            className="text-green-600 hover:text-green-700 font-bold"
                          >
                            ✓
                          </button>
                          <button
                            onClick={handlePriceCancel}
                            className="text-red-600 hover:text-red-700 font-bold"
                          >
                            ✗
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{formatPrice(dish.price)}</span>
                          <button
                            onClick={() => handlePriceEdit(dish)}
                            className="text-blue-600 hover:text-blue-700 text-sm"
                          >
                            ✏️
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-medium ${
                        dish.stock === 0 ? 'text-red-600' :
                        dish.stock <= 5 ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {dish.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`badge ${
                        dish.available ? 'badge-success' : 'badge-danger'
                      }`}>
                        {dish.available ? 'Available' : 'Sold Out'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={dish.available}
                          onChange={() => handleToggleAvailability(dish)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-food-orange"></div>
                      </label>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDishes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-4xl mb-2">🍽️</p>
              <p className="text-gray-500">No dishes found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
