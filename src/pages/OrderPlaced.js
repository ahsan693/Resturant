import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice, getDeliveryTime } from '../utils/helpers';

const OrderPlaced = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No order information found</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const estimatedDelivery = getDeliveryTime();
  const totalAmount = order.total + order.deliveryCharges;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          {/* Success Icon */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600">
              Thank you for your order. We'll start preparing your delicious meal.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="card p-6 md:p-8 mb-6">
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Order ID</span>
                <span className="font-mono font-semibold text-gray-900">{order.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Estimated Delivery</span>
                <span className="font-semibold text-food-orange">{estimatedDelivery}</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Delivery Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="text-gray-500 w-24">Name:</span>
                  <span className="text-gray-900 font-medium">{order.customerName}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24">Phone:</span>
                  <span className="text-gray-900 font-medium">{order.phone}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24">Address:</span>
                  <span className="text-gray-900 font-medium">{order.address}</span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Order Items</h3>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.quantity}x {item.dishName}
                    </span>
                    <span className="text-gray-900 font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">{formatPrice(order.total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Charges</span>
                <span className="text-gray-900">{formatPrice(order.deliveryCharges)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>Total Amount</span>
                <span className="text-food-orange">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Payment Method</span>
                <span className="font-semibold text-gray-900">{order.paymentMethod}</span>
              </div>
            </div>
          </div>

          {/* Track Order Button (Disabled) */}
          <div className="card p-4 mb-6 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Track Your Order</h3>
                <p className="text-sm text-gray-600 mb-3">
                  We'll send you updates via SMS. You can also call us for order status.
                </p>
                <button
                  disabled
                  className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
                >
                  Track Order (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/" className="btn-primary flex-1 text-center">
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="btn-secondary flex-1"
            >
              Print Receipt
            </button>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>Need help? Call us at <strong className="text-gray-900">0300-1234567</strong></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderPlaced;
