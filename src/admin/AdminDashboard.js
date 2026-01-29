import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useOrders } from '../context/OrderContext';
import { useMenu } from '../context/MenuContext';
import { formatPrice } from '../utils/helpers';

const AdminDashboard = () => {
  const { getTodayOrders, getTodayRevenue, orders, updateOrderStatus } = useOrders();
  const { getAvailableDishes, getSoldOutDishes, dishes, toggleAvailability, updateDishPrice } = useMenu();

  const todayOrders = getTodayOrders();
  const todayRevenue = getTodayRevenue();
  const availableDishes = getAvailableDishes();
  const soldOutDishes = getSoldOutDishes();
  const [period, setPeriod] = useState('Today');
  const [editingPrice, setEditingPrice] = useState(null);
  const [newPrice, setNewPrice] = useState('');

  // Mock data for growth chart
  const growthData = [
    { month: 'Jan', value: 380 },
    { month: 'Feb', value: 150 },
    { month: 'Mar', value: 280 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 230 },
    { month: 'Jun', value: 400 },
    { month: 'Jul', value: 180 },
  ];

  const maxValue = Math.max(...growthData.map(d => d.value));

  // Sales distribution data for pie chart
  const salesData = [
    { category: 'Appetizers', value: 28, startColor: '#8b5cf6', endColor: '#7c3aed', bgColor: 'bg-purple-500' },
    { category: 'Main Dishes', value: 42, startColor: '#3b82f6', endColor: '#2563eb', bgColor: 'bg-blue-500' },
    { category: 'Desserts', value: 18, startColor: '#ec4899', endColor: '#db2777', bgColor: 'bg-pink-500' },
    { category: 'Drinks', value: 12, startColor: '#06b6d4', endColor: '#0891b2', bgColor: 'bg-cyan-500' },
  ];

  const totalSales = salesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-dark-900 to-gray-700 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Overview of your restaurant management</p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Top Stats - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Total Earning Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <button className="text-white/80 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>
              
              <div className="mb-2">
                <h3 className="text-white/90 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">Total Earning</h3>
                <div className="flex items-end gap-2">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{formatPrice(todayRevenue)}</p>
                  <div className="mb-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Total Orders Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
                <path d="M0 100 Q 50 50, 100 75 T 200 80" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M0 110 Q 50 60, 100 85 T 200 90" stroke="white" strokeWidth="3" fill="none"/>
              </svg>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPeriod('Month')}
                    className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all ${period === 'Month' ? 'bg-white text-blue-600' : 'text-white/80 hover:text-white'}`}
                  >
                    Month
                  </button>
                  <button 
                    onClick={() => setPeriod('Year')}
                    className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all ${period === 'Year' ? 'bg-white text-blue-600' : 'text-white/80 hover:text-white'}`}
                  >
                    Year
                  </button>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="text-white/90 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">Total Orders</h3>
                <div className="flex items-end gap-2">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{todayOrders.length}</p>
                  <div className="mb-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {/* Active Dishes */}
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{availableDishes.length}</p>
                    <p className="text-white/90 text-xs font-medium uppercase tracking-wide">Active Dishes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sold Out Items */}
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{soldOutDishes.length}</p>
                    <p className="text-white/90 text-xs font-medium uppercase tracking-wide">Sold Out Items</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Total Growth Chart - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Total Growth</h2>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{formatPrice(todayRevenue * 1.2)}</p>
              </div>
              <div className="relative">
                <select 
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Today</option>
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Charts Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Bar Chart */}
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Monthly Revenue</h3>
                <div className="flex items-end justify-between h-40 sm:h-48 md:h-56 gap-2 sm:gap-3 px-1 sm:px-2">
                  {growthData.map((data, index) => (
                    <motion.div
                      key={data.month}
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.value / maxValue) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg relative group cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          ${data.value}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">{data.month}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Donut Chart */}
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Sales Distribution</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                    {/* Animated Donut Chart */}
                    <svg className="w-40 h-40 sm:w-48 sm:h-48 transform -rotate-90" viewBox="0 0 100 100">
                      {salesData.map((item, index) => {
                        const radius = 35;
                        const circumference = 2 * Math.PI * radius;
                        const prevPercentage = salesData.slice(0, index).reduce((sum, d) => sum + d.value, 0) / totalSales * 100;
                        const percentage = item.value / totalSales * 100;
                        const offset = circumference - (percentage / 100) * circumference;
                        const rotation = (prevPercentage / 100) * 360;

                        return (
                          <motion.circle
                            key={item.category}
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="12"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                            style={{
                              transformOrigin: '50% 50%',
                              transform: `rotate(${rotation}deg)`,
                            }}
                            className="hover:opacity-80 cursor-pointer transition-opacity"
                          />
                        );
                      })}
                      
                      {/* Gradients */}
                      <defs>
                        {salesData.map((item, index) => (
                          <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={item.startColor} />
                            <stop offset="100%" stopColor={item.endColor} />
                          </linearGradient>
                        ))}
                      </defs>
                    </svg>

                    {/* Center Circle with Total */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">{totalSales}%</p>
                        <p className="text-xs text-gray-500">Total Sales</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-4 sm:mt-6 space-y-2">
                  {salesData.map((item, index) => (
                    <motion.div
                      key={item.category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.bgColor} group-hover:scale-110 transition-transform`}></div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{item.category}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Popular Dishes - 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Popular Dishes</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {availableDishes.slice(0, 5).map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{dish.name}</h3>
                      <p className="text-xs text-green-600 font-semibold">10% Profit</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{formatPrice(dish.price)}</p>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="flex items-end h-12 gap-1">
                    {[40, 60, 45, 70, 55, 80, 65, 85, 70, 90].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <Link 
                to="/admin/menu"
                className="flex items-center justify-center gap-2 py-3 text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Menu Management Quick View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 mb-4 sm:mb-6"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Menu Management</h2>
            <Link 
              to="/admin/menu"
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All →
            </Link>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Dish</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Category</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Price</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Stock</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dishes.slice(0, 8).map((dish, index) => (
                  <motion.tr
                    key={dish.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 sm:py-4 px-2 sm:px-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img 
                          src={dish.image} 
                          alt={dish.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/100?text=Food'}
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{dish.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{dish.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4">
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold capitalize">
                        {dish.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {editingPrice === dish.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            autoFocus
                          />
                          <button
                            onClick={() => {
                              updateDishPrice(dish.id, parseFloat(newPrice));
                              setEditingPrice(null);
                              setNewPrice('');
                            }}
                            className="text-green-600 hover:text-green-700"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => {
                              setEditingPrice(null);
                              setNewPrice('');
                            }}
                            className="text-red-600 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingPrice(dish.id);
                            setNewPrice(dish.price.toString());
                          }}
                          className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          ${dish.price.toFixed(2)}
                        </button>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">{dish.stock || 0}</span>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => toggleAvailability(dish.id)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                          dish.available
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {dish.available ? 'Available' : 'Sold Out'}
                      </button>
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4">
                      <Link
                        to="/admin/menu"
                        className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-semibold"
                      >
                        Edit
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Orders Management Quick View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Recent Orders</h2>
            <Link 
              to="/admin/orders"
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All →
            </Link>
          </div>

          <div className="space-y-4">
            {orders.slice(0, 6).map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {order.customerName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{order.customerName}</p>
                      <p className="text-xs text-gray-500">{order.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{formatPrice(order.total + order.deliveryCharges)}</p>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className={`mt-1 text-xs px-3 py-1 rounded-full font-semibold border-0 cursor-pointer ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        order.status === 'preparing' ? 'bg-blue-100 text-blue-700' :
                        order.status === 'completed' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="preparing">Preparing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-600">
                      <span>📞 {order.phone}</span>
                      <span>💳 {order.paymentMethod}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
