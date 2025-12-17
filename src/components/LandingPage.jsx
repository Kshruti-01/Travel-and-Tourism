import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Globe, Map, MapPin, Calendar, Users, Star, Shield, Zap, Camera, Heart, Play, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backgroundImages.length]);

  const features = [
    { icon: <Sparkles className="w-6 h-6" />, title: "AI-Powered Itineraries", desc: "Get personalized travel plans based on your preferences and budget" },
    { icon: <MapPin className="w-6 h-6" />, title: "Smart Recommendations", desc: "Discover hidden gems and popular attractions with intelligent suggestions" },
    { icon: <Calendar className="w-6 h-6" />, title: "Instant Booking", desc: "Book flights, hotels, and activities seamlessly in one platform" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure Payments", desc: "Travel with confidence using our encrypted payment system" },
    { icon: <Users className="w-6 h-6" />, title: "Group Planning", desc: "Coordinate trips with friends and family effortlessly" },
    { icon: <Camera className="w-6 h-6" />, title: "VR Previews", desc: "Experience destinations virtually before you visit" },
  ];

  const destinations = [
    { name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", price: "$899", rating: 4.9, reviews: "2.3k" },
    { name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", price: "$1,299", rating: 4.8, reviews: "3.1k" },
    { name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", price: "$1,499", rating: 4.9, reviews: "2.8k" },
    { name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80", price: "$1,099", rating: 4.7, reviews: "1.9k" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Adventure Traveler", text: "This app transformed how I plan trips. The AI recommendations were spot-on!", avatar: "https://i.pravatar.cc/150?img=1", rating: 5 },
    { name: "Michael Chen", role: "Business Traveler", text: "Saved me hours of planning. The booking process is incredibly smooth.", avatar: "https://i.pravatar.cc/150?img=13", rating: 5 },
    { name: "Emma Williams", role: "Family Vacationer", text: "Perfect for planning family trips. Everyone can contribute to the itinerary!", avatar: "https://i.pravatar.cc/150?img=5", rating: 5 },
  ];

  const stats = [
    { number: "500K+", label: "Happy Travelers" },
    { number: "150+", label: "Destinations" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="relative w-full bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>TravelAI</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>Features</a>
              <a href="#destinations" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>Destinations</a>
              <a href="#how-it-works" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>How It Works</a>
              <a href="#testimonials" className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>Reviews</a>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                Sign In
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-1">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-3">
                <a href="#features" className="text-gray-700 hover:text-orange-500 font-medium py-2">Features</a>
                <a href="#destinations" className="text-gray-700 hover:text-orange-500 font-medium py-2">Destinations</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 font-medium py-2">How It Works</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-500 font-medium py-2">Reviews</a>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold mt-2">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((img, index) => (
            <div key={index} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: currentImageIndex === index ? 1 : 0, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-orange-900/70"></div>
          
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 3}s` }} />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-white text-sm font-medium">AI-Powered Travel Planning</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight">
            Discover Your Next
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
              Dream Destination
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Plan smarter, travel better. Let AI create personalized itineraries tailored to your style, budget, and dreams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center space-x-2">
              <span>Start Planning Free</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30 w-full sm:w-auto flex items-center justify-center space-x-2">
              <Play size={20} />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              FEATURES
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for the
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">Perfect Trip</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your travel planning effortless and enjoyable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="w-full py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
              TRENDING DESTINATIONS
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked destinations loved by travelers worldwide
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold">{dest.rating}</span>
                  </div>
                  <button className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{dest.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xl font-bold text-orange-500">{dest.price}</span>
                      <span className="text-gray-500 text-xs ml-1">/ person</span>
                    </div>
                    <div className="text-xs text-gray-500">{dest.reviews} reviews</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Plan Your Trip in
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Tell Us Your Dreams", desc: "Share your preferences, budget, and travel style", icon: <Sparkles className="w-6 h-6" /> },
              { step: "02", title: "AI Creates Your Plan", desc: "Our AI analyzes millions of options to craft your perfect itinerary", icon: <Zap className="w-6 h-6" /> },
              { step: "03", title: "Book & Explore", desc: "Book everything in one place and embark on your adventure", icon: <CheckCircle className="w-6 h-6" /> },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-6 rounded-2xl text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold opacity-20 mb-3">{item.step}</div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by Travelers Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy travelers who've discovered their dream destinations with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join over 500,000 travelers who've discovered their perfect trips with TravelAI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30 w-full sm:w-auto">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TravelAI</span>
              </div>
              <p className="text-gray-400 text-sm">Making travel planning effortless with the power of AI.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 TravelAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;