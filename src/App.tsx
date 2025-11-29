import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CV from './components/CV';

// Intro Preloader Component
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Short delay after 100%
          return 100;
        }
        // Randomize speed to mimic actual rendering
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-mono">
      <div className="w-64">
        <div className="flex justify-between items-end mb-2">
          <span className="text-zinc-500 text-xs tracking-widest uppercase">Initializing Portfolio</span>
          <span className="text-white text-xl font-bold">{Math.min(progress, 100)}%</span>
        </div>
        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-75 ease-out" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div className="mt-4 text-center">
            <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] animate-pulse">Rendering Visuals...</span>
        </div>
      </div>
    </div>
  );
};

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check what is being hovered
      const target = e.target as HTMLElement;
      
      // Check for buttons/links
      const isClickable = target.closest('button') || target.closest('a') || target.closest('[role="button"]');
      setIsHovering(!!isClickable);

      // Check for video cards specifically to change cursor text
      const isVideoCard = target.closest('.group.relative.aspect-\\[16\\/9\\]');
      setIsVideo(!!isVideoCard);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Don't render on mobile/touch devices usually, but for simplicity we rely on media query in index.html hiding default cursor
  return (
    <div 
      className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div 
        className={`
          rounded-full bg-white transition-all duration-300 ease-out flex items-center justify-center
          ${isHovering || isVideo ? 'scale-[2.5]' : 'scale-100'}
          ${isVideo ? 'w-20 h-20 opacity-100' : 'w-4 h-4 opacity-100'}
        `}
      >
        {isVideo && (
          <span className="text-[6px] font-black text-black tracking-widest">PLAY</span>
        )}
      </div>
      {/* Outer Ring */}
       <div 
        className={`
          absolute rounded-full border border-white transition-all duration-500 ease-out
          ${isHovering ? 'w-12 h-12 opacity-50' : 'w-8 h-8 opacity-20'}
        `}
        style={{
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%'
        }}
      ></div>
    </div>
  );
};

// Scroll Progress Bar
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div 
        className="h-full bg-gradient-to-r from-zinc-500 to-white origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
      ></div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'home' | 'cv'>('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate random particles for the background
  const [particles] = useState(() => Array.from({ length: 20 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 20,
    opacity: Math.random() * 0.3 + 0.1,
    size: Math.random() * 4 + 1
  })));

  // Generate static stars
  const [stars] = useState(() => Array.from({ length: 50 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2
  })));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 relative overflow-hidden">
        
        <CustomCursor />
        <ScrollProgress />
        
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Global Animated Background - Motion Graphics Space */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
            
            {/* 1. Deep Void Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a]"></div>

            {/* 2. Digital Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* 3. Rising Particles (Dust Motes) */}
            {particles.map((p, i) => (
                <div 
                    key={`p-${i}`}
                    className="absolute bg-white rounded-full animate-float-up"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`
                    }}
                ></div>
            ))}

            {/* 4. Twinkling Stars */}
            {stars.map((s, i) => (
                <div
                    key={`s-${i}`}
                    className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        opacity: s.opacity,
                        animationDelay: `${s.delay}s`
                    }}
                ></div>
            ))}
            
            {/* 5. Mouse Spotlight */}
            <div 
                className="absolute w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[120px] transition-transform duration-75 ease-out mix-blend-overlay"
                style={{ 
                    transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
                }}
            ></div>

             {/* 6. Cinematic Noise Texture */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150 mix-blend-overlay"></div>
             
             {/* 7. Vignette for Focus */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
        </div>

        {/* Content */}
        {!loading && (
            <div className="relative z-10 animate-fade-in">
                {view === 'cv' ? (
                    <CV onBack={() => setView('home')} />
                ) : (
                    <>
                        <Navbar onOpenCV={() => setView('cv')} />
                        <main>
                            <Hero />
                            <Portfolio />
                            <Experience />
                            <Skills />
                        </main>
                        <Footer />
                    </>
                )}
            </div>
        )}
    </div>
  );
}

export default App;
