import React, { useState, useEffect } from 'react';
import { Heart, Lock, ShoppingBag, Gift, MessageCircle, Play, Pause, Instagram, ExternalLink } from 'lucide-react';

const CleanBaddieBio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Bad Girl - Dua Lipa");
  
  useEffect(() => {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach((sparkle, index) => {
      sparkle.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  const mainButtons = [
    { icon: Heart, text: "💌 Unlock My World", color: "from-rose-400 to-pink-500", href: "#" },
    { icon: Lock, text: "👙 Private Content", color: "from-amber-400 to-orange-500", href: "#" },
    { icon: ShoppingBag, text: "🛍️ Shop My Fits", color: "from-purple-400 to-pink-500", href: "#" },
    { icon: Gift, text: "🎁 Spoil Me", color: "from-yellow-400 to-amber-500", href: "#" },
    { icon: MessageCircle, text: "📲 Slide in My DMs", color: "from-pink-400 to-rose-500", href: "#" }
  ];

  const previewImages = [
    "https://images.unsplash.com/photo-1494790108755-2616c96153c2?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50 overflow-hidden">
      {/* Sparkle Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute w-2 h-2 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=1200&fit=crop&crop=center")',
            filter: 'blur(20px) brightness(0.8)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/80 via-amber-100/60 to-pink-100/80" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 mb-4 drop-shadow-lg">
              ALEXA NOIR
            </h1>
            <p className="text-xl md:text-2xl font-medium text-rose-800/80 tracking-wide italic">
              Brains, booty, and just the right amount of bad.
            </p>
          </div>
          
          {/* Pulse Effect Behind Text */}
          <div className="absolute inset-0 -z-10">
            <div className="w-96 h-96 bg-gradient-to-r from-rose-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse mx-auto" />
          </div>
        </div>
      </section>

      {/* Main Buttons */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto space-y-6">
          {mainButtons.map((button, index) => (
            <button
              key={index}
              className={`w-full bg-gradient-to-r ${button.color} text-white font-bold text-lg py-6 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:brightness-110 active:scale-95`}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.1) inset'
              }}
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">{button.text}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Now Playing Section */}
      <section className="px-4 py-8 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <div>
                  <p className="text-sm font-medium text-rose-800">Now Playing</p>
                  <p className="text-lg font-bold text-rose-900">{currentTrack}</p>
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 bg-rose-400 rounded-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Grid */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-rose-900 mb-4 tracking-wide">
              EXCLUSIVE PREVIEWS
            </h2>
            <p className="text-lg text-rose-700 italic font-medium">
              Just a peek... you know you want more.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-rose-200 to-pink-200 shadow-lg">
                  <img 
                    src={image} 
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lock className="text-white" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-black text-rose-900 mb-6 tracking-wide text-center">
              ABOUT YOUR GIRL
            </h2>
            <p className="text-lg text-rose-800 leading-relaxed text-center font-medium">
              22, hot, and a little unhinged. I post cute chaos, sultry pics, and everything in between. 
              Good vibes only, drama-free zone 💅
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-6">
                <div className="text-center">
                  <p className="text-2xl font-black text-rose-900">50K+</p>
                  <p className="text-sm text-rose-700">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-rose-900">1M+</p>
                  <p className="text-sm text-rose-700">Likes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-rose-900">Daily</p>
                  <p className="text-sm text-rose-700">Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-rose-900 mb-4 tracking-wide flex items-center justify-center">
              <Instagram className="mr-3" size={32} />
              INSTA FEED
            </h2>
            <p className="text-lg text-rose-700 italic font-medium">
              Daily dose of me ✨
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {previewImages.slice(0, 9).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              <Instagram className="mr-2" size={20} />
              Follow for More
              <ExternalLink className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-rose-700 font-medium text-lg mb-4">
            Made with 💕 for the baddest
          </p>
          <p className="text-rose-600 text-sm">
            © 2025 Alexa Noir. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        .sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CleanBaddieBio;