import React, { useState, useEffect } from 'react';
import { Heart, Gift, Camera, MessageCircle, Star, Sparkles, Clock, Lock } from 'lucide-react';

const NYECreatorWebsite = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [showTipMenu, setShowTipMenu] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const targetDate = new Date('2025-01-01T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          size: Math.random() * 4 + 2
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  const contentGrid = [
    { title: "Midnight Tease", locked: true },
    { title: "Champagne Dreams", locked: true },
    { title: "Gold Rush", locked: false },
    { title: "After Dark", locked: true },
    { title: "NYE Special", locked: true },
    { title: "Countdown Kiss", locked: false }
  ];

  const tipMenuItems = [
    { price: "$10", item: "Blow Me a Kiss", icon: "💋" },
    { price: "$25", item: "Champagne Toast", icon: "🥂" },
    { price: "$50", item: "Private Countdown Clip", icon: "🕛" },
    { price: "$100", item: "NYE Secret Surprise", icon: "🎁" },
    { price: "$200", item: "Midnight Call", icon: "📞" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-pulse"
            style={{
              left: `${sparkle.left}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${sparkle.animationDelay}s`,
              fontSize: `${sparkle.size}px`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 opacity-90"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
              NEW YEAR
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-amber-200 mb-6">
              Same Sins 🥂
            </h2>
            <p className="text-xl md:text-2xl text-amber-100 font-light italic max-w-2xl mx-auto mb-8">
              "Count down with me, kiss me at midnight... or undress me now."
            </p>
          </div>

          <button className="group relative px-12 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50">
            <span className="relative z-10 flex items-center gap-2">
              💋 ENTER THE AFTERPARTY
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif mb-4 text-amber-200">
            TIME LEFT TO SPOIL ME BEFORE THE BALL DROPS
          </h3>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'DAYS', value: countdown.days },
              { label: 'HOURS', value: countdown.hours },
              { label: 'MINUTES', value: countdown.minutes },
              { label: 'SECONDS', value: countdown.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-amber-900/30 to-black/50 rounded-lg p-6 border border-amber-500/20 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{item.value}</div>
                <div className="text-sm text-amber-200 font-light tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Action Buttons */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🎆", text: "Midnight Tease Drop", gradient: "from-amber-500 to-yellow-600" },
              { icon: "🍾", text: "Champagne Wishlist", gradient: "from-yellow-500 to-amber-500" },
              { icon: "💌", text: "Send Me a Midnight Kiss", gradient: "from-amber-600 to-yellow-500" },
              { icon: "🎁", text: "Unlock 2025 Content Vault", gradient: "from-yellow-600 to-amber-600" },
              { icon: "📸", text: "Watch My NYE Strip Show", gradient: "from-amber-500 to-yellow-500" },
              { icon: "💰", text: "Tip Menu", gradient: "from-yellow-500 to-amber-600", onClick: () => setShowTipMenu(true) }
            ].map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`group relative p-6 bg-gradient-to-r ${button.gradient} rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{button.icon}</span>
                  <span className="text-xl font-bold text-black">{button.text}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-serif text-center mb-12 text-amber-200">
            EXCLUSIVE CONTENT PREVIEW
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contentGrid.map((item, index) => (
              <div key={index} className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-amber-900/30 to-black/50 border border-amber-500/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.locked ? (
                    <Lock className="w-12 h-12 text-amber-400" />
                  ) : (
                    <Star className="w-12 h-12 text-amber-400" />
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-amber-200">{item.title}</h4>
                  <p className="text-sm text-amber-100/70">
                    {item.locked ? 'Premium Content' : 'Preview Available'}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-serif mb-8 text-amber-200">
            ABOUT YOUR MIDNIGHT MUSE
          </h3>
          <p className="text-xl text-amber-100 font-light italic leading-relaxed max-w-3xl mx-auto mb-8">
            "The only thing hotter than fireworks is me in glitter heels. I'm your New Year's resolution, your bad habit, and your secret wish — all in one."
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">100K+</div>
              <div className="text-amber-200 font-light">Admirers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-amber-200 font-light">Exclusive Sets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-amber-200 font-light">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative py-12 px-4 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Don't spend your New Year alone... I'm waiting.
          </h3>
          <button className="px-8 py-3 bg-black text-amber-400 font-bold text-lg rounded-full hover:bg-gray-900 transition-colors duration-300">
            💌 START CHATTING NOW
          </button>
        </div>
      </section>

      {/* Tip Menu Modal */}
      {showTipMenu && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-amber-900/90 to-black/90 rounded-lg p-8 max-w-lg w-full border border-amber-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-amber-200">TIP MENU</h3>
              <button 
                onClick={() => setShowTipMenu(false)}
                className="text-amber-400 hover:text-amber-200 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              {tipMenuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full p-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-lg border border-amber-500/30 hover:from-amber-500/30 hover:to-yellow-500/30 transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-amber-200 font-medium">{item.item}</span>
                  </div>
                  <span className="text-amber-400 font-bold text-lg">{item.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NYECreatorWebsite;