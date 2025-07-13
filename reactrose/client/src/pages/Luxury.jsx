import React, { useState, useEffect } from 'react';
import { Play, Pause, Star, Lock, Camera, Heart, Gift, Phone, Mail, Instagram, Twitter, Crown } from 'lucide-react';

const LuxuryCreatorWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const NavButton = ({ icon: Icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        active 
          ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black' 
          : 'text-amber-300 hover:bg-amber-900/30'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const PremiumButton = ({ children, className = "" }) => (
    <button className={`bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-3 rounded-lg font-bold tracking-wide hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${className}`}>
      {children}
    </button>
  );

  const GalleryItem = ({ title, isLocked = false }) => (
    <div className="relative group cursor-pointer">
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-amber-900/20 to-rose-900/20 flex items-center justify-center">
          {isLocked ? (
            <Lock className="text-amber-400" size={32} />
          ) : (
            <Camera className="text-amber-400" size={32} />
          )}
        </div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-semibold">{title}</span>
        </div>
      </div>
    </div>
  );

  const TestimonialCard = ({ text, author }) => (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-amber-500/20">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-amber-400 fill-current" size={16} />
        ))}
      </div>
      <p className="text-gray-300 italic mb-4">"{text}"</p>
      <p className="text-amber-400 font-semibold">- {author}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10 z-0"></div>
      
      {/* Particles */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Crown className="text-amber-400" size={24} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                LUXE DESIRE
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <NavButton icon={Camera} label="Gallery" active={activeSection === 'gallery'} onClick={() => setActiveSection('gallery')} />
              <NavButton icon={Star} label="Premium" active={activeSection === 'exclusive'} onClick={() => setActiveSection('exclusive')} />
              <NavButton icon={Gift} label="Packages" active={activeSection === 'packages'} onClick={() => setActiveSection('packages')} />
              <NavButton icon={Phone} label="Connect" active={activeSection === 'contact'} onClick={() => setActiveSection('contact')} />
            </div>

            <button
              onClick={toggleMusic}
              className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4 text-center">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Indulge in Seduction. Experience Desire.
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Enter a world of intimate fantasies and raw pleasure. Every click brings you closer.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <PremiumButton>
                  <Lock className="inline mr-2" size={20} />
                  Unlock Me
                </PremiumButton>
                <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-bold tracking-wide hover:bg-amber-400 hover:text-black transition-all duration-300">
                  Peek the Gallery
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-serif font-bold text-center mb-12 text-amber-400">
              Tease & Tempt
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <GalleryItem title="Silk & Shadows" />
              <GalleryItem title="Latex Dreams" />
              <GalleryItem title="Lingerie Confessions" isLocked />
              <GalleryItem title="Private Boudoir" isLocked />
              <GalleryItem title="Velvet Nights" />
              <GalleryItem title="Touch Tease" />
              <GalleryItem title="Whispers Uncut" isLocked />
              <GalleryItem title="Raw Fantasy" isLocked />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-serif font-bold mb-8 text-amber-400">
                The Fantasy
              </h3>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                This isn’t just adult content—it’s a journey into indulgence. A sensual connection tailored only for you.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-500/20">
                  <Star className="text-amber-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-4 text-amber-400">Erotic Excellence</h4>
                  <p className="text-gray-300">Flawlessly captured seduction in every shoot.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-500/20">
                  <Crown className="text-amber-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-4 text-amber-400">Private Pleasure</h4>
                  <p className="text-gray-300">One-on-one content crafted just for your cravings.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-500/20">
                  <Heart className="text-amber-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-4 text-amber-400">Personal Connection</h4>
                  <p className="text-gray-300">Get closer than ever. Feel seen, wanted, and touched.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-serif font-bold text-center mb-12 text-amber-400">
              Exclusive Experiences
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-500/20 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-4 text-amber-400">Gold Lust</h4>
                <p className="text-3xl font-bold mb-6 text-white">$299<span className="text-lg text-gray-400">/month</span></p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• Sensual gallery access</li>
                  <li>• Weekly naughty drops</li>
                  <li>• Private messages</li>
                  <li>• Teasing BTS access</li>
                </ul>
                <PremiumButton className="w-full">Choose Gold</PremiumButton>
              </div>
              
              <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 p-8 rounded-lg border-2 border-amber-400 transform hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  HOTTEST
                </div>
                <h4 className="text-2xl font-bold mb-4 text-amber-400">Platinum Obsession</h4>
                <p className="text-3xl font-bold mb-6 text-white">$699<span className="text-lg text-gray-400">/month</span></p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• All Gold perks</li>
                  <li>• Custom videos & photos</li>
                  <li>• Monthly video calls</li>
                  <li>• Erotic wishlist access</li>
                  <li>• Private invites</li>
                </ul>
                <PremiumButton className="w-full">Choose Platinum</PremiumButton>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-500/20 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-4 text-amber-400">Diamond Addiction</h4>
                <p className="text-3xl font-bold mb-6 text-white">$1299<span className="text-lg text-gray-400">/month</span></p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• All Platinum access</li>
                  <li>• Weekly intimate calls</li>
                  <li>• Personalized photo shoots</li>
                  <li>• Erotic gifts</li>
                  <li>• 1-on-1 mentorship</li>
                </ul>
                <PremiumButton className="w-full">Choose Diamond</PremiumButton>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-serif font-bold text-center mb-12 text-amber-400">
              What They Crave
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                text="Every look, every moan feels like it's just for me... I can’t stop watching."
                author="VIP Fan R."
              />
              <TestimonialCard
                text="She’s more than hot—she’s addictive. Every session leaves me wanting more."
                author="Loyal Sub N."
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-4xl font-serif font-bold mb-8 text-amber-400">
                Ready to Play?
              </h3>
              <p className="text-xl text-gray-300 mb-12">
                Let’s get intimate. Apply now and let the fantasy begin.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <PremiumButton>
                  <Mail className="inline mr-2" size={20} />
                  Claim Access
                </PremiumButton>
                <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-bold tracking-wide hover:bg-amber-400 hover:text-black transition-all duration-300">
                  <Phone className="inline mr-2" size={20} />
                  Book Intimate Call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-amber-500/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Crown className="text-amber-400" size={24} />
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  LUXE DESIRE
                </span>
              </div>
              <div className="flex space-x-4">
                <Instagram className="text-amber-400 hover:text-amber-300 cursor-pointer" size={24} />
                <Twitter className="text-amber-400 hover:text-amber-300 cursor-pointer" size={24} />
                <Mail className="text-amber-400 hover:text-amber-300 cursor-pointer" size={24} />
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>© 2025 Luxe Desire. Adult content crafted for premium pleasure.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LuxuryCreatorWebsite;
