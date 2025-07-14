import React, { useState, useEffect } from 'react';
import { Heart, Star, MessageCircle, Eye, ArrowRight, Check, Moon, Sun, Menu, X, Sparkles, Zap, Shield, Crown } from 'lucide-react';

const CreatorPortfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const themes = [
    {
      name: "Sexy Birthday Drop",
      emoji: "🥵",
      tagline: "For fans who pay to play",
      color: "from-pink-500 to-rose-600",
      preview: "bg-gradient-to-br from-pink-400 via-rose-500 to-red-500",
      accent: "pink"
    },
    {
      name: "Girly / Pastel",
      emoji: "🍰",
      tagline: "Sweet but spicy",
      color: "from-purple-400 to-pink-400",
      preview: "bg-gradient-to-br from-purple-300 via-pink-300 to-rose-300",
      accent: "purple"
    },
    {
      name: "MILF / Luxury Seductress",
      emoji: "💄",
      tagline: "Sophistication meets seduction",
      color: "from-red-600 to-rose-800",
      preview: "bg-gradient-to-br from-red-500 via-rose-700 to-red-800",
      accent: "red"
    },
    {
      name: "Anime Cosplay / Waifu",
      emoji: "👾",
      tagline: "Your favorite fantasy",
      color: "from-blue-500 to-purple-600",
      preview: "bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600",
      accent: "blue"
    },
    {
      name: "Halloween / Seasonal",
      emoji: "🎃",
      tagline: "Spooky and seductive",
      color: "from-orange-500 to-red-600",
      preview: "bg-gradient-to-br from-orange-400 via-red-500 to-orange-600",
      accent: "orange"
    },
    {
      name: "Premium Seller / High Ticket",
      emoji: "💎",
      tagline: "Luxury that converts",
      color: "from-yellow-400 to-orange-500",
      preview: "bg-gradient-to-br from-yellow-300 via-orange-400 to-amber-500",
      accent: "yellow"
    },
    {
      name: "Dark Mode / After Hours",
      emoji: "🔐",
      tagline: "Mysterious and magnetic",
      color: "from-gray-800 to-black",
      preview: "bg-gradient-to-br from-gray-700 via-gray-800 to-black",
      accent: "gray"
    },
    {
      name: "New Year's Eve Fantasy",
      emoji: "🥂",
      tagline: "Champagne dreams",
      color: "from-yellow-300 to-amber-500",
      preview: "bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-500",
      accent: "amber"
    }
  ];

  const packages = [
    {
      name: "Starter",
      emoji: "🌿",
      price: "$150",
      originalPrice: "$250",
      features: ["Custom design", "Mobile responsive", "Basic SEO optimization", "1 revision included", "2-week delivery", "Basic analytics"],
      highlight: false
    },
    {
      name: "Pro",
      emoji: "🌼",
      price: "$350",
      originalPrice: "$500",
      features: ["Everything in Starter", "Advanced animations", "Contact forms", "Social media integration", "3 revisions included", "1-week delivery", "Priority support"],
      highlight: true,
      popular: true
    },
    {
      name: "Premium Seller",
      emoji: "👑",
      price: "$750+",
      originalPrice: "$1200",
      features: ["Everything in Pro", "E-commerce integration", "Age verification system", "Advanced analytics", "Email marketing setup", "Unlimited revisions", "48hr delivery", "Personal brand consultant"],
      highlight: false
    }
  ];

  const testimonials = [
    {
      text: "Garv turned my basic link into a full-on brand empire. I booked 2x more fans in just one week and the conversions are insane.",
      author: "@bunnie.xxx",
      rating: 5,
      avatar: "bg-gradient-to-br from-pink-400 to-rose-500"
    },
    {
      text: "The site is absolutely gorgeous and sexy AF. My fans are obsessed with it, and honestly, so am I. Worth every penny.",
      author: "@mistressvyx",
      rating: 5,
      avatar: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      text: "Finally a developer who truly gets what creators need. Professional, discreet, and delivers beyond expectations.",
      author: "@anime_goddess",
      rating: 5,
      avatar: "bg-gradient-to-br from-blue-400 to-purple-500"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Built with privacy and security in mind"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Conversion Focused",
      description: "Designed to turn visitors into paying fans"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Luxury design that reflects your brand"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    console.log('Contact clicked');
  };

  const handleDemoClick = (themeName) => {
    console.log(`Demo clicked for ${themeName}`);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div className="w-2 h-2 bg-pink-500 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-pink-500/10' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'} border-b border-gray-200/50 dark:border-gray-700/50`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Garv Builds ✨
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['themes', 'pricing', 'testimonials', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="relative text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-all duration-300 group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-pink-100 hover:to-rose-100 dark:hover:from-pink-900/30 dark:hover:to-rose-900/30 transition-all duration-300 transform hover:scale-105"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-purple-600" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-pink-100 hover:to-rose-100 dark:hover:from-pink-900/30 dark:hover:to-rose-900/30 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {['themes', 'pricing', 'testimonials', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-purple-600/10 dark:from-pink-500/5 dark:via-rose-500/5 dark:to-purple-600/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i * 0.3)}s`
              }}
            >
              <div className="text-2xl opacity-20">✨</div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight animate-pulse">
              Custom Sites for Creators Who Deserve More 💋
            </h1>
            <p className="text-3xl md:text-4xl mb-8 text-gray-700 dark:text-gray-300 font-light animate-slide-up">
              Bolder. Hotter. <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent font-semibold">Fully Yours.</span>
            </p>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Transform your basic linktree into a stunning, conversion-focused website that makes your fans obsessed and your bank account happy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <button 
              onClick={() => scrollToSection('themes')}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3 text-lg">
                📸 View My Themes
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button 
              onClick={handleContactClick}
              className="group relative px-10 py-5 bg-transparent border-3 border-pink-500 text-pink-500 font-bold rounded-2xl hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative flex items-center justify-center gap-3 text-lg">
                💌 Message Me on Telegram
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Hey, I'm Garv 👋
            </h2>
            <div className="space-y-8 text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="animate-fade-in">
                I design <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent font-semibold">premium websites</span> for digital creators who want to stand out, sell more, and finally ditch the boring linktree.
              </p>
              <p className="animate-fade-in">
                I've built for all types of creators — from anime baddies to luxury dominatrixes. Every site I create is a <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent font-semibold">conversion machine</span> designed to turn visitors into paying fans.
              </p>
              <p className="animate-fade-in">
                Every theme I create is unique, mobile-friendly, and tailored to help you <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent font-semibold">grow your audience and income</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Theme Gallery */}
      <section id="themes" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Theme Gallery ✨
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Each theme is meticulously crafted to convert visitors into paying fans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {themes.map((theme, index) => (
              <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className={`h-56 ${theme.preview} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  <div className="absolute top-6 left-6 text-5xl drop-shadow-lg animate-bounce">
                    {theme.emoji}
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      Premium
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <button 
                      onClick={() => handleDemoClick(theme.name)}
                      className="px-6 py-3 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Eye className="w-4 h-4 inline mr-2" />
                      View Demo
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{theme.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{theme.tagline}</p>
                  <button 
                    onClick={() => handleDemoClick(theme.name)}
                    className={`w-full py-4 bg-gradient-to-r ${theme.color} text-white font-bold rounded-xl hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105`}
                  >
                    🔗 View Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-pink-50/30 to-rose-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Pricing That Pays For Itself 💰
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Investment in your brand that converts fans into loyal customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl ${pkg.popular ? 'ring-4 ring-pink-500 transform scale-105 bg-gradient-to-br from-white to-pink-50 dark:from-gray-900 dark:to-pink-900/20' : ''} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    ⚡ Most Popular
                  </div>
                )}
                <div className="text-center mb-10">
                  <div className="text-5xl mb-6 animate-bounce">
                    {pkg.emoji}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="text-5xl font-black text-pink-500">{pkg.price}</div>
                    <div className="text-xl text-gray-400 line-through">{pkg.originalPrice}</div>
                  </div>
                  <div className="text-sm text-green-600 font-semibold bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                    Save {Math.round(((parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>
                <ul className="space-y-5 mb-10">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleContactClick}
                  className={`w-full py-5 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg ${pkg.popular ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 shadow-lg hover:shadow-pink-500/40' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                >
                  Get Started Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              What Creators Are Saying 💕
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real results from real creators who transformed their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
                    {testimonial.author[1].toUpperCase()}
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-pink-500 font-semibold">
                      {testimonial.author}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white animate-pulse">
            Ready to stand out? ✨
          </h2>
          <p className="text-2xl md:text-3xl mb-16 text-white/90 max-w-4xl mx-auto">
            Let's build you something absolutely irresistible that converts like crazy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleContactClick}
              className="group px-12 py-6 bg-white text-pink-500 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-xl"
            >
              <span className="flex items-center justify-center gap-3">
                💌 DM Me on Telegram
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
            <button 
              onClick={handleContactClick}
              className="group px-12 py-6 bg-transparent border-3 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-xl"
            >
              <span className="flex items-center justify-center gap-3">
                📲 Drop Your Details
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-4xl font-black mb-6 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Sites by Garv ✨
            </div>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Premium websites that convert visitors into paying fans. Designed for creators who demand excellence.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <button 
                onClick={handleContactClick}
                className="group text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">📱</div>
                  <span className="text-sm font-semibold">Telegram</span>
                </div>
              </button>
              <button 
                onClick={handleContactClick}
                className="group text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">💬</div>
                  <span className="text-sm font-semibold">WhatsApp</span>
                </div>
              </button>
              <button 
                onClick={handleContactClick}
                className="group text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">✉️</div>
                  <span className="text-sm font-semibold">Email</span>
                </div>
              </button>
            </div>
            <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
              <p className="mb-4">© 2025 Sites by Garv. Designed for 18+ digital creators.</p>
              <p className="text-xs">All designs are custom-built and optimized for maximum conversion.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorPortfolio;