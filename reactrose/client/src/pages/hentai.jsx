import { useState, useEffect } from 'react';

export default function Hentai() {
  const [unlocked, setUnlocked] = useState(false);
  const [showDMPopup, setShowDMPopup] = useState(false);
  const [moanPlayed, setMoanPlayed] = useState(false);

  // Play moan sound on hover (once per session)
  const playHoverSound = () => {
    if (!moanPlayed) {
      // In a real implementation, you'd play a subtle sound here
      setMoanPlayed(true);
    }
  };

  // Sakura petals effect
  useEffect(() => {
    if (unlocked) {
      // Initialize sakura petals animation
    }
  }, [unlocked]);

  const previews = [
    { id: 1, title: 'Neko Maid Gone Wild', tags: ['maid', 'catgirl', 'nsfw'] },
    { id: 2, title: 'Bunny Girl Dommy GF', tags: ['bunny', 'dominant', 'cosplay'] },
    { id: 3, title: 'Velma But She\'s a Brat', tags: ['scooby-doo', 'bratty', 'hentai'] },
    { id: 4, title: 'Succubus Sleepover', tags: ['demon', 'seductive', 'fantasy'] },
    { id: 5, title: 'Schoolgirl Tease', tags: ['uniform', 'innocent', 'lewd'] },
    { id: 6, title: 'Oniichan Please~', tags: ['imouto', 'taboo', 'ecchi'] },
  ];

  const tiers = [
    { price: 5, title: "Pet the Catgirl", emoji: "🐾", desc: "A cute thank you message with a tease" },
    { price: 25, title: "NSFW Tease", emoji: "🎧", desc: "Exclusive audio clip sent to your DMs" },
    { price: 69, title: "Hentai Clip Drop", emoji: "🍆", desc: "Lewd 1-minute custom clip" },
    { price: 100, title: "Custom Cosplay Request", emoji: "🎮", desc: "Full set of your fantasy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 text-white overflow-hidden relative">
      {/* Floating effects */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Sakura petals - only visible after unlock */}
        {unlocked && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-300 text-2xl animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              >
                {i % 2 === 0 ? '🌸' : '💮'}
              </div>
            ))}
          </div>
        )}
        
        {/* Floating sparkles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-200 text-sm animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ✧
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          {/* Blurred anime collage background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/30 to-blue-500/20 backdrop-blur-sm"></div>
          
          {/* Sparkle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/10 to-transparent animate-pulse"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            {/* Japanese subtitle */}
            <div className="text-pink-300 text-lg mb-4 font-light tracking-wide">
              わたしをアンロックして…
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {unlocked ? 'Welcome, Senpai~' : 'Your Lewd Waifu Has Logged In'}
              💦
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 text-pink-200">
              {unlocked ? 'I\'ve been waiting for you...' : 'Ready to unlock your favorite fantasy?'}
            </p>
            
            {/* CTA Button */}
            {!unlocked && (
              <button
                onClick={() => setUnlocked(true)}
                onMouseEnter={playHoverSound}
                className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-4 px-8 rounded-full text-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 animate-pulse"
              >
                🔓 Unlock Lewd Mode
              </button>
            )}
          </div>
          
          {/* Floating hearts animation */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 text-4xl text-pink-400 animate-bounce" style={{ animationDelay: '0s' }}>💖</div>
            <div className="absolute top-40 right-20 text-3xl text-pink-300 animate-bounce" style={{ animationDelay: '1s' }}>💗</div>
            <div className="absolute bottom-32 left-1/4 text-5xl text-pink-500 animate-bounce" style={{ animationDelay: '2s' }}>💓</div>
          </div>
        </div>

        {/* Preview Grid */}
        {unlocked && (
          <div className="py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Your Lewd Collection Awaits...
            </h2>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previews.map((preview) => (
                <div
                  key={preview.id}
                  className="relative bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onMouseEnter={playHoverSound}
                >
                  {/* Blurred preview image */}
                  <div className="aspect-video bg-gradient-to-br from-pink-500/30 to-purple-500/30 relative">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      {/* Lock icon */}
                      <div className="text-center">
                        <div className="text-6xl mb-2">🔒</div>
                        <div className="text-sm font-semibold">{preview.title}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-lg font-bold mb-2">{preview.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {preview.tags.map((tag, index) => (
                          <span key={index} className="bg-pink-600/50 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-pink-200">
                        Unlock for 5 Tokens
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {unlocked && (
          <div className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center">
                  <div className="text-8xl">🌸</div>
                </div>
              </div>
              
              {/* Bio text */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  About Your Lewd Dream
                </h2>
                
                <p className="text-lg mb-8 text-pink-200 leading-relaxed">
                  "I'm your lewd little fantasy — soft voice, big thighs, and a closet full of cosplay. 
                  Wanna be my senpai? Just say 'nya' and tip. I specialize in bringing your anime 
                  fantasies to life, from innocent schoolgirl to seductive succubus. Let's make 
                  your wildest hentai dreams come true~"
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                    💌 OnlyLewds
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                    🎀 See My Hentai Set
                  </button>
                  <button className="bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                    👅 Lewd Audio Drops
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tip Menu */}
        {unlocked && (
          <div className="py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Spoil Your Waifu
            </h2>
            
            <p className="text-center text-pink-200 mb-12 text-lg">
              "P-please take care of me, senpai~"
            </p>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{tier.emoji}</div>
                  <h3 className="text-lg font-bold mb-2">
                    ${tier.price} — {tier.title}
                  </h3>
                  <p className="text-sm text-pink-200 mb-4">{tier.desc}</p>
                  <button
                    onClick={() => setShowDMPopup(true)}
                    className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-full transition-colors duration-300"
                  >
                    Select Tier
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* DM Popup */}
      {showDMPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-pink-900 to-purple-900 rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowDMPopup(false)}
              className="absolute top-4 right-4 text-pink-200 hover:text-white text-2xl"
            >
              ✕
            </button>
            
            <div className="text-center">
              <div className="text-6xl mb-4">😳</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-200">
                P-please... senpai...
              </h3>
              <p className="text-pink-200 mb-6">
                I need your tip to continue being your lewd waifu...
                <br />
                Where should I send your reward? 👉👈
              </p>
              
              <div className="space-y-4">
                <select className="w-full bg-purple-800 text-white p-3 rounded-lg border border-pink-500">
                  <option>Select your tier...</option>
                  <option>$5 — Pet the Catgirl 🐾</option>
                  <option>$25 — NSFW Tease 🎧</option>
                  <option>$69 — Hentai Clip Drop 🍆</option>
                  <option>$100+ — Custom Cosplay Request 🎮</option>
                </select>
                <button className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-full transition-colors duration-300">
                  Send Lewd Request 💌
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}