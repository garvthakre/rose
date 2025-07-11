import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const  Valentine = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [silhouetteOpacity, setSilhouetteOpacity] = useState(0.8);

  useEffect(() => {
    // Silhouette opacity animation
    const interval = setInterval(() => {
      setSilhouetteOpacity(prev => prev === 0.8 ? 0.4 : 0.8);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAgeVerification = (isAdult) => {
    if (isAdult) {
      setShowAgeVerification(false);
    } else {
      alert("Sorry, you must be 18 or older to access this content.");
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGalleryClick = (title) => {
    alert(`🔒 VIP Access Required for "${title}". Subscribe to unlock exclusive content!`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon. 💕");
  };

  const galleryItems = [
    {
      id: 1,
      title: "Romantic Vibes",
      description: "Intimate moments captured in soft candlelight",
      image: "linear-gradient(135deg, #ff69b4, #dc143c)"
    },
    {
      id: 2,
      title: "Love Story",
      description: "A tale of passion and elegance",
      image: "linear-gradient(135deg, #ffb6c1, #ff1493)"
    },
    {
      id: 3,
      title: "Sweet Dreams",
      description: "Dreamy compositions in valentine hues",
      image: "linear-gradient(135deg, #dc143c, #8b0000)"
    },
    {
      id: 4,
      title: "Passionate Moments",
      description: "Capturing the essence of desire",
      image: "linear-gradient(135deg, #ff6b9d, #c44569)"
    },
    {
      id: 5,
      title: "Ruby Romance",
      description: "Deep red luxury and sophistication",
      image: "linear-gradient(135deg, #b83227, #8b0000)"
    },
    {
      id: 6,
      title: "Pink Paradise",
      description: "Soft pink elegance and grace",
      image: "linear-gradient(135deg, #ffb6c1, #ff69b4)"
    }
  ];

  if (showAgeVerification) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-12 max-w-md mx-4 text-center">
          <div className="text-6xl mb-6">💕</div>
          <h2 className="text-3xl font-bold text-white mb-4">Age Verification</h2>
          <p className="text-pink-200 mb-8">This content is intended for adults only. Please confirm you are 18 or older.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAgeVerification(true)}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 hover:-translate-y-1"
            >
              I'm 18+
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-pink-800 text-white font-sans overflow-x-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 text-pink-400 animate-bounce opacity-60">💕</div>
        <div className="absolute top-40 right-20 w-6 h-6 text-red-400 animate-pulse opacity-60">💖</div>
        <div className="absolute bottom-40 left-40 w-10 h-10 text-pink-300 animate-spin opacity-50">🌹</div>
        <div className="absolute bottom-20 right-40 w-8 h-8 text-red-300 animate-bounce opacity-60">💋</div>
        <div className="absolute top-60 left-60 w-6 h-6 text-pink-400 animate-pulse opacity-50">💝</div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 text-red-400 animate-spin opacity-40">💕</div>
        
        {/* Floating Hearts */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-red-400 rounded-full animate-float-reverse opacity-50"></div>
        <div className="absolute top-3/4 left-3/4 w-5 h-5 bg-pink-300 rounded-full animate-float opacity-40"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Valentine's Exclusive
            </div>
            <nav className="hidden md:flex space-x-8">
              {['hero', 'about', 'gallery', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-pink-300 transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

   {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/30 to-red-900/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
                    🔥 Premium Content
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Sensual
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                    Elegance
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-pink-100 leading-relaxed max-w-lg">
                Experience intimate artistry and exclusive content crafted for discerning admirers. Where sophistication meets desire in perfect harmony.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    💎 Subscribe & Unlock
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </button>
                <button className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                  <span className="flex items-center gap-2">
                    🎭 Preview Gallery
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>
              
              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-pink-200 text-sm">Live Now</span>
                </div>
                <div className="text-pink-200 text-sm">
                  <span className="font-semibold text-white">2.4K+</span> Active Subscribers
                </div>
                <div className="text-pink-200 text-sm">
                  <span className="font-semibold text-white">4.9★</span> Rated
                </div>
              </div>
            </div>
            
            <div className="flex justify-center relative">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-4 shadow-2xl">
                  {/* Profile image placeholder */}
                  <div className="relative">
                    <div className="w-64 h-80 bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-7xl font-bold text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-8xl mb-2">💋</div>
                        <div className="text-2xl font-light tracking-widest">EXCLUSIVE</div>
                      </div>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-bounce">
                      🔥
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg animate-pulse">
                      💎
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                      Premium Collection
                    </h3>
                    <p className="text-pink-200 text-lg">Intimate • Artistic • Exclusive</p>
                    <div className="flex justify-center gap-4 pt-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              About the Collection
            </h2>
            <p className="text-xl text-pink-200 leading-relaxed mb-12">
              Welcome to an exclusive world where romance meets artistry. Our Valentine's collection features carefully curated content that celebrates love, passion, and intimacy in the most elegant way possible. Each piece is crafted with attention to detail and an understanding of what makes hearts flutter.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                <p className="text-pink-200">High-resolution, professionally captured moments that tell a story of love and desire.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="text-4xl mb-4">🌹</div>
                <h3 className="text-xl font-semibold mb-4">Exclusive Access</h3>
                <p className="text-pink-200">Members-only content that's not available anywhere else, updated regularly with new romantic themes.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-xl font-semibold mb-4">Personal Touch</h3>
                <p className="text-pink-200">Custom requests and personalized content for our VIP members who want something unique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Romantic Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 hover:z-10"
                style={{ aspectRatio: '3/4' }}
                onClick={() => handleGalleryClick(item.title)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-80"
                  style={{ background: item.image }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold" style={{ opacity: silhouetteOpacity }}>
                  💕
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-pink-200 mb-4">{item.description}</p>
                  <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300">
                    🔒 VIP Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            VIP Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <Heart className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Romantic Sessions</h3>
              <p className="text-pink-200">Intimate photography sessions with a romantic valentine's theme.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <Gift className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
              <p className="text-pink-200">Personalized content created just for you with your preferences in mind.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <div className="text-4xl mb-4">🌹</div>
              <h3 className="text-xl font-semibold mb-4">Premium Gallery</h3>
              <p className="text-pink-200">Access to exclusive high-resolution content updated weekly.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <Sparkles className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">VIP Chat</h3>
              <p className="text-pink-200">Direct messaging and personal interaction with exclusive members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-pink-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-pink-200">love@valentine-exclusive.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-red-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-pink-200">+1 (555) ROMANCE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-pink-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-pink-200">City of Love, Romance Valley</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message 💕
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black bg-opacity-30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Valentine's Exclusive
            </div>
            <p className="text-pink-200">Creating romantic moments and intimate connections</p>
            <div className="flex justify-center space-x-8">
              <Instagram className="w-8 h-8 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors duration-300" />
              <Twitter className="w-8 h-8 text-red-400 hover:text-red-300 cursor-pointer transition-colors duration-300" />
              <Facebook className="w-8 h-8 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors duration-300" />
            </div>
            <div className="border-t border-white border-opacity-20 pt-6 text-pink-200">
              <p>&copy; 2025 Valentine's Exclusive. All rights reserved. 💕</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Valentine;