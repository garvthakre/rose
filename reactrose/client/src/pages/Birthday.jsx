import React, { useState, useEffect } from 'react';
import { Heart, Lock, Camera, MessageCircle, Star, Gift, Play, Users } from 'lucide-react';

const CreatorWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const contentCards = [
    { title: "Exclusive Photos", price: "$15", icon: <Camera className="w-6 h-6" /> },
    { title: "Premium Videos", price: "$25", icon: <Play className="w-6 h-6" /> },
    { title: "Personal Messages", price: "$10", icon: <MessageCircle className="w-6 h-6" /> },
    { title: "Custom Content", price: "$50", icon: <Star className="w-6 h-6" /> }
  ];

  const tipMenu = [
    { item: "Coffee & Chat", amount: "$5", icon: "☕" },
    { item: "Appreciation", amount: "$15", icon: "💖" },
    { item: "Special Request", amount: "$25", icon: "✨" },
    { item: "Premium Support", amount: "$50", icon: "👑" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-purple-900/20"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 backdrop-blur-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          Luna Rose
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <div className="w-full h-0.5 bg-white mb-1"></div>
            <div className="w-full h-0.5 bg-white mb-1"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-red-400 transition-colors">About</a>
          <a href="#content" className="hover:text-red-400 transition-colors">Content</a>
          <a href="#support" className="hover:text-red-400 transition-colors">Support</a>
          <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-red-500 to-pink-500 p-1 mb-8">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-400/20 to-pink-400/20 flex items-center justify-center">
                  <span className="text-4xl">🌹</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Welcome to My World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Exclusive content, personal connections, and premium experiences await you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Lock className="w-5 h-5" />
              View Exclusive Content
            </button>
            <button className="border-2 border-red-400 hover:bg-red-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Show Support
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a content creator passionate about building genuine connections and creating premium experiences. 
              My content focuses on elegance, artistry, and authentic interaction with my community.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Join me for exclusive content, behind-the-scenes moments, and personal conversations. 
              I believe in quality over quantity and creating meaningful connections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
              <div className="text-gray-400">Happy Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
              <div className="text-gray-400">Premium Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-400">Personal Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section id="content" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Premium Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCards.map((card, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-red-400">
                      {card.icon}
                    </div>
                    <div className="text-lg font-bold text-red-400">{card.price}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Premium quality content created exclusively for subscribers</p>
                  <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    Access Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Support Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tipMenu.map((tip, index) => (
              <div key={index} className="bg-gradient-to-r from-red-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tip.icon}</span>
                    <span className="text-lg font-semibold">{tip.item}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-400">{tip.amount}</div>
                    <button className="text-sm text-pink-400 hover:text-pink-300 transition-colors">
                      Send Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to join my exclusive community? I'm always here to chat and create amazing content together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start Chatting
            </button>
            <button className="border-2 border-red-400 hover:bg-red-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-4 shadow-2xl z-50 max-w-sm animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div>
              <div className="font-semibold">I'm Online Now! 💖</div>
              <div className="text-sm opacity-90">Ready to chat and create content</div>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-white/80 hover:text-white ml-auto"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-red-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Luna Rose
          </div>
          <p className="text-gray-400 mb-6">
            Creating premium content and building genuine connections
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorWebsite;