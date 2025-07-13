import React, { useState, useEffect } from 'react';
import { Lock, Heart, Star, Gift, Mail, Music, X, Shield } from 'lucide-react';

const CreatorBioSite = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    // Check if user has already verified age in this session
    const verified = sessionStorage.getItem('ageVerified');
    if (verified) {
      setAgeVerified(true);
    }
  }, []);

  const handleAgeVerification = (isOver18) => {
    if (isOver18) {
      setAgeVerified(true);
      sessionStorage.setItem('ageVerified', 'true');
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  const toggleMusic = () => {
    setMusicEnabled(!musicEnabled);
    // In a real implementation, you would control audio here
  };

  const contentPreviews = [
    { id: 1, title: 'Exclusive Gallery', type: 'photos' },
    { id: 2, title: 'Premium Videos', type: 'videos' },
    { id: 3, title: 'Personal Messages', type: 'messages' },
    { id: 4, title: 'Live Sessions', type: 'live' },
  ];

  const mainLinks = [
    { title: 'Exclusive Content', icon: Lock, url: '#', color: 'from-red-600 to-red-800' },
    { title: 'Book Sessions', icon: Star, url: '#', color: 'from-purple-600 to-purple-800' },
    { title: 'Follow Me', icon: Heart, url: '#', color: 'from-pink-600 to-pink-800' },
    { title: 'Wishlist', icon: Gift, url: '#', color: 'from-amber-600 to-amber-800' },
    { title: 'Contact', icon: Mail, url: '#', color: 'from-gray-600 to-gray-800' },
  ];

  if (!ageVerified) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-gray-900 border border-red-500 rounded-lg p-8 max-w-md w-full text-center">
          <Shield className="mx-auto mb-4 text-red-400" size={48} />
          <h2 className="text-2xl font-bold text-white mb-4">Age Verification Required</h2>
          <p className="text-gray-300 mb-6">
            This website contains adult content. You must be 18 or older to continue.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              I am 18 or older
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              I am under 18
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.1)_0%,transparent_70%)]"></div>
      
      {/* Promo Banner */}
      {showPromo && (
        <div className="relative z-10 bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-4 text-center">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex-1 text-sm font-semibold">
              🔥 New Premium Content Available - Limited Time Offer!
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="text-white hover:text-red-200 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Music Toggle */}
        <div className="fixed top-4 right-4 z-20">
          <button
            onClick={toggleMusic}
            className={`p-3 rounded-full transition-all duration-300 ${
              musicEnabled 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/50' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <Music size={20} />
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent serif">
              Mistress Noir
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
              Control Is Pleasure
            </p>
          </div>
          
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full border-4 border-red-600 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl shadow-red-600/20">
            <div className="text-6xl">👑</div>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="max-w-md mx-auto space-y-4 mb-12">
          {mainLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className={`w-full bg-gradient-to-r ${link.color} hover:scale-105 active:scale-95 transition-all duration-300 rounded-lg p-4 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl font-bold text-lg group`}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
                <span>{link.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Preview Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-red-400">
            Premium Content Preview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contentPreviews.map((item) => (
              <div
                key={item.id}
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-red-600/30 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center">
                  <Lock className="mx-auto mb-2 text-red-400" size={24} />
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {['Instagram', 'Twitter', 'OnlyFans', 'Telegram'].map((platform) => (
              <button
                key={platform}
                className="bg-gray-800 hover:bg-red-600 transition-colors duration-300 px-6 py-3 rounded-full text-sm font-semibold hover:scale-110 transform"
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-gray-500 text-sm space-y-2">
            <p>© 2024 Mistress Noir. All rights reserved.</p>
            <p>18+ Content Only | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorBioSite;