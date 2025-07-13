import React, { useState, useEffect } from 'react';
import { Heart, Gift, Camera, MessageCircle, Instagram, Twitter, X, Lock, Sparkles } from 'lucide-react';

const MILFLinkBio = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [sparkles, setSparkles] = useState([]);
  const [showNewBanner, setShowNewBanner] = useState(true);

  // Generate floating sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 3
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleAgeVerification = (confirmed) => {
    if (confirmed) {
      setShowAgeVerification(false);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  const linkButtons = [
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Exclusive Videos",
      desc: "Premium content for mature tastes",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      text: "Spoil Me",
      desc: "Treat your goddess right",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      text: "Private Gallery",
      desc: "Intimate moments, just for you",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "Book a Chat",
      desc: "One-on-one time with me",
      gradient: "from-red-400 to-rose-500"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      text: "Follow Me",
      desc: "Daily doses of confidence",
      gradient: "from-pink-400 to-rose-500"
    }
  ];

  const lockedContent = [
    { type: "video", title: "Silk & Secrets" },
    { type: "photo", title: "Golden Hour" },
    { type: "video", title: "Private Dance" },
    { type: "photo", title: "Velvet Dreams" },
    { type: "video", title: "Champagne Nights" },
    { type: "photo", title: "Intimate Moments" }
  ];

  if (showAgeVerification) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-amber-200">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-serif text-amber-900 mb-2">Welcome, Darling</h2>
            <p className="text-amber-700 leading-relaxed">
              Are you 18+ and ready to meet a real woman who knows exactly what she wants?
            </p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white py-3 px-6 rounded-full font-medium hover:from-amber-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
            >
              Yes, I'm Ready
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-full font-medium hover:bg-gray-300 transition-all duration-300"
            >
              Not Yet
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100 relative overflow-hidden">
      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        >
          <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
        </div>
      ))}

      {/* New Banner */}
      {showNewBanner && (
        <div className="fixed top-4 left-4 right-4 z-40 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">New lingerie set just dropped</span>
          </div>
          <button
            onClick={() => setShowNewBanner(false)}
            className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        {/* Simulated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-rose-200/30 to-amber-300/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-serif text-amber-900 mb-4 tracking-wide">
              Ms. Monroe
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 font-light tracking-widest">
              Confidence. Curves. Control.
            </p>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 pb-20">
        {/* About Section */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50">
            <h2 className="text-2xl font-serif text-amber-900 mb-4">About Me</h2>
            <p className="text-amber-800 leading-relaxed italic">
              "I don't chase. I attract. If you're here, you know what you want — and I know how to give it. 
              Experience the confidence that comes with maturity, the allure that only grows with time."
            </p>
          </div>
        </div>

        {/* Link Buttons */}
        <div className="max-w-lg mx-auto space-y-4 mb-12">
          {linkButtons.map((button, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${button.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {button.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">
                    {button.text}
                  </h3>
                  <p className="text-sm text-amber-700 opacity-80">
                    {button.desc}
                  </p>
                </div>
              </div>
              
              {/* Hover Kiss Effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-rose-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Lock Grid */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-amber-900 text-center mb-8">Exclusive Content</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lockedContent.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gradient-to-br from-amber-200 to-rose-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                {/* Blurred Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/50 to-rose-300/50 backdrop-blur-sm"></div>
                
                {/* Lock Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-amber-500 text-white rounded-full p-3 group-hover:bg-rose-500 transition-colors duration-300">
                    <Lock className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm bg-black/50 rounded-full px-3 py-1 text-center">
                    {item.title}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-amber-200/50">
        <p className="text-amber-700 text-sm">
          © 2025 Ms. Monroe • All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default MILFLinkBio;