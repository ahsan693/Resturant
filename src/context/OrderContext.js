import React, { createContext, useContext, useState, useEffect } from 'react';
import { ordersData } from '../data/mockData';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/helpers';

const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = loadFromLocalStorage('orders', null);
    return savedOrders || ordersData;
  });

  useEffect(() => {
    saveToLocalStorage('orders', orders);
  }, [orders]);

  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      createdAt: new Date().toISOString(),
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getTodayOrders = () => {
    const today = new Date().toDateString();
    return orders.filter(order => {
      const orderDate = new Date(order.createdAt).toDateString();
      return orderDate === today;
    });
  };

  const getTodayRevenue = () => {
    const todayOrders = getTodayOrders();
    return todayOrders.reduce((sum, order) => sum + order.total + order.deliveryCharges, 0);
  };

  const value = {
    orders,
    addOrder,
    updateOrderStatus,
    getTodayOrders,
    getTodayRevenue,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
