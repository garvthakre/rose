import React, { useState, useEffect } from 'react';
import { Lock, Heart, Star, Gift, Mail, Music, X, Shield, Eye, EyeOff, Crown, Zap, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const CreatorBioSite = () => {
  const [ageVerified, setAgeVerified] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: " /src/assets/girl-5864172_1280.jpg",
      title: "Elegant Portrait",
      type: "photo",
      premium: false
    },
    {
      id: 2,
      src: " src/assets/pexels-andrea-musto-135941147-20425087.jpg",
      title: "Artistic Vision",
      type: "photo",
      premium: true
    },
    {
      id: 3,
      src: " /src/assets/pexels-caio-mantovani-97605853-13815186.jpg",
      title: "Behind the Scenes",
      type: "video",
      premium: false
    },
    {
      id: 4,
      src: " /src/assets/pexels-cottonbro-3778934.jpg",
      title: "Exclusive Session",
      type: "photo",
      premium: true
    },
    {
      id: 5,
      src: " /src/assets/pexels-cottonbro-5645101.jpg",
      title: "Personal Moment",
      type: "photo",
      premium: true
    },
    {
      id: 6,
      src: " /src/assets/pexels-cottonbro-8732107.jpg",
      title: "Live Stream",
      type: "video",
      premium: false
    },
    {
      id: 7,
      src: " /src/assets/pexels-joshua-roberts-212557837-14132594.jpg",
      title: "Special Collection",
      type: "photo",
      premium: true
    },
    {
      id: 8,
      src: " /src/assets/pexels-ryanpilat1-12284882.jpg",
      title: "Intimate Gallery",
      type: "photo",
      premium: true
    },
    
  ];

  useEffect(() => {
    // Check if user has already verified age in this session
    const verified = sessionStorage.getItem('ageVerified');
    if (verified) {
      setAgeVerified(true);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const contentPreviews = [
    { id: 1, title: 'Exclusive Gallery', type: 'photos', emoji: '📸' },
    { id: 2, title: 'Premium Videos', type: 'videos', emoji: '🎥' },
    { id: 3, title: 'Personal Messages', type: 'messages', emoji: '💌' },
    { id: 4, title: 'Live Sessions', type: 'live', emoji: '🔴' },
    { id: 5, title: 'Custom Content', type: 'custom', emoji: '✨' },
    { id: 6, title: 'Voice Notes', type: 'audio', emoji: '🎵' },
  ];

  const mainLinks = [
    { title: 'Exclusive Content', icon: Lock, url: '#', color: 'from-red-600 via-red-700 to-red-800', emoji: '🔒' },
    { title: 'Book Sessions', icon: Star, url: '#', color: 'from-purple-600 via-purple-700 to-purple-800', emoji: '⭐' },
    { title: 'Follow Me', icon: Heart, url: '#', color: 'from-pink-600 via-pink-700 to-pink-800', emoji: '❤️' },
    { title: 'Wishlist', icon: Gift, url: '#', color: 'from-amber-600 via-amber-700 to-amber-800', emoji: '🎁' },
    { title: 'Contact', icon: Mail, url: '#', color: 'from-gray-600 via-gray-700 to-gray-800', emoji: '💬' },
  ];

  if (!ageVerified) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 border border-red-500/50 rounded-2xl p-8 max-w-md w-full text-center backdrop-blur-sm shadow-2xl shadow-red-600/20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent rounded-2xl"></div>
          
          <Shield className="mx-auto mb-4 text-red-400 drop-shadow-lg" size={56} />
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">Age Verification</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-4"></div>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            This exclusive domain contains adult content crafted for mature audiences only.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30"
            >
              <span className="flex items-center justify-center space-x-2">
                <Crown size={20} />
                <span>I am 18 or older</span>
              </span>
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 border border-gray-600"
            >
              I am under 18
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-6">
            By entering, you confirm you are of legal age in your jurisdiction
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,0,0,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,0,0,0.15)_0%,transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,0,0,0.05)_50%,transparent_70%)]"></div>
      
      {/* Animated particles */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-red-300 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Mouse follower effect */}
      <div 
        className="fixed w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      
      {/* Enhanced Promo Banner */}
      {showPromo && (
        <div className="relative z-10 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 px-4 shadow-lg">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex-1 text-sm font-bold tracking-wide">
              <span className="inline-flex items-center space-x-2">
                <Zap size={16} className="animate-pulse" />
                <span>🔥 NEW PREMIUM COLLECTION AVAILABLE - LIMITED TIME EXCLUSIVE</span>
                <Zap size={16} className="animate-pulse" />
              </span>
            </div>
            <button
              onClick={() => setShowPromo(false)}
              className="text-white hover:text-red-200 transition-colors duration-200 p-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {selectedImage.premium && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Crown size={16} />
                  <span>Premium</span>
                </div>
              )}
              
              {selectedImage.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors duration-200 cursor-pointer">
                    <Play size={32} className="text-white" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-400 text-sm">{currentImageIndex + 1} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Enhanced Music Toggle */}
        <div className="fixed top-6 right-6 z-20">
          <button
            onClick={toggleMusic}
            className={`p-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
              musicEnabled 
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50 scale-110' 
                : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700/80 border border-gray-600/50'
            }`}
          >
            <Music size={20} className={musicEnabled ? 'animate-pulse' : ''} />
          </button>
        </div>

        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 pt-12">
          <div className="mb-8">
            <div className="inline-block relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-transparent font-serif tracking-tight">
                Mistress Noir
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 to-transparent rounded-full blur-2xl"></div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500"></div>
              <Crown className="text-red-400" size={24} />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500"></div>
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-widest mb-6">
              Control Is Pleasure
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Welcome to my exclusive realm where desires meet discipline. Experience the art of surrender.
            </p>
          </div>
          
          <div className="relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full border-4 border-red-500 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center shadow-2xl shadow-red-600/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
              <div className="text-7xl md:text-8xl relative z-10">👑</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-full blur-3xl scale-150"></div>
          </div>
        </div>

        {/* Enhanced Main Action Buttons */}
        <div className="max-w-lg mx-auto space-y-5 mb-16">
          {mainLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className={`w-full bg-gradient-to-r ${link.color} hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl p-5 flex items-center justify-between shadow-xl hover:shadow-2xl font-bold text-lg group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-center space-x-4 relative z-10">
                  <Icon size={24} className="group-hover:animate-pulse" />
                  <span className="text-left">{link.title}</span>
                </div>
                
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {link.emoji}
                </div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Image Gallery Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent font-serif">
              Exclusive Gallery
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Curated collection of my finest moments</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                onClick={() => openImageModal(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {image.premium && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Crown size={12} />
                    <span>Premium</span>
                  </div>
                )}
                
                {image.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-300 uppercase tracking-wide">{image.type}</p>
                </div>
                
                <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Content Preview Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent font-serif">
              Premium Content Preview
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Unlock exclusive content crafted just for you</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {contentPreviews.map((item) => (
              <div
                key={item.id}
                className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl border border-red-600/20 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <Lock className="mx-auto mb-3 text-red-400 group-hover:animate-pulse" size={24} />
                  <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{item.type}</p>
                </div>
                
                <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-gray-300 mb-6">Connect With Me</h3>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {['Instagram', 'Twitter', 'OnlyFans', 'Telegram'].map((platform) => (
              <button
                key={platform}
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red-600 hover:to-red-700 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold hover:scale-110 transform border border-gray-600/50 hover:border-red-500/50 shadow-lg"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center">
          <div className="border-t border-gray-800 pt-8">
            <div className="text-gray-500 text-sm space-y-3">
              <p className="flex items-center justify-center space-x-2">
                <Crown size={16} className="text-red-400" />
                <span>© 2024 Mistress Noir. All rights reserved.</span>
                <Crown size={16} className="text-red-400" />
              </p>
              <p>18+ Exclusive Content | Privacy Policy | Terms of Service</p>
              <p className="text-xs text-gray-600">
                Crafted with passion for those who seek the extraordinary
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorBioSite;