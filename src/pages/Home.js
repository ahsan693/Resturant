import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMenu } from '../context/MenuContext';

const Home = () => {
  const { dishes } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState('appetizers');

  const categories = [
    { name: 'STARTER', value: 'appetizers' },
    { name: 'MAIN DISHES', value: 'main dishes' },
    { name: 'DESSERTS', value: 'desserts' },
    { name: 'WINES', value: 'drinks' },
  ];

  const filteredDishes = dishes.filter(dish => dish.category === selectedCategory);

  const stats = [
    { number: '150+', label: 'MONTHLY VISITORS', description: 'Experience authentic flavors with our growing community of food lovers.' },
    { number: '200+', label: 'POSITIVE REVIEWS', description: 'Customer satisfaction is our pride, reflected in countless five-star reviews.' },
    { number: '50+', label: 'SECRET RECIPES', description: 'Authentic traditional recipes passed down through generations.' },
    { number: '15+', label: 'AWARD & HONORS', description: 'Recognized for excellence in authentic Pakistani cuisine and service.' },
  ];

  const testimonials = [
    {
      text: 'The taste of food was really amazing, Wow! outstanding dinner made by Master chef, I never forget this delicious food experience.',
      author: 'WILLIAM JOE',
      location: 'New York',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      text: 'Hygienic food & fresh environment, everyone had a wonderful delightful experience. It was FABULOUS! great experience at The Pakistani gourmet.',
      author: 'THERESA TIN',
      location: 'Chicago',
      avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
      text: 'Special treat to dine, It was wow experience food was really delicious! outstanding dinner made by Master chef, food experience was unforgettable!',
      author: 'MICHEL BYRD',
      location: 'Denmark',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900/85"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <p className="text-gold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em] mb-4 sm:mb-6 md:mb-8 font-bold">
              SERVING SINCE 1996
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight break-words">
              Delightful<br className="sm:hidden" /> Experience
            </h1>
            <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
              A taste of perfection in every dish - fine dining with a modern twist.
            </p>
            <a href="#menu" className="inline-block bg-gold hover:bg-gold-dark text-dark-900 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide sm:tracking-wider md:tracking-widest transition-all duration-300 hover:shadow-gold">
              EXPLORE MENU
            </a>
          </motion.div>
        </div>
      </div>

      {/* Menu Categories Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-6 font-bold flex items-center justify-center gap-2 sm:gap-4">
              <span>✦</span> <span className="text-center">EXPLORE OUR DELICIOUS SELECTIONS</span> <span>✦</span>
            </p>
          </div>

          <div className="space-y-0">
            {[
              { name: 'APPETIZERS', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80', category: 'appetizers' },
              { name: 'MAIN DISHES', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', category: 'main dishes' },
              { name: 'DESSERTS', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80', category: 'desserts' },
              { name: 'DRINKS', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80', category: 'drinks' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-gray-700 last:border-0"
              >
                <button 
                  onClick={() => {
                    setSelectedCategory(item.category);
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-between py-4 sm:py-6 lg:py-8 hover:bg-dark-700 transition-all duration-300 px-3 sm:px-6"
                >
                  <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-gold text-sm sm:text-xl lg:text-2xl hidden sm:inline">✦</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-600 group-hover:border-gold flex items-center justify-center transition-all">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dishes Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Food Image */}
          <div className="bg-dark-900 flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-gold/20">
                <img
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80"
                  alt="Special Dish"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gold rounded-full flex items-center justify-center">
                <span className="text-dark-900 font-display text-2xl sm:text-3xl font-bold">$12</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Dining Image & Text */}
          <div className="relative min-h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80)',
              }}
            >
              <div className="absolute inset-0 bg-dark-900/60"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center h-full p-8 sm:p-12 lg:p-16">
              <div className="text-center">
                <div className="mb-8">
                  <div className="inline-block px-4 sm:px-6 py-2 border border-gold/50 mb-6">
                    <p className="text-gold text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
                      Special Dishes
                    </p>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 hidden md:block">
                    Special Dishes
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Chef Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80)',
              }}
            ></div>
          </div>

          {/* Right - Chef Info */}
          <div className="bg-dark-800 flex items-center justify-center p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-lg"
            >
              <div className="mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-gold mx-auto mb-6">
                  <img
                    src="https://i.pravatar.cc/200?img=12"
                    alt="Chef Lorenzo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-gold text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 font-bold flex items-center justify-center gap-2">
                <span>✦</span> OUR CHEF <span>✦</span>
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Chef Lorenzo
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                A fine dine master chef crafts exquisite cuisine with precision, passion, creativity, and elegance, delivering unforgettable culinary experiences and refined flavors.
              </p>
              <button className="border-2 border-gold text-gold px-6 sm:px-8 py-2 sm:py-3 font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-dark-900 transition-all duration-300">
                MEET OUR TEAM
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delicious Menu Section */}
      <section id="menu" className="py-12 sm:py-16 lg:py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-6 font-bold flex items-center justify-center gap-2 sm:gap-4">
              <span>✦</span> SPECIAL FINE DINE <span>✦</span>
            </p>
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
              Delicious Menu
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 border-b border-gray-700 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-3 sm:px-6 py-3 sm:py-4 font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 relative whitespace-nowrap ${
                  selectedCategory === category.value
                    ? 'text-gold'
                    : 'text-gray-400 hover:text-gold'
                }`}
              >
                {category.name}
                {selectedCategory === category.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
                <span className="ml-1 sm:ml-2 text-gold">✦</span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 sm:border-3 md:border-4 border-gold/20 group-hover:border-gold transition-all duration-300">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/200?text=Food';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-gold transition-colors uppercase mb-1 truncate sm:whitespace-normal">
                            {dish.name}
                            {index === 1 && (
                              <span className="ml-2 sm:ml-3 bg-gold text-dark-900 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold">NEW</span>
                            )}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="flex-1 border-b border-dotted border-gray-600"></div>
                        <span className="text-gold font-bold text-base sm:text-lg md:text-xl">${dish.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-400 text-lg">No dishes available in this category</p>
              </div>
            )}
          </div>

          <div className="text-center px-4">
            <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">During winter daily from 7:00 pm to 9:00 pm</p>
            <button className="border-2 border-gold text-gold px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bold text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-gold hover:text-dark-900 transition-all duration-300">
              VIEW ALL MENU
            </button>
          </div>
        </div>
      </section>

      {/* Why Dine With Us Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-4 sm:mb-6 font-bold">
              WHY CHOOSE US
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 px-4">
              Why Dine With Us
            </h2>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {[
              { image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80', label: 'SKILLED CHEF' },
              { image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', label: 'HYGIENIC FOOD' },
              { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', label: 'FRESH AMBIENCE' },
              { image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', label: 'SECREAT RECIPE' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 h-40 sm:h-52 md:h-64">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-0 right-0 px-2">
                    <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide sm:tracking-wider">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="mb-3 sm:mb-4">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gold">
                    {stat.number}
                  </span>
                </div>
                <h3 className="text-gold font-bold text-xs uppercase tracking-wider mb-2 sm:mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-elegant-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-3 sm:mb-4 font-bold">
              TESTIMONIALS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-900 px-4">
              What People Are Saying
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-elegant p-6 sm:p-8 md:p-12">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-10">
                <svg className="w-16 h-16 text-gold mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-10 italic font-serif">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].author}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gold shadow-lg"
              />
              <h4 className="font-bold text-dark-900 text-lg mb-1 uppercase tracking-wider">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-gold text-sm font-semibold">
                {testimonials[currentTestimonial].location}
              </p>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'w-10 h-3 bg-gold rounded-full' 
                      : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-dark-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-dark-900/90"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.4em] mb-4 font-bold">
              ONLINE RESERVATION
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Book A Table
            </h2>
            <p className="text-white/80 text-lg">
              Booking request{' '}
              <a href="tel:+88-123-123456" className="text-gold hover:text-gold-light transition-colors font-semibold">
                +88-123-123456
              </a>{' '}
              or fill out the order form
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-800/80 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-gold/20">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                />
                <input
                  type="number"
                  placeholder="Number of Guests"
                  min="1"
                  className="bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                />
                <input
                  type="date"
                  placeholder="Date"
                  className="bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                />
                <input
                  type="time"
                  placeholder="Time"
                  className="bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-500"
                />
                <textarea
                  placeholder="Special Requests / Message"
                  rows="4"
                  className="md:col-span-2 bg-dark-900 border-2 border-gray-700 text-white px-6 py-4 focus:outline-none focus:border-gold transition-colors resize-none placeholder-gray-500"
                ></textarea>
                <button type="submit" className="md:col-span-2 bg-gold hover:bg-gold-dark text-dark-900 px-10 py-5 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-gold">
                  BOOK A TABLE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Post Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.4em] mb-6 font-bold flex items-center justify-center gap-4">
              <span>✦</span> NEWS & BLOGS <span>✦</span>
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-dark-900 mb-4">
              Latest Blog Post
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                date: '30',
                month: 'Mar',
                category: 'RECIPES',
                title: "So yummy, tasty, you'll eat with your eyes",
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
              },
              {
                date: '28',
                month: 'Mar',
                category: 'CHEF PICKS',
                title: "Chef's signature for refined tastes ever",
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
              },
              {
                date: '25',
                month: 'Mar',
                category: 'EXPERIENCE',
                title: 'Experience gourmet art and ambience',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-full w-72 h-72 mx-auto mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-white text-center w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-dark-900">{post.date}</span>
                    <span className="text-xs text-gold font-bold uppercase">{post.month}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gold text-xs font-bold uppercase tracking-wider mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-dark-900 mb-4 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <button className="text-dark-900 font-bold text-xs uppercase tracking-wider hover:text-gold transition-colors flex items-center gap-2 mx-auto">
                    READ MORE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-white text-xs uppercase tracking-[0.3em] mb-2 font-bold">
              FOLLOW US
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Instagram
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600&q=80',
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
              'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
              'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden aspect-square"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
