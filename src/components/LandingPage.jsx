import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Globe, Map } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array - beautiful travel destinations
  const backgroundImages = [
    '/assets/destinations/agra.jpg',
  '/assets/destinations/beach.jpg',
  '/assets/destinations/destimage.jpg',
  '/assets/destinations/gujrat.jpg',
  '/assets/destinations/kerela.jpg',
  '/assets/destinations/rajasthan.jpg',
  '/assets/destinations/resort.jpg',
  ];

  // Auto-rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlay - Lighter to show images better */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-orange-900/50"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 px-6 py-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <span className="text-3xl font-bold text-white drop-shadow-lg">
              Smart Travel
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-orange-400 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-white hover:text-orange-400 transition-colors font-medium">How It Works</a>
            <a href="#destinations" className="text-white hover:text-orange-400 transition-colors font-medium">Destinations</a>
            <a href="#about" className="text-white hover:text-orange-400 transition-colors font-medium">About</a>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 bg-white/10 backdrop-blur-sm rounded-lg"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Features</a>
                <a href="#how-it-works" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">How It Works</a>
                <a href="#destinations" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Destinations</a>
                <a href="#about" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">About</a>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all w-full">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Floating Icons */}
          <motion.div animate={floatingAnimation} className="absolute top-20 left-10 hidden lg:block">
            <Globe className="w-16 h-16 text-orange-400/30" />
          </motion.div>
          <motion.div 
            animate={{
              y: [10, -10, 10],
              transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }} 
            className="absolute top-40 right-10 hidden lg:block"
          >
            <Map className="w-20 h-20 text-purple-400/30" />
          </motion.div>
          <motion.div 
            animate={{
              y: [-15, 15, -15],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }} 
            className="absolute bottom-40 left-20 hidden lg:block"
          >
            <Sparkles className="w-14 h-14 text-blue-400/30" />
          </motion.div>

          {/* Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-white font-medium">AI-Powered Travel Planning</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
              Your Journey
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">
              Reimagined with AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg"
          >
            Experience the future of travel planning with our intelligent platform. 
            Personalized itineraries, immersive VR previews, and seamless booking—all in one place.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(249, 115, 22, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-2xl w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Start Your Adventure</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-2xl border-2 border-white/30 w-full sm:w-auto"
            >
              Explore Demo
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                <motion.div 
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 bg-white rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;