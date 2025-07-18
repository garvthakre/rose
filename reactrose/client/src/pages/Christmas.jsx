import React, { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const ChristmasCreator = () => {
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [snowflakeOpacity, setSnowflakeOpacity] = useState(0.8);

  useEffect(() => {
    // Snowflake opacity animation
    const interval = setInterval(() => {
      setSnowflakeOpacity(prev => prev === 0.8 ? 0.4 : 0.8);
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
    alert(`🎄 VIP Access Required for "${title}". Subscribe to unlock exclusive holiday content!`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon. 🎅✨");
  };

  const galleryItems = [
    {
      id: 1,
      title: "Winter Wonderland",
      description: "Sultry holiday moments in cozy winter settings",
      image: "linear-gradient(135deg, #2c5530, #0f3460)"
    },
    {
      id: 2,
      title: "Mistletoe Magic",
      description: "Intimate encounters under the mistletoe",
      image: "linear-gradient(135deg, #8B0000, #006400)"
    },
    {
      id: 3,
      title: "Naughty or Nice",
      description: "Playful Christmas-themed content",
      image: "linear-gradient(135deg, #B22222, #228B22)"
    },
    {
      id: 4,
      title: "Santa's Secret",
      description: "Exclusive behind-the-scenes holiday moments",
      image: "linear-gradient(135deg, #DC143C, #2F4F4F)"
    },
    {
      id: 5,
      title: "Golden Christmas",
      description: "Luxurious holiday elegance and glamour",
      image: "linear-gradient(135deg, #FFD700, #8B4513)"
    },
    {
      id: 6,
      title: "Snowy Seduction",
      description: "Sensual winter scenes and cozy moments",
      image: "linear-gradient(135deg, #4682B4, #708090)"
    }
  ];

  if (showAgeVerification) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-12 max-w-md mx-4 text-center">
          <div className="text-6xl mb-6">🎄</div>
          <h2 className="text-3xl font-bold text-white mb-4">Age Verification</h2>
          <p className="text-emerald-200 mb-8">This content is intended for adults only. Please confirm you are 18 or older.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAgeVerification(true)}
              className="bg-gradient-to-r from-emerald-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-red-600 transition-all duration-300 hover:-translate-y-1"
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-red-900 to-green-800 text-white font-sans overflow-x-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 text-emerald-400 animate-bounce opacity-60">🎄</div>
        <div className="absolute top-40 right-20 w-6 h-6 text-red-400 animate-pulse opacity-60">🎅</div>
        <div className="absolute bottom-40 left-40 w-10 h-10 text-gold-300 animate-spin opacity-50">⭐</div>
        <div className="absolute bottom-20 right-40 w-8 h-8 text-red-300 animate-bounce opacity-60">🎁</div>
        <div className="absolute top-60 left-60 w-6 h-6 text-emerald-400 animate-pulse opacity-50">❄️</div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 text-red-400 animate-spin opacity-40">🔔</div>
        
        {/* Floating Snowflakes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-emerald-400 rounded-full animate-float-reverse opacity-50"></div>
        <div className="absolute top-3/4 left-3/4 w-5 h-5 bg-red-400 rounded-full animate-float opacity-40"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
              Christmas Exclusive
            </div>
            <nav className="hidden md:flex space-x-8">
              {['hero', 'about', 'gallery', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-emerald-300 transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-red-400 to-gold-400 bg-clip-text text-transparent animate-gradient">
                  Naughty & Nice Christmas
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-200 leading-relaxed">
                Unwrap an exclusive collection of sultry holiday moments and intimate winter stories. Premium Christmas content crafted for those who've been very, very good.
              </p>
              <div className="flex gap-6">
                <button className="bg-gradient-to-r from-emerald-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-red-600 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                  🎄 Subscribe Now
                </button>
                <button className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-2">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-red-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                  🎅
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-emerald-200">Christmas Special</h3>
                  <p className="text-emerald-300 mt-2">Exclusive Holiday Collection</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
              About the Holiday Collection
            </h2>
            <p className="text-xl text-emerald-200 leading-relaxed mb-12">
              Welcome to a festive world where Christmas magic meets sophisticated sensuality. Our exclusive holiday collection features carefully curated content that celebrates the season's warmth, intimacy, and playful spirit. Each piece captures the essence of cozy winter nights and sultry holiday moments.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="text-4xl mb-4">🎄</div>
                <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                <p className="text-emerald-200">High-resolution, professionally captured holiday moments that tell stories of winter warmth and desire.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-semibold mb-4">Exclusive Access</h3>
                <p className="text-emerald-200">Members-only Christmas content updated throughout the season with new festive themes and scenarios.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="text-xl font-semibold mb-4">Winter Intimacy</h3>
                <p className="text-emerald-200">Custom holiday requests and personalized winter content for our VIP members seeking something special.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
            Holiday Gallery
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
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold" style={{ opacity: snowflakeOpacity }}>
                  🎄
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-emerald-200 mb-4">{item.description}</p>
                  <button className="bg-gradient-to-r from-emerald-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-emerald-600 hover:to-red-600 transition-all duration-300">
                    🎁 VIP Access
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
            VIP Holiday Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <Heart className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Holiday Sessions</h3>
              <p className="text-emerald-200">Intimate Christmas-themed photography sessions with festive winter backdrops.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <Gift className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
              <p className="text-emerald-200">Personalized Christmas content created just for you with your holiday fantasies in mind.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <div className="text-4xl mb-4">🎅</div>
              <h3 className="text-xl font-semibold mb-4">Premium Gallery</h3>
              <p className="text-emerald-200">Access to exclusive high-resolution holiday content updated throughout the season.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-3">
              <Sparkles className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">VIP Chat</h3>
              <p className="text-emerald-200">Direct messaging and personal interaction with exclusive members during the holidays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-emerald-200">christmas@holiday-exclusive.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-red-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-emerald-200">+1 (555) XMAS-FUN</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-emerald-200">North Pole, Winter Wonderland</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-emerald-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-red-600 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message 🎄
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
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
              Christmas Exclusive
            </div>
            <p className="text-emerald-200">Creating magical holiday moments and intimate winter connections</p>
            <div className="flex justify-center space-x-8">
              <Instagram className="w-8 h-8 text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors duration-300" />
              <Twitter className="w-8 h-8 text-red-400 hover:text-red-300 cursor-pointer transition-colors duration-300" />
              <Facebook className="w-8 h-8 text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors duration-300" />
            </div>
            <div className="border-t border-white border-opacity-20 pt-6 text-emerald-200">
              <p>&copy; 2025 Christmas Exclusive. All rights reserved. 🎄</p>
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

export default ChristmasCreator;