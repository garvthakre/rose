import { useState, useEffect } from 'react';

const LewdWaifuUniverse = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [showDmPopup, setShowDmPopup] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cumCounter, setCumCounter] = useState(0);

  // Audio effects
  const playMoan = () => {
    new Audio('/sounds/moan.mp3').play().catch(e => console.log("Audio blocked:", e));
  };

  // Auto-show DM popup after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDmPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-900 to-pink-900 text-white overflow-x-hidden">
      {/* Pixel heart rain effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-pink-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
        <img 
          src="/images/hero-maid.jpg" 
          alt="Lewd Waifu" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-anime mb-6 text-pink-200 drop-shadow-lg">
            わたしをアンロックして...
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl mx-auto">
            Senpai... I'm leaking content <span className="text-pink-300">💦</span>
            <br />
            Are you brave enough to see what's under my tail?
          </p>
          <button 
            onClick={() => setUnlocked(true)}
            className="bg-pink-600 hover:bg-pink-500 text-2xl px-8 py-4 rounded-full font-bold animate-pulse shadow-lg hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            onMouseEnter={playMoan}
          >
            🔓 UNLOCK WAIFU MODE
          </button>
        </div>
      </section>

      {/* Main Content (only shown after unlock) */}
      {unlocked && (
        <div className="relative z-30 pb-20">
          {/* Navigation Buttons */}
          <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: '👅', text: 'Lewd Gallery Access' },
                { icon: '🖤', text: 'Audio Moans & Roleplays' },
                { icon: '🎀', text: 'Tip to Strip' },
                { icon: '🐾', text: 'Catgirl Cams & Teases' },
                { icon: '🎁', text: 'Spoil Me, Daddy' }
              ].map((btn, i) => (
                <button 
                  key={i}
                  className="bg-pink-700/70 hover:bg-pink-600/80 border-2 border-pink-400 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-900/50"
                  onMouseEnter={() => {
                    if(i % 2 === 0) playMoan();
                  }}
                >
                  <span className="text-3xl block mb-2">{btn.icon}</span>
                  <span className="font-bold">{btn.text}</span>
                </button>
              ))}
            </div>
          </section>

         <section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-anime mb-8 text-center">Exclusive Lewd Content</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {[
      {
        id: 1,
        caption: 'Maid With No Panties', 
        src: "/src/assets/girl-5864172_1280.jpg"
      },
      {
        id: 2,
        caption: 'Hentai Schoolgirl Bends Over', 
        src: "src/assets/pexels-andrea-musto-135941147-20425087.jpg"
      },
      {
        id: 3,
        caption: 'I  Moaned While Cosplaying Your Waifu',
        src: "/src/assets/pexels-caio-mantovani-97605853-13815186.jpg"
      },
      {
        id: 4,
        caption: 'Bunny Girl Tease', 
        src: "/src/assets/pexels-cottonbro-3778934.jpg"
      },
      {
        id: 5,
        caption: 'Succubus Temptation',
        src: "/src/assets/pexels-cottonbro-5645101.jpg"
      },
      {
        id: 6,
        caption: 'Neko Nip Slip', 
        src: "/src/assets/pexels-cottonbro-8732107.jpg"
      }
    ].map(item => (
      <div
        key={item.id}
        className="relative rounded-xl overflow-hidden aspect-square cursor-pointer group"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-4xl animate-bounce">🔓</div>
        </div>
        <img
          src={item.src}
          alt={item.caption}
          className={`w-full h-full object-cover transition-transform duration-300 ${hoveredItem === item.id ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="font-bold">{item.caption}</p>
        </div>
      </div>
    ))}
  </div>
</section>


          {/* Erotic Add-Ons */}
          <section className="container mx-auto px-4 py-12">
            <div className="bg-pink-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-md border border-pink-500/30">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-anime mb-4">Audio Moan Sample</h3>
                  <div 
                    className="bg-pink-800/50 rounded-xl p-6 cursor-pointer hover:bg-pink-700/60 transition-all duration-300 border border-pink-400/30"
                    onClick={playMoan}
                  >
                    <p className="italic mb-4">"I've been so bad today, master... punish me~ <span className="text-pink-300">💢</span>"</p>
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">▶️</span>
                      <span>Click to hear me moan</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-anime mb-4">Countdown to Sin</h3>
                  <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-400/30">
                    <p className="text-xl mb-2">"3 hours until I post the dirtiest clip I've ever made <span className="text-pink-300">😈</span>"</p>
                    <div className="text-3xl font-bold text-center py-4 font-mono">
                      02:59:47
                    </div>
                  </div>
                </div>
              </div>

              {/* Wishlist Strip */}
              <div className="mt-8 bg-black/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-anime mb-2">Wishlist Strip</h3>
                <p className="mb-4">"Buy me a toy. I'll show you how I use it <span className="text-pink-300">😽</span>"</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Vibrating Plug', price: '$35' },
                    { name: 'Bunny Tail', price: '$25' },
                    { name: 'Nipple Clamps', price: '$18' },
                    { name: 'Custom Video', price: '$50' }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="bg-pink-800/40 hover:bg-pink-700/50 rounded-lg p-3 text-center cursor-pointer transition-all duration-300 border border-pink-400/20 hover:border-pink-400/50"
                      onClick={() => setCumCounter(prev => prev + 1)}
                    >
                      <p className="font-bold">{item.name}</p>
                      <p className="text-pink-200">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-anime mb-6 text-center">About Your Lewd Waifu</h2>
              <p className="text-lg mb-6">
                I'm your personal hentai dream with real lips, real thighs, and a filthy little mind. 
                I dress up like your favorite anime girl and make her do the nastiest things you never thought you'd see.
              </p>
              <p className="text-lg">
                When I'm not being a total slut for my fans, I enjoy playing video games, eating snacks, and coming up with 
                even more depraved content ideas to make you cum. Your pleasure is my obsession, senpai~
              </p>
            </div>
          </section>

          {/* Cum Counter */}
          <section className="container mx-auto px-4 py-12 text-center">
            <div className="inline-block bg-pink-800/50 rounded-full px-8 py-4 border-2 border-pink-400">
              <h3 className="font-anime text-2xl mb-2">Total Loads for Me</h3>
              <div className="text-5xl font-bold">{cumCounter.toLocaleString()}</div>
              <p className="mt-2 text-pink-200">How many times have you cum to me, senpai?</p>
              <button 
                className="mt-4 bg-pink-600 hover:bg-pink-500 px-6 py-2 rounded-full text-sm font-bold"
                onClick={() => setCumCounter(prev => prev + 1)}
              >
                +1 Nut Added
              </button>
            </div>
          </section>
        </div>
      )}

      {/* DM Tease Popup */}
      {showDmPopup && (
        <div className="fixed bottom-6 right-6 z-50 bg-pink-700/90 backdrop-blur-md rounded-xl p-5 shadow-xl border-2 border-pink-400 max-w-xs animate-bounce">
          <button 
            className="absolute top-2 right-2 text-white/70 hover:text-white"
            onClick={() => setShowDmPopup(false)}
          >
            ✕
          </button>
          <p className="font-anime text-lg mb-3">
            Nyaa~ You've been staring too long...
          </p>
          <p className="mb-4">
            Want me to send you something wet?
          </p>
          <div className="flex gap-2">
            <button 
              className="flex-1 bg-pink-800 hover:bg-pink-600 py-2 rounded-lg font-bold transition-colors"
              onClick={() => {
                playMoan();
                setShowDmPopup(false);
              }}
            >
              Yes please!
            </button>
            <button 
              className="flex-1 bg-black/40 hover:bg-black/60 py-2 rounded-lg transition-colors"
              onClick={() => setShowDmPopup(false)}
            >
              Later~
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LewdWaifuUniverse;