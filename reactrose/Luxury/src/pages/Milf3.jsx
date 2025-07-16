import React, { useState, useEffect } from 'react';
import { Heart, Lock, ShoppingBag, Gift, MessageCircle, Play, Pause, Instagram, ExternalLink, Star, Sparkles, Camera, Crown, Flame, Zap, Diamond, Award, Users, Eye, Video, Music } from 'lucide-react';

const MiaMonroeSite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Positions - Ariana Grande");
  const [showBanner, setShowBanner] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainButtons = [
    { 
      icon: Heart, 
      text: "💎 VIP ACCESS", 
      subtitle: "Exclusive content & perks",
      color: "from-rose-500 via-pink-500 to-purple-600", 
      href: "#", 
      glow: "shadow-rose-500/50",
      premium: true
    },
    { 
      icon: Video, 
      text: "🔥 CUSTOM VIDEOS", 
      subtitle: "Personalized just for you",
      color: "from-orange-500 via-red-500 to-pink-600", 
      href: "#", 
      glow: "shadow-orange-500/50",
      premium: true
    },
    { 
      icon: Instagram, 
      text: "📸 INSTAGRAM", 
      subtitle: "Daily updates & stories",
      color: "from-purple-500 via-violet-500 to-indigo-600", 
      href: "#", 
      glow: "shadow-purple-500/50"
    },
    { 
      icon: Gift, 
      text: "🎁 SPOIL ME", 
      subtitle: "Wishlist & gifts",
      color: "from-amber-500 via-yellow-500 to-orange-600", 
      href: "#", 
      glow: "shadow-amber-500/50"
    },
    { 
      icon: MessageCircle, 
      text: "💬 CHAT WITH ME", 
      subtitle: "Direct messages open",
      color: "from-blue-500 via-cyan-500 to-teal-600", 
      href: "#", 
      glow: "shadow-blue-500/50"
    }
  ];

 const previewImages = [
  "/src/assets/girl-5864172_1280.jpg",
  "src/assets/pexels-andrea-musto-135941147-20425087.jpg",
  "/src/assets/pexels-caio-mantovani-97605853-13815186.jpg",
  "/src/assets/pexels-cottonbro-3778934.jpg",
  "/src/assets/pexels-cottonbro-5645101.jpg"
];


  const stats = [
    { value: "250K+", label: "Subscribers", icon: Users },
    { value: "15M+", label: "Total Views", icon: Eye },
    { value: "500+", label: "Videos", icon: Video },
    { value: "Top 1%", label: "Creator", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-rose-500/30 to-purple-500/30 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x / 20}px`,
            bottom: `${mousePosition.y / 20}px`,
            transform: 'translate(50%, 50%)',
            transition: 'all 0.7s ease-out'
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400' :
              i % 3 === 1 ? 'w-1 h-1 bg-gradient-to-r from-rose-400 to-orange-400' :
              'w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Premium Weekend Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-4 px-4 text-center font-bold shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3">
            <Flame size={18} className="animate-pulse text-yellow-300" />
            <span className="text-lg">🔥 WEEKEND SPECIAL: 50% OFF VIP ACCESS</span>
            <Flame size={18} className="animate-pulse text-yellow-300" />
            <button 
              onClick={() => setShowBanner(false)}
              className="ml-6 text-white/80 hover:text-white text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Enhanced Profile Image */}
        <div className="absolute top-24 right-8 md:right-16 z-10">
          <div className="relative">
            <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 p-1.5 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c96153c2?w=400&h=400&fit=crop&crop=face"
                  alt="Mia Monroe"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Crown size={20} className="text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 
              className="text-6xl md:text-9xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mb-6 drop-shadow-2xl"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
              }}
            >
              MIA MONROE
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Diamond size={24} className="text-purple-400 animate-pulse" />
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 tracking-wide">
                Your Fantasy, My Reality
              </p>
              <Diamond size={24} className="text-purple-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-center space-x-6 text-purple-200">
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">Top 1% Creator</span>
              </div>
              <div className="w-1 h-1 bg-purple-400 rounded-full" />
              <div className="flex items-center space-x-2">
                <Zap size={16} className="text-pink-400" />
                <span className="text-sm font-medium">Daily Content</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Glowing Ring Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse mx-auto" />
          </div>
        </div>
      </section>

      {/* Enhanced Main Buttons */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-lg mx-auto space-y-6">
          {mainButtons.map((button, index) => (
            <button
              key={index}
              className={`group relative w-full bg-gradient-to-r ${button.color} text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 hover:brightness-110 active:scale-95 backdrop-blur-sm border border-white/20 overflow-hidden`}
              style={{
                boxShadow: `0 20px 60px ${button.glow.includes('rose') ? 'rgba(244, 63, 94, 0.4)' : 
                           button.glow.includes('orange') ? 'rgba(249, 115, 22, 0.4)' : 
                           button.glow.includes('purple') ? 'rgba(147, 51, 234, 0.4)' : 
                           button.glow.includes('amber') ? 'rgba(245, 158, 11, 0.4)' : 
                           'rgba(59, 130, 246, 0.4)'}`
              }}
            >
              {button.premium && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black px-3 py-1 rounded-bl-xl">
                  PREMIUM
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative py-6 px-8">
                <div className="text-center">
                  <div className="text-2xl font-black mb-2">{button.text}</div>
                  <div className="text-sm font-medium opacity-90">{button.subtitle}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <stat.icon size={32} className="mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-purple-200 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Now Playing Section */}
      <section className="px-4 py-12 relative z-10">
        <div className="max-w-lg mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                >
                  {isPlaying ? <Pause size={24} className="group-hover:scale-110 transition-transform" /> : <Play size={24} className="group-hover:scale-110 transition-transform ml-1" />}
                </button>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Music size={16} className="text-purple-400" />
                    <p className="text-sm font-medium text-purple-200">Now Playing</p>
                  </div>
                  <p className="text-xl font-bold text-white">{currentTrack}</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl animate-pulse" />
                </div>
                {isPlaying && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Preview Grid */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wide flex items-center justify-center">
              <Camera className="mr-4 text-purple-400" size={40} />
              EXCLUSIVE PREVIEWS
              <Lock className="ml-4 text-pink-400" size={32} />
            </h2>
            <p className="text-xl text-purple-200 font-medium mb-6">
              Get a taste of what's waiting for you... 🔥
            </p>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-rose-400">
                <Flame size={20} />
                <span className="text-lg font-bold">18+ ONLY</span>
                <Flame size={20} />
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <div className="flex items-center space-x-2 text-pink-400">
                <Eye size={20} />
                <span className="text-lg font-bold">NSFW CONTENT</span>
                <Eye size={20} />
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-4 border border-pink-400/30 max-w-2xl mx-auto">
              <p className="text-pink-200 font-medium">
                💎 <strong>Subscribe now</strong> to unlock 500+ exclusive photos & videos instantly
              </p>
            </div>
          </div>
          
          {/* Featured Preview */}
          <div className="mb-12">
            <div className="relative group cursor-pointer max-w-2xl mx-auto">
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/30 to-pink-500/30 shadow-2xl backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/60 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c96153c2?w=800&h=600&fit=crop"
                  alt="Featured Preview"
                  className="w-full h-full object-cover filter blur-lg group-hover:blur-md transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-white/60 shadow-2xl mb-4 mx-auto">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                    <p className="text-white font-bold text-xl mb-2">🔥 FEATURED VIDEO</p>
                    <p className="text-pink-200 font-medium">15 minutes of pure pleasure</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  🔥 HOT
                </div>
                <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  💎 VIP ONLY
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-rose-400">
                        <Heart size={16} />
                        <span className="text-sm font-medium">2.4k likes</span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-400">
                        <Eye size={16} />
                        <span className="text-sm font-medium">12.8k views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-6 border border-rose-400/30 text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Camera size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">📸 PHOTO SETS</h3>
              <p className="text-rose-200 font-medium mb-3">150+ exclusive photos</p>
              <div className="text-sm text-rose-300">Lingerie • Nude • Artistic</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-xl rounded-3xl p-6 border border-purple-400/30 text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Video size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">🎬 VIDEOS</h3>
              <p className="text-purple-200 font-medium mb-3">50+ exclusive videos</p>
              <div className="text-sm text-purple-300">Solo • Couples • Custom</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-6 border border-amber-400/30 text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">💬 CHAT</h3>
              <p className="text-amber-200 font-medium mb-3">Direct messaging</p>
              <div className="text-sm text-amber-300">Sexting • Voice • Video calls</div>
            </div>
          </div>
          
          {/* Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((image, index) => {
              const contentTypes = [
                { label: "🔥 SPICY", color: "from-rose-500 to-pink-500" },
                { label: "💎 VIP", color: "from-purple-500 to-indigo-500" },
                { label: "🎬 VIDEO", color: "from-orange-500 to-red-500" },
                { label: "💕 CUTE", color: "from-pink-500 to-rose-500" },
                { label: "🌶️ HOT", color: "from-red-500 to-orange-500" },
                { label: "✨ NEW", color: "from-cyan-500 to-blue-500" },
                { label: "🔒 LOCKED", color: "from-gray-500 to-gray-600" },
                { label: "👑 PREMIUM", color: "from-yellow-500 to-amber-500" },
                { label: "💋 SEXY", color: "from-pink-500 to-purple-500" }
              ];
              
              const contentType = contentTypes[index % contentTypes.length];
              const isVideo = index % 4 === 2;
              
              return (
                <div key={index} className="relative group cursor-pointer">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                    <img 
                      src={image} 
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover filter blur-md group-hover:blur-sm transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent" />
                    
                    {/* Content Type Badge */}
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${contentType.color} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg`}>
                      {contentType.label}
                    </div>
                    
                    {/* Video Play Button */}
                    {isVideo && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Play size={14} className="text-white ml-0.5" />
                      </div>
                    )}
                    
                    {/* Center Lock/Play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-white/40 group-hover:border-purple-400/60">
                        {isVideo ? (
                          <Play className="text-white ml-1" size={24} />
                        ) : (
                          <Lock className="text-white" size={24} />
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom Stats */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-1 text-rose-400">
                            <Heart size={12} />
                            <span>{Math.floor(Math.random() * 500) + 100}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-purple-400">
                            <Eye size={12} />
                            <span>{Math.floor(Math.random() * 2000) + 500}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/30 max-w-3xl mx-auto">
              <h3 className="text-3xl font-black text-white mb-4">Ready to see it all? 🔥</h3>
              <p className="text-xl text-pink-200 font-medium mb-6">
                Join 250K+ subscribers getting exclusive content daily
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/20 group">
                  <Heart className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-lg">Subscribe Now - 50% OFF</span>
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/20 group">
                  <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-lg">Message Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="text-4xl font-black text-white mb-8 tracking-wide text-center">
              ABOUT YOUR GIRL
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed text-center font-medium mb-8">
              24 years young, unapologetically bold, and living my best life. I create intimate, 
              authentic content that celebrates confidence and sensuality. Join my world of luxury, 
              passion, and exclusive experiences 💜
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">250K+</p>
                  <p className="text-sm text-purple-200 mt-1">Subscribers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">15M+</p>
                  <p className="text-sm text-purple-200 mt-1">Total Views</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Top 1%</p>
                  <p className="text-sm text-purple-200 mt-1">Creator</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Daily</p>
                  <p className="text-sm text-purple-200 mt-1">Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Instagram Feed */}
      <section className="px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6 tracking-wide flex items-center justify-center">
              <Instagram className="mr-4 text-purple-400" size={40} />
              LATEST POSTS
            </h2>
            <p className="text-xl text-purple-200 font-medium">
              Behind the scenes & daily inspiration ✨
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {previewImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-white/20 hover:border-purple-400/50 group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto border border-white/20 group">
              <Instagram className="mr-3 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-lg">Follow for Daily Updates</span>
              <ExternalLink className="ml-3 group-hover:scale-110 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="px-4 py-20 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Diamond className="text-purple-400" size={24} />
              <p className="text-purple-200 font-bold text-xl">
                Made with 💜 for the baddest
              </p>
              <Diamond className="text-purple-400" size={24} />
            </div>
            <p className="text-purple-300 text-sm mb-4">
              © 2025 Mia Monroe. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-purple-400">
              <span>18+ ONLY</span>
              <div className="w-1 h-1 bg-purple-400 rounded-full" />
              <span>PREMIUM CONTENT</span>
              <div className="w-1 h-1 bg-purple-400 rounded-full" />
              <span>AUTHENTIC CREATOR</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.6); }
          50% { box-shadow: 0 0 60px rgba(147, 51, 234, 0.9); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shimmer {
          animation: shimmer 3s infinite;
        }
        
        .floating {
          animation: float 8s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .premium-glow {
          position: relative;
          overflow: hidden;
        }
        
        .premium-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default MiaMonroeSite;