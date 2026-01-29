import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useOrders } from '../context/OrderContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/helpers';

const OrdersView = () => {
  const { orders, updateOrderStatus } = useOrders();
  const { showToast } = useToast();
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statusOptions = ['pending', 'preparing', 'completed', 'cancelled'];
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    preparing: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
    showToast(`Order status updated to ${newStatus}`, 'success');
  };

  const filteredOrders = selectedStatus === 'all'
    ? orders
    : orders.filter(order => order.status === selectedStatus);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-600">View and manage customer orders</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Status Filter */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <button
            onClick={() => setSelectedStatus('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedStatus === 'all'
                ? 'bg-food-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Orders ({orders.length})
          </button>
          {statusOptions.map(status => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                selectedStatus === status
                  ? 'bg-food-orange text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {status} ({orders.filter(o => o.status === status).length})
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono font-bold text-gray-900">{order.id}</h3>
                    <span className={`badge ${statusColors[order.status]} capitalize`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    📅 {formatDate(order.createdAt)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-food-orange"
                  >
                    {statusOptions.map(status => (
                      <option key={status} value={status} className="capitalize">
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Customer Info */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Customer Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-24">Name:</span>
                      <span className="text-gray-900 font-medium">{order.customerName}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-24">Phone:</span>
                      <span className="text-gray-900 font-medium">{order.phone}</span>
                    </div>
                    {order.address && (
                      <div className="flex">
                        <span className="text-gray-500 w-24">Address:</span>
                        <span className="text-gray-900 font-medium">{order.address}</span>
                      </div>
                    )}
                    <div className="flex">
                      <span className="text-gray-500 w-24">Payment:</span>
                      <span className="text-gray-900 font-medium">{order.paymentMethod}</span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Order Items</h4>
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {item.quantity}x {item.dishName}
                        </span>
                        <span className="text-gray-900 font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-gray-900">{formatPrice(order.total)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery</span>
                        <span className="text-gray-900">{formatPrice(order.deliveryCharges)}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-food-orange">
                          {formatPrice(order.total + order.deliveryCharges)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="card p-12 text-center">
            <p className="text-gray-400 text-4xl mb-2">📋</p>
            <p className="text-gray-500">No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersView;
