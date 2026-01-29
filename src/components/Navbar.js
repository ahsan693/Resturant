import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-dark-900 shadow-lg py-2 sm:py-3' 
        : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider">
              M<span className="text-gold">O</span>NAL
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              to="/"
              className="text-white hover:text-gold font-semibold text-xs uppercase tracking-widest transition-colors relative group"
            >
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="#menu"
              className="text-white hover:text-gold font-semibold text-xs uppercase tracking-widest transition-colors relative group"
            >
              MENU
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-white hover:text-gold font-semibold text-xs uppercase tracking-widest transition-colors relative group"
            >
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-gold font-semibold text-xs uppercase tracking-widest transition-colors relative group"
            >
              TESTIMONIALS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              to="/admin"
              className="text-white hover:text-gold font-semibold text-xs uppercase tracking-widest transition-colors relative group"
            >
              ADMIN
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Side - Cart & Book Table */}
          <div className="flex items-center space-x-3 sm:space-x-6 z-50">
            <Link
              to="/cart"
              className="relative p-2 text-white hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-dark-900 text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <a
              href="#booking"
              className="hidden sm:inline-block bg-gold hover:bg-gold-dark text-dark-900 px-4 sm:px-6 py-2 sm:py-3 font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-gold"
            >
              BOOK TABLE
            </a>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-900 border-t border-gray-800 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-gold font-semibold text-sm uppercase tracking-widest transition-colors py-2"
              >
                HOME
              </Link>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-gold font-semibold text-sm uppercase tracking-widest transition-colors py-2"
              >
                MENU
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-gold font-semibold text-sm uppercase tracking-widest transition-colors py-2"
              >
                ABOUT
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-gold font-semibold text-sm uppercase tracking-widest transition-colors py-2"
              >
                TESTIMONIALS
              </a>
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-gold font-semibold text-sm uppercase tracking-widest transition-colors py-2"
              >
                ADMIN
              </Link>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gold hover:bg-gold-dark text-dark-900 px-6 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-300 text-center mt-4"
              >
                BOOK A TABLE
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
