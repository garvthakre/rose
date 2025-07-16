import React, { useState, useEffect } from 'react';
import { Heart, Gift, Camera, MessageCircle, Star, Sparkles, Clock, Lock, Play, Eye, Crown, Zap, Flame, Users } from 'lucide-react';

const NYECreatorWebsite = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [showTipMenu, setShowTipMenu] = useState(false);
  const [showPrivateMessage, setShowPrivateMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('exclusive');
  const [sparkles, setSparkles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnline, setIsOnline] = useState(true);
  const [viewerCount, setViewerCount] = useState(2847);

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
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 5,
          size: Math.random() * 6 + 3,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 const contentTabs = {
  exclusive: [
    {
      title: "Midnight Stripping",
      preview: "🔥 Full undress show",
      price: "$25",
      duration: "12 min",
      locked: false,
      hot: true,
      image: "/src/assets/girl-5864172_1280.jpg"
    },
    {
      title: "Champagne Bath",
      preview: "💦 Wet & wild",
      price: "$35",
      duration: "15 min",
      locked: true,
      hot: true,
      image: "src/assets/pexels-andrea-musto-135941147-20425087.jpg"
    },
    {
      title: "Silk & Lace",
      preview: "👄 Lingerie tease",
      price: "$20",
      duration: "8 min",
      locked: false,
      hot: false,
      image: "/src/assets/pexels-caio-mantovani-97605853-13815186.jpg"
    },
    {
      title: "Golden Hour",
      preview: "✨ Glitter body paint",
      price: "$40",
      duration: "18 min",
      locked: true,
      hot: true,
      image: "/src/assets/pexels-cottonbro-3778934.jpg"
    },
    {
      title: "After Dark Secrets",
      preview: "🌙 Your fantasies",
      price: "$50",
      duration: "25 min",
      locked: true,
      hot: true,
      image: "/src/assets/pexels-cottonbro-5645101.jpg"
    },
    {
      title: "NYE Countdown Strip",
      preview: "🕛 Strip every hour",
      price: "$60",
      duration: "30 min",
      locked: true,
      hot: true,
      image: "/src/assets/pexels-cottonbro-8732107.jpg"
    }
  ],
  live: [
    {
      title: "Live Now: Bedroom",
      preview: "🔴 Currently online",
      price: "Free",
      viewers: "2,847",
      locked: false,
      image: "/src/assets/pexels-joshua-roberts-212557837-14132594.jpg"
    },
    {
      title: "Private Show Available",
      preview: "💋 Just for you",
      price: "$5/min",
      viewers: "1-on-1",
      locked: false,
      image: "/src/assets/pexels-ryanpilat1-12284882.jpg"
    },
    {
      title: "Group Show Starting",
      preview: "👥 Join the fun",
      price: "$2/min",
      viewers: "Max 50",
      locked: false,
      image: "/src/assets/pexels-cottonbro-5645101.jpg"
    }
  ],
  customs: [
    {
      title: "Personal Message",
      preview: "💌 Your name moaned",
      price: "$15",
      delivery: "24h",
      locked: false,
      image: "/src/assets/pexels-caio-mantovani-97605853-13815186.jpg"
    },
    {
      title: "Custom Photo Set",
      preview: "📸 Your requests",
      price: "$45",
      delivery: "48h",
      locked: false,
      image: "/src/assets/pexels-cottonbro-3778934.jpg"
    },
    {
      title: "Girlfriend Experience",
      preview: "💕 Day of texting",
      price: "$80",
      delivery: "Same day",
      locked: false,
      image: "src/assets/pexels-andrea-musto-135941147-20425087.jpg"
    },
    {
      title: "Video Call",
      preview: "📹 Face to face",
      price: "$100",
      delivery: "Schedule",
      locked: false,
      image: "/src/assets/girl-5864172_1280.jpg"
    }
  ]
};


  const tipMenuItems = [
    { price: "$5", item: "Blow a Kiss", icon: "💋", description: "Send me a sweet kiss" },
    { price: "$10", item: "Spank Me", icon: "🍑", description: "Make me blush" },
    { price: "$25", item: "Remove One Item", icon: "👗", description: "You choose what comes off" },
    { price: "$50", item: "Champagne Toast", icon: "🥂", description: "Celebrate with me" },
    { price: "$100", item: "Private Countdown", icon: "🕛", description: "Personal NYE moment" },
    { price: "$200", item: "Midnight Call", icon: "📞", description: "Ring in 2025 together" },
    { price: "$500", item: "NYE Girlfriend", icon: "💕", description: "Your date for the night" }
  ];

  const achievements = [
    { icon: "👑", label: "Top 1% Creator", color: "text-yellow-400" },
    { icon: "🔥", label: "Most Desired", color: "text-red-400" },
    { icon: "💎", label: "Premium Model", color: "text-blue-400" },
    { icon: "⭐", label: "5-Star Rated", color: "text-amber-400" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
        
        {/* Floating Sparkles */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-pulse"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.animationDelay}s`,
              fontSize: `${sparkle.size}px`,
              opacity: sparkle.opacity
            }}
          >
            ✨
          </div>
        ))}

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor Trail Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-4 h-4 bg-amber-400 rounded-full opacity-50 blur-sm transition-all duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: `radial-gradient(circle, rgba(251,191,36,0.8), transparent)`
        }}
      />

      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-amber-500/20">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-sm font-medium text-amber-200">
                {isOnline ? 'ONLINE NOW' : 'OFFLINE'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{viewerCount.toLocaleString()} watching</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center gap-1 ${achievement.color}`}>
                <span className="text-sm">{achievement.icon}</span>
                <span className="text-xs hidden md:block">{achievement.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full px-4 py-2 border border-amber-500/30">
                <Crown className="w-5 h-5 text-amber-400" />
                <span className="text-amber-200 font-medium">TOP 1% CREATOR</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-serif font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4 tracking-wide">
              NEW YEAR
            </h1>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-amber-200 mb-6">
              Same Sins 🥂
            </h2>
            <p className="text-2xl md:text-3xl text-amber-100 font-light italic max-w-3xl mx-auto mb-8 leading-relaxed">
              "Count down with me, kiss me at midnight... or undress me now."
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full px-4 py-2 border border-red-500/30">
                <span className="text-red-300 font-medium">🔥 LIVE NOW</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 border border-purple-500/30">
                <span className="text-purple-300 font-medium">💎 PREMIUM</span>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-500/30">
                <span className="text-green-300 font-medium">✨ EXCLUSIVE</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50">
              <span className="relative z-10 flex items-center gap-2">
                💋 ENTER THE AFTERPARTY
                <Play className="w-5 h-5 group-hover:animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => setShowPrivateMessage(true)}
              className="group relative px-12 py-5 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold text-xl rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                💌 PRIVATE MESSAGE
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-serif mb-2 text-amber-200">
              TIME LEFT TO SPOIL ME
            </h3>
            <p className="text-xl text-amber-100/70 font-light">
              Before the ball drops and prices go up 📈
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { label: 'DAYS', value: countdown.days },
              { label: 'HOURS', value: countdown.hours },
              { label: 'MINUTES', value: countdown.minutes },
              { label: 'SECONDS', value: countdown.seconds }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-b from-amber-900/30 to-black/50 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:border-amber-500/40">
                  <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-sm text-amber-200 font-light tracking-widest">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-6 border border-red-500/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Flame className="w-6 h-6 text-red-400 animate-pulse" />
              <span className="text-red-300 font-bold text-lg">LIMITED TIME OFFER</span>
              <Flame className="w-6 h-6 text-red-400 animate-pulse" />
            </div>
            <p className="text-red-200">50% OFF all exclusive content until midnight!</p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-serif mb-4 text-amber-200">
              CHOOSE YOUR PLEASURE
            </h3>
            <p className="text-xl text-amber-100/70">What gets you off tonight?</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-black/50 rounded-full p-2 border border-amber-500/30">
              {Object.keys(contentTabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black'
                      : 'text-amber-200 hover:text-amber-100'
                  }`}
                >
                  {tab === 'exclusive' && '🔥 '}{tab}
                </button>
              ))}
            </div>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTabs[activeTab].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-b from-amber-900/20 to-black/50 rounded-2xl overflow-hidden border border-amber-500/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:border-amber-500/40">
                {item.hot && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-20 animate-pulse">
                    🔥 HOT
                  </div>
                )}
                
                <div className="aspect-video relative overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: item.image ? `url(${item.image})` : 
                        `linear-gradient(135deg, rgba(251,191,36,0.3) 0%, rgba(245,158,11,0.3) 100%), url('https://images.unsplash.com/photo-1534188753412-5de0edec9960?w=400&h=300&fit=crop&crop=face')`
                    }}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>
                  
                  {/* Lock/Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 border border-amber-500/30 group-hover:bg-black/40 group-hover:border-amber-500/50 transition-all duration-300">
                      {item.locked ? (
                        <Lock className="w-8 h-8 text-amber-400 group-hover:text-amber-300 group-hover:animate-pulse" />
                      ) : (
                        <Play className="w-8 h-8 text-amber-400 group-hover:text-amber-300 group-hover:animate-pulse" />
                      )}
                    </div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-amber-200 mb-2">{item.title}</h4>
                  <p className="text-amber-100/70 text-sm mb-4">{item.preview}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-amber-400 font-bold text-lg">{item.price}</span>
                      {item.duration && (
                        <span className="text-amber-200/60 text-sm">{item.duration}</span>
                      )}
                      {item.viewers && (
                        <span className="text-amber-200/60 text-sm">{item.viewers}</span>
                      )}
                      {item.delivery && (
                        <span className="text-amber-200/60 text-sm">{item.delivery}</span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-2 rounded-full font-bold hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
                      {item.locked ? 'UNLOCK' : activeTab === 'live' ? 'JOIN' : 'ORDER'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🍾", text: "Champagne Wishlist", subtitle: "Spoil me tonight", gradient: "from-amber-500 to-yellow-600" },
              { icon: "💰", text: "Tip Menu", subtitle: "Make me moan", gradient: "from-green-500 to-emerald-600", onClick: () => setShowTipMenu(true) },
              { icon: "📞", text: "Call Me Now", subtitle: "Hear my voice", gradient: "from-pink-500 to-red-600" },
              { icon: "🎁", text: "Surprise Me", subtitle: "Random treat", gradient: "from-purple-500 to-pink-600" }
            ].map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`group relative p-6 bg-gradient-to-r ${button.gradient} rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:animate-bounce">{button.icon}</div>
                  <div className="text-white font-bold text-lg mb-1">{button.text}</div>
                  <div className="text-white/80 text-sm">{button.subtitle}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-5xl font-serif mb-6 text-amber-200">
              YOUR MIDNIGHT GODDESS
            </h3>
            <p className="text-2xl text-amber-100 font-light italic leading-relaxed max-w-4xl mx-auto mb-8">
              "The only thing hotter than fireworks is me in glitter heels. I'm your New Year's resolution, your bad habit, and your secret wish — all wrapped in silk and sin."
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-b from-amber-900/30 to-black/50 rounded-2xl border border-amber-500/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">127K+</div>
              <div className="text-amber-200 font-light">Devoted Fans</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-amber-900/30 to-black/50 rounded-2xl border border-amber-500/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">1,200+</div>
              <div className="text-amber-200 font-light">Exclusive Videos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-amber-900/30 to-black/50 rounded-2xl border border-amber-500/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">5★</div>
              <div className="text-amber-200 font-light">Perfect Rating</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-amber-900/30 to-black/50 rounded-2xl border border-amber-500/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-amber-200 font-light">Always Ready</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-8 border border-amber-500/20">
            <h4 className="text-2xl font-serif text-amber-200 mb-4">What Makes Me Special?</h4>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💋</span>
                <div>
                  <div className="text-amber-200 font-medium">Interactive Experience</div>
                  <div className="text-amber-100/70 text-sm">Real conversations, real connections</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <div className="text-amber-200 font-medium">Custom Content</div>
                  <div className="text-amber-100/70 text-sm">Your fantasies brought to life</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👑</span>
                <div>
                  <div className="text-amber-200 font-medium">Premium Quality</div>
                  <div className="text-amber-100/70 text-sm">4K videos, professional lighting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold text-white mb-4">
                Don't spend your New Year alone...
              </h3>
              <p className="text-2xl text-white/90 font-light mb-8">
                I'm waiting for you in my bedroom 😈
              </p>
              <button className="px-12 py-4 bg-white text-pink-600 font-bold text-xl rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                💌 START CHATTING NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tip Menu Modal */}
      {showTipMenu && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-amber-900/90 to-black/90 rounded-2xl p-8 max-w-2xl w-full border border-amber-500/30 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-serif text-amber-200">TIP MENU</h3>
                <p className="text-amber-100/70">Make me feel special tonight</p>
              </div>
              <button 
                onClick={() => setShowTipMenu(false)}
                className="text-amber-400 hover:text-amber-200 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-500/20 transition-all duration-300"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              {tipMenuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full p-6 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl border border-amber-500/30 hover:from-amber-500/30 hover:to-yellow-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div className="text-left">
                        <div className="text-amber-200 font-bold text-lg">{item.item}</div>
                        <div className="text-amber-100/70 text-sm">{item.description}</div>
                      </div>
                    </div>
                    <div className="text-amber-400 font-bold text-2xl">{item.price}</div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-amber-200/70 text-sm mb-4">
                💡 Tip $100+ and get a personal thank you message
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:from-green-400 hover:to-emerald-500 transition-all duration-300">
                💳 SEND CUSTOM TIP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Private Message Modal */}
      {showPrivateMessage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-pink-900/90 to-black/90 rounded-2xl p-8 max-w-lg w-full border border-pink-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-pink-200">Private Message</h3>
              <button 
                onClick={() => setShowPrivateMessage(false)}
                className="text-pink-400 hover:text-pink-200 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-pink-500/20 rounded-lg p-4 border border-pink-500/30">
                <p className="text-pink-200 mb-2">💌 Send me a message</p>
                <p className="text-pink-100/70 text-sm">$5 per message • I respond within 1 hour</p>
              </div>
              
              <textarea 
                className="w-full h-32 bg-black/50 border border-pink-500/30 rounded-lg p-4 text-pink-100 placeholder-pink-300/50 focus:border-pink-500/50 focus:outline-none resize-none"
                placeholder="Tell me what you want for New Year's..."
              />
              
              <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-lg hover:from-pink-400 hover:to-red-500 transition-all duration-300">
                💕 SEND MESSAGE ($5)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NYECreatorWebsite;