import React, { useState, useEffect } from 'react';
import { Heart, Gift, Image, MessageCircle, Instagram, Twitter, X, Sparkles } from 'lucide-react';

const CreatorBioSite = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate random sparkles
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);

  const AgeVerificationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-amber-200">
        <div className="mb-6">
          <div className="text-6xl mb-4">🥂</div>
          <h2 className="text-2xl font-serif text-amber-900 mb-2">Age Verification</h2>
          <p className="text-amber-700">Are you 18+ and ready to meet a real woman?</p>
        </div>
        <div className="space-y-3">
          <button
            onClick={() => setAgeVerified(true)}
            className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 px-6 rounded-lg font-medium hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
          >
            Yes, I'm 18+
          </button>
          <button
            onClick={() => window.close()}
            className="w-full bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-400 transition-colors"
          >
            No, I'm under 18
          </button>
        </div>
      </div>
    </div>
  );

  const FloatingBanner = () => (
    showBanner && (
      <div className="fixed top-4 right-4 z-40 bg-gradient-to-r from-amber-100 to-rose-100 border border-amber-200 rounded-full px-4 py-2 shadow-lg animate-pulse">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-800">New content just dropped</span>
          <button
            onClick={() => setShowBanner(false)}
            className="text-amber-600 hover:text-amber-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  );

  const SparkleEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-amber-300 opacity-60 animate-ping"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );

  if (!ageVerified) {
    return <AgeVerificationModal />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-neutral-100 relative overflow-hidden">
      <SparkleEffect />
      <FloatingBanner />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/30 to-rose-100/50"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-rose-200 to-neutral-200"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(244, 63, 94, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-rose-700 to-amber-700 mb-4 leading-tight">
              Ms. Monroe
            </h1>
            <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💋</div>
          </div>
          
          <p className="text-xl md:text-2xl text-amber-800 font-light mb-8 tracking-wide">
            Confidence. Curves. Control.
          </p>
          
          <div className="flex justify-center space-x-4 text-3xl mb-12">
            <span className="animate-pulse">🥂</span>
            <span className="animate-pulse" style={{animationDelay: '0.5s'}}>💎</span>
            <span className="animate-pulse" style={{animationDelay: '1s'}}>🌹</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 pb-12">
        {/* Main Action Buttons */}
        <div className="space-y-4 mb-8">
          <button className="w-full bg-gradient-to-r from-rose-600 to-amber-600 text-white py-4 px-6 rounded-2xl font-medium text-lg hover:from-rose-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
            <Heart className="w-5 h-5" />
            <span>Exclusive Content</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-4 px-6 rounded-2xl font-medium text-lg hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
            <Gift className="w-5 h-5" />
            <span>Spoil Me</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-neutral-700 to-amber-700 text-white py-4 px-6 rounded-2xl font-medium text-lg hover:from-neutral-800 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
            <Image className="w-5 h-5" />
            <span>Private Gallery</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 text-white py-4 px-6 rounded-2xl font-medium text-lg hover:from-rose-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
            <MessageCircle className="w-5 h-5" />
            <span>Book a Chat</span>
          </button>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Instagram className="w-6 h-6" />
          </button>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
            <Twitter className="w-6 h-6" />
          </button>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-6 rounded-2xl shadow-lg border border-amber-200">
          <h3 className="text-2xl font-serif text-amber-900 mb-4 text-center">About Me</h3>
          <p className="text-amber-800 text-center leading-relaxed font-light italic">
            "I don't chase. I attract. If you're here, you know what you want — and I know how to give it."
          </p>
        </div>

        {/* Enhanced Gallery Section */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif text-amber-900 mb-2">Private Gallery</h3>
            <p className="text-amber-700 text-sm italic">Exclusive content for discerning admirers</p>
          </div>
          
          {/* Featured Content */}
          <div className="relative mb-6 rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-amber-100 via-rose-100 to-neutral-100 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-rose-900/20 to-neutral-900/20 backdrop-blur-sm"></div>
              
              {/* Luxury pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-gradient-to-br from-amber-400/30 via-transparent to-rose-400/30"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 40%),
                                   radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.1) 0%, transparent 40%)`
                }}></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    💎
                  </div>
                  <div className="text-amber-800 font-serif text-lg mb-2">Latest Collection</div>
                  <div className="text-amber-700 text-sm">VIP Access Required</div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                ✨ NEW
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                12 items
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { emoji: '🌹', label: 'Lingerie', items: '8 photos' },
              { emoji: '🥂', label: 'Lifestyle', items: '15 photos' },
              { emoji: '💋', label: 'Intimate', items: '6 videos' },
              { emoji: '👑', label: 'Luxury', items: '10 photos' }
            ].map((collection, i) => (
              <div key={i} className="relative aspect-square bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl overflow-hidden group cursor-pointer border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-rose-200/30 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {collection.emoji}
                  </div>
                  <div className="text-amber-800 font-serif text-sm font-medium text-center mb-1">
                    {collection.label}
                  </div>
                  <div className="text-amber-700 text-xs text-center">
                    {collection.items}
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-amber-300/0 group-hover:border-amber-300/50 rounded-xl transition-all duration-300"></div>
                
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-amber-600 text-lg animate-pulse">🔒</div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 p-4 rounded-xl border border-amber-200">
            <div className="flex justify-between items-center text-center">
              <div className="flex-1">
                <div className="text-xl font-serif text-amber-900">120+</div>
                <div className="text-xs text-amber-700">Photos</div>
              </div>
              <div className="w-px h-8 bg-amber-300"></div>
              <div className="flex-1">
                <div className="text-xl font-serif text-amber-900">25+</div>
                <div className="text-xs text-amber-700">Videos</div>
              </div>
              <div className="w-px h-8 bg-amber-300"></div>
              <div className="flex-1">
                <div className="text-xl font-serif text-amber-900">Weekly</div>
                <div className="text-xs text-amber-700">Updates</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center">
            <button className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 text-white py-3 px-8 rounded-full font-medium text-sm hover:from-amber-700 hover:via-rose-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>🔓</span>
                <span>Unlock Gallery</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorBioSite;