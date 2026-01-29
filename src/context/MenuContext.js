import React, { createContext, useContext, useState, useEffect } from 'react';
import { dishesData } from '../data/mockData';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/helpers';

const MenuContext = createContext();

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within MenuProvider');
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [dishes, setDishes] = useState(() => {
    const savedDishes = loadFromLocalStorage('dishes', null);
    // Check if saved dishes have the new category structure
    const hasNewCategories = savedDishes && savedDishes.some(dish => 
      ['appetizers', 'main dishes', 'desserts', 'drinks'].includes(dish.category)
    );
    // Use new data if old categories are found or no data exists
    return hasNewCategories ? savedDishes : dishesData;
  });

  useEffect(() => {
    saveToLocalStorage('dishes', dishes);
  }, [dishes]);

  const getDishById = (id) => {
    return dishes.find(dish => dish.id === parseInt(id));
  };

  const getDishesByCategory = (category) => {
    return dishes.filter(dish => dish.category === category);
  };

  const toggleAvailability = (dishId) => {
    setDishes(prevDishes =>
      prevDishes.map(dish =>
        dish.id === dishId ? { ...dish, available: !dish.available } : dish
      )
    );
  };

  const updateDishPrice = (dishId, newPrice) => {
    setDishes(prevDishes =>
      prevDishes.map(dish =>
        dish.id === dishId ? { ...dish, price: newPrice } : dish
      )
    );
  };

  const updateDish = (dishId, updates) => {
    setDishes(prevDishes =>
      prevDishes.map(dish =>
        dish.id === dishId ? { ...dish, ...updates } : dish
      )
    );
  };

  const getAvailableDishes = () => {
    return dishes.filter(dish => dish.available);
  };

  const getSoldOutDishes = () => {
    return dishes.filter(dish => !dish.available);
  };

  const value = {
    dishes,
    getDishById,
    getDishesByCategory,
    toggleAvailability,
    updateDishPrice,
    updateDish,
    getAvailableDishes,
    getSoldOutDishes,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
