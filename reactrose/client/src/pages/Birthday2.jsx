import React, { useState, useEffect } from 'react';
import { Heart, Lock, Camera, MessageCircle, Star, Gift, Play, Users, Crown, Diamond, Sparkles, Eye } from 'lucide-react';

const CreatorWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showNotification, setShowNotification] = useState(false);
  const [activeTab, setActiveTab] = useState('gallery');
  const [isHovered, setIsHovered] = useState(null);

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

  const premiumContent = [
    { 
      title: "Intimate Gallery", 
      price: "$25", 
      icon: <Camera className="w-6 h-6" />, 
      description: "Exclusive photos in elegant settings",
      tier: "Premium"
    },
    { 
      title: "Personal Videos", 
      price: "$45", 
      icon: <Play className="w-6 h-6" />, 
      description: "Custom video content just for you",
      tier: "VIP"
    },
    { 
      title: "Private Chat", 
      price: "$15", 
      icon: <MessageCircle className="w-6 h-6" />, 
      description: "One-on-one conversation time",
      tier: "Premium"
    },
    { 
      title: "Custom Request", 
      price: "$80", 
      icon: <Crown className="w-6 h-6" />, 
      description: "Personalized content creation",
      tier: "Elite"
    }
  ];

  const luxuryTiers = [
    {
      name: "Admirer",
      price: "$19.99",
      features: ["Daily posts", "Chat access", "Behind scenes", "Photo sets"],
      color: "from-pink-600 to-red-600"
    },
    {
      name: "VIP Lover",
      price: "$39.99",
      features: ["Everything in Admirer", "Weekly videos", "Priority chat", "Exclusive content", "Personal messages"],
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Elite Fantasy",
      price: "$79.99",
      features: ["Everything in VIP", "Custom content", "Video calls", "Personal requests", "Instant access"],
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const luxuryTips = [
    { item: "Sweet Appreciation", amount: "$5", icon: "💋", description: "Show some love" },
    { item: "Flirty Compliment", amount: "$15", icon: "😘", description: "Make me blush" },
    { item: "Desire Fulfillment", amount: "$35", icon: "🔥", description: "Heat things up" },
    { item: "Ultimate Fantasy", amount: "$100", icon: "👑", description: "VIP treatment" }
  ];

  const galleryItems = [
    { type: "photo", locked: true, preview: "🌹" },
    { type: "video", locked: true, preview: "💫" },
    { type: "photo", locked: false, preview: "✨" },
    { type: "video", locked: true, preview: "🔥" },
    { type: "photo", locked: true, preview: "💎" },
    { type: "video", locked: false, preview: "🖤" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-purple-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-red-900/20"></div>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        ></div>
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-2xl transition-all duration-1500"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-pink-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Premium Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 backdrop-blur-md bg-black/20 border-b border-red-500/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Scarlett Divine
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-red-400 transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Home
          </a>
          <a href="#tiers" className="hover:text-red-400 transition-colors flex items-center gap-2">
            <Diamond className="w-4 h-4" />
            Subscriptions
          </a>
          <a href="#gallery" className="hover:text-red-400 transition-colors flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Gallery
          </a>
          <a href="#support" className="hover:text-red-400 transition-colors flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Support
          </a>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12 relative">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-black rounded-full"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-red-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
                <div className="text-6xl animate-bounce">🌹</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 font-serif leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Your Secret
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Desire
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exclusive content. Intimate connections. Unforgettable experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Lock className="w-6 h-6" />
                Enter My World
              </div>
            </button>
            <button className="group relative border-2 border-red-400 hover:bg-red-400 hover:text-black px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Heart className="w-6 h-6" />
                Spoil Me
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Luxury Subscription Tiers */}
      <section id="tiers" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your Fantasy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryTiers.map((tier, index) => (
              <div key={index} className={`relative group ${tier.popular ? 'transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST DESIRED
                  </div>
                )}
                <div className={`bg-gradient-to-br ${tier.color} p-1 rounded-3xl`}>
                  <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-8 h-full">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                        {tier.price}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section id="gallery" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Premium Gallery
          </h2>
          
          <div className="flex justify-center mb-12">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-red-500/20">
              <div className="flex gap-2">
                {['gallery', 'videos', 'custom'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{item.preview}</div>
                </div>
                
                {item.locked && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-8 h-8 mx-auto mb-2 text-red-400" />
                      <div className="text-sm text-gray-300">Unlock to view</div>
                    </div>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                  isHovered === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      {item.locked ? 'Unlock' : 'View'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Content Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Exclusive Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumContent.map((content, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/20 hover:border-red-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-red-400 group-hover:text-pink-400 transition-colors duration-300">
                      {content.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      content.tier === 'Elite' ? 'bg-yellow-600' : 
                      content.tier === 'VIP' ? 'bg-purple-600' : 'bg-red-600'
                    }`}>
                      {content.tier}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{content.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-red-400">{content.price}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <Lock className="w-4 h-4" />
                    Access Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Support Menu */}
      <section id="support" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Spoil Me Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryTips.map((tip, index) => (
              <div key={index} className="group bg-gradient-to-r from-red-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/20 hover:border-red-400/50 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors duration-300">
                        {tip.item}
                      </h3>
                      <p className="text-gray-400 text-sm">{tip.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-400 mb-2">{tip.amount}</div>
                    <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                      Send Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-serif bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Let's Get Intimate
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to experience something extraordinary? I'm waiting for you...
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Message Me
              </div>
            </button>
            <button className="group relative border-2 border-red-400 hover:bg-red-400 hover:text-black px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Users className="w-6 h-6" />
                Join VIP
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Notification */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-6 shadow-2xl z-50 max-w-sm border border-red-400/30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <div>
              <div className="font-bold text-lg">I'm Live Now! 🔥</div>
              <div className="text-sm opacity-90">Come play with me...</div>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-white/80 hover:text-white ml-auto text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Footer */}
      <footer className="py-16 px-6 border-t border-red-900/30 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Scarlett Divine
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your premium destination for exclusive content and intimate connections. Join thousands of satisfied members.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-red-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">Subscriptions</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Custom Requests</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">VIP Access</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-red-400">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-900/30 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Scarlett Divine. All rights reserved. 18+ Only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorWebsite;