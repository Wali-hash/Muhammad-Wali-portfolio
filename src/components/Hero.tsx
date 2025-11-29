import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      
      {/* Light glow at top for readability */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
        
        {/* Status Indicator */}
        <div className="flex justify-start mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Available for Job</span>
            </div>
        </div>

        {/* Main Title Block */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-2">
            MUHAMMAD WALI
          </h1>
          
          {/* Glitch Effect Title */}
          <div className="relative inline-block group cursor-default">
             <h2 className="relative z-10 text-[10vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600">
                VISUAL<br/>
                STORYTELLER
             </h2>
             {/* Glitch Layer 1 (Red) */}
             <h2 className="absolute top-0 left-0 z-0 text-[10vw] leading-[0.85] font-black tracking-tighter text-red-500 opacity-0 group-hover:opacity-70 animate-glitch-1 hidden md:block" style={{ transform: 'translate(-2px, 0)' }}>
                VISUAL<br/>
                STORYTELLER
             </h2>
             {/* Glitch Layer 2 (Cyan) */}
             <h2 className="absolute top-0 left-0 z-0 text-[10vw] leading-[0.85] font-black tracking-tighter text-cyan-500 opacity-0 group-hover:opacity-70 animate-glitch-2 hidden md:block" style={{ transform: 'translate(2px, 0)' }}>
                VISUAL<br/>
                STORYTELLER
             </h2>
          </div>
        </div>
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-8">
            <div className="md:col-span-6">
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                    Professional Video Editor & Motion Designer based in Pakistan. 
                    Specializing in commercial narratives, social content, and intricate motion graphics.
                </p>
            </div>
            
            <div className="md:col-span-3">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Core Focus</h3>
                <ul className="space-y-2 text-sm text-zinc-300 font-medium">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Video Editing</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>Motion Graphics</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white rounded-full"></span>AI Animation</li>
                </ul>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
                <div className="hidden md:block text-right mb-8">
                     <div className="text-5xl font-bold text-white tracking-tighter">{CONTACT_INFO.yearsExperience}+</div>
                     <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Years Experience</div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-5 h-8 border-2 border-zinc-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-1 bg-zinc-400 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
