import React, { useState, useEffect } from 'react';
import { Heart, Lock, Gift, MessageCircle, Camera, Star, Clock } from 'lucide-react';

const FloatingSparkles = () => {
  const sparkles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ));
  
  return <div className="fixed inset-0 pointer-events-none z-10">{sparkles}</div>;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
      <h3 className="text-yellow-400 font-serif text-xl mb-4 text-center tracking-wider">
        TIME LEFT TO BE MY FIRST IN 2025...
      </h3>
      <div className="flex justify-center gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-red-900/50 rounded-lg p-3 min-w-[60px]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-yellow-400 text-sm mt-1">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-red-900/50 rounded-lg p-3 min-w-[60px]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-yellow-400 text-sm mt-1">MINS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white bg-red-900/50 rounded-lg p-3 min-w-[60px]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-yellow-400 text-sm mt-1">SECS</div>
        </div>
      </div>
    </div>
  );
};

const PulsingButton = ({ children, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative overflow-hidden
      bg-gradient-to-r from-red-600 to-red-700
      hover:from-red-500 hover:to-red-600
      text-white font-bold py-4 px-8 rounded-full
      transition-all duration-300 transform hover:scale-105
      shadow-lg shadow-red-500/30
      animate-pulse
      ${className}
    `}
  >
    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
    <span className="relative z-10">{children}</span>
  </button>
);

const GalleryCard = ({ title, locked = true, premium = false }) => (
  <div className="relative group cursor-pointer">
    <div className="aspect-square bg-gradient-to-br from-red-900/50 to-black/70 rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300">
      <div className="absolute inset-0 bg-black/60 rounded-2xl backdrop-blur-sm"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        {locked ? (
          <Lock className="w-8 h-8 text-yellow-400 mb-3 animate-pulse" />
        ) : (
          <Camera className="w-8 h-8 text-yellow-400 mb-3" />
        )}
        <h3 className="text-white font-serif text-sm font-bold mb-2 tracking-wide">
          {title}
        </h3>
        {premium && (
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star className="w-3 h-3" />
            <span>PREMIUM</span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
);

const TipMenuItem = ({ price, description, icon }) => (
  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group cursor-pointer">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <div className="text-white font-semibold">{description}</div>
          <div className="text-yellow-400 font-bold text-lg">${price}</div>
        </div>
      </div>
      <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 group-hover:scale-105 transform">
        TIP
      </button>
    </div>
  </div>
);

const PopupModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-red-900/90 to-black/90 rounded-2xl p-6 max-w-md w-full border border-yellow-500/30">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-yellow-400 font-serif text-xl font-bold tracking-wider">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-400 transition-colors"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function NYECreatorSite() {
  const [showDMPopup, setShowDMPopup] = useState(false);
  const [showAccessPass, setShowAccessPass] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDMPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-yellow-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
      </div>

      <FloatingSparkles />

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
              THE BALL'S DROPPING...
            </span>
          </h1>
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-8 text-white">
            Want Me To?
          </h2>
          <p className="text-yellow-400 text-lg md:text-xl mb-12 font-light italic tracking-wide">
            "One night. One kiss. One unforgettable sin."
          </p>
          <PulsingButton className="text-xl px-12 py-6">
            💋 Enter My Suite
          </PulsingButton>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PulsingButton className="w-full">
              🎁 Unwrap My Midnight Surprise
            </PulsingButton>
            <PulsingButton className="w-full">
              🍾 Tip & Tease Me
            </PulsingButton>
            <PulsingButton className="w-full">
              👠 My Naughty Wishlist
            </PulsingButton>
            <PulsingButton className="w-full">
              📸 NYE Strip Countdown
            </PulsingButton>
            <PulsingButton className="w-full">
              💌 Private Confessions
            </PulsingButton>
            <PulsingButton 
              className="w-full"
              onClick={() => setShowAccessPass(true)}
            >
              🔥 Midnight Access Pass
            </PulsingButton>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <CountdownTimer />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider text-yellow-400">
            EXCLUSIVE GALLERY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <GalleryCard title="1 HOUR BEFORE MIDNIGHT" locked premium />
            <GalleryCard title="AFTER MIDNIGHT" locked premium />
            <GalleryCard title="HUNGOVER & HORNY" locked premium />
            <GalleryCard title="CHAMPAGNE SHOWER" locked />
            <GalleryCard title="SILK & LACE" locked />
            <GalleryCard title="MIDNIGHT KISS" locked premium />
          </div>
        </div>
      </section>

      {/* Tip Menu */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider text-yellow-400">
            CUSTOM TIP MENU
          </h2>
          <div className="space-y-4">
            <TipMenuItem price="10" description="Kiss at Midnight" icon="💋" />
            <TipMenuItem price="50" description="Private Toast" icon="🍸" />
            <TipMenuItem price="100" description="My First Moan of the Year" icon="🔥" />
            <TipMenuItem price="200" description="Silk Robe Reveal" icon="👘" />
            <TipMenuItem price="500" description="Private NYE Show" icon="💎" />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 tracking-wider text-yellow-400">
            ABOUT ME
          </h2>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
            <p className="text-lg md:text-xl leading-relaxed italic text-white">
              "At midnight, I'm yours. Champagne on my lips, heels on the floor, and secrets under silk. 
              I don't need resolutions — I need you."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-12 px-4 border-t border-yellow-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-yellow-400 text-sm tracking-wider">
            © 2025 • EXCLUSIVE CONTENT • 18+ ONLY
          </p>
        </div>
      </footer>

      {/* DM Popup */}
      <PopupModal
        isOpen={showDMPopup}
        onClose={() => setShowDMPopup(false)}
        title="💌 PRIVATE MESSAGE"
      >
        <div className="text-center">
          <p className="text-white mb-6 italic">
            "Don't spend NYE alone. I'm waiting with no panties and one wish."
          </p>
          <div className="space-y-3">
            <button className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-lg transition-colors">
              Send DM 💋
            </button>
            <button 
              className="w-full border border-yellow-500/50 hover:border-yellow-400 text-yellow-400 py-3 rounded-lg transition-colors"
              onClick={() => setShowDMPopup(false)}
            >
              Maybe Later
            </button>
          </div>
        </div>
      </PopupModal>

      {/* Access Pass Modal */}
      <PopupModal
        isOpen={showAccessPass}
        onClose={() => setShowAccessPass(false)}
        title="🔥 MIDNIGHT ACCESS PASS"
      >
        <div>
          <p className="text-white mb-4">
            Get exclusive access to my private NYE content and live shows.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Your email..."
              className="w-full bg-black/50 border border-yellow-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <button className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-lg transition-colors">
              Get Access Pass 🎫
            </button>
          </div>
        </div>
      </PopupModal>
    </div>
  );
}