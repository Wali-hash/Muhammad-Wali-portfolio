import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS, DROPBOX_FOLDERS } from '../constants';
import { VideoCategory, VideoProject } from '../types';
import { X, ArrowRight, AlertCircle, Play, Layers, Scissors, Cpu } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const categories = Object.values(VideoCategory);

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 relative z-10 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                  Selected <span className="text-zinc-700">Works</span>
              </h2>
            </div>
            
            {/* Minimalist Tabs */}
            <div className="flex flex-wrap gap-1">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        activeCategory === 'All' 
                        ? 'bg-white text-black' 
                        : 'text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10'
                    }`}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat as any)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                            activeCategory === cat 
                            ? 'bg-white text-black' 
                            : 'text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((project, idx) => (
                <VideoCard 
                    key={project.id} 
                    project={project} 
                    index={idx}
                    onClick={() => setSelectedProject(project)} 
                />
            ))}
        </div>

        {/* Archive Link */}
        {activeCategory !== 'All' && DROPBOX_FOLDERS[activeCategory] && (
             <div className="mt-20 flex justify-center">
                <a 
                    href={DROPBOX_FOLDERS[activeCategory]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 text-sm font-bold text-white uppercase tracking-widest hover:text-zinc-300 transition-colors border border-white/20 px-8 py-4 rounded-full hover:bg-white/5"
                >
                    <span>View Full {activeCategory} Archive</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

// --- Sub Components ---

const GeneratedThumbnail: React.FC<{ category: VideoCategory; title: string }> = ({ category, title }) => {
    // Determine visuals based on category
    const getVisuals = () => {
        switch(category) {
            case VideoCategory.AI_ANIMATION:
                return {
                    bg: 'bg-indigo-950',
                    accent: 'text-indigo-500/20',
                    icon: <Cpu className="w-full h-full opacity-20" />,
                    pattern: (
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(99,102,241,0.3)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/30 blur-[100px] rounded-full"></div>
                        </div>
                    )
                };
            case VideoCategory.VIDEO_EDITING:
                return {
                    bg: 'bg-slate-950',
                    accent: 'text-cyan-500/20',
                    icon: <Scissors className="w-full h-full opacity-20" />,
                    pattern: (
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 flex justify-between transform -skew-x-12 scale-110">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-16 h-full border-r border-cyan-500/10 bg-cyan-500/5"></div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/30 blur-[100px] rounded-full"></div>
                        </div>
                    )
                };
            case VideoCategory.MOTION_GRAPHICS:
                return {
                    bg: 'bg-rose-950',
                    accent: 'text-rose-500/20',
                    icon: <Layers className="w-full h-full opacity-20" />,
                    pattern: (
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-2 border-rose-500/20 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-2 border-rose-500/20 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border-2 border-rose-500/20 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-600/30 blur-[100px] rounded-full"></div>
                        </div>
                    )
                };
            default:
                return {
                    bg: 'bg-zinc-950',
                    accent: 'text-zinc-500/20',
                    icon: <Layers className="w-full h-full opacity-20" />,
                    pattern: null
                };
        }
    };

    const visuals = getVisuals();

    return (
        <div className={`absolute inset-0 ${visuals.bg} flex items-center justify-center overflow-hidden`}>
            {/* Pattern Layer */}
            {visuals.pattern}
            
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
            
            {/* Central Icon Watermark */}
            <div className={`w-32 h-32 ${visuals.accent} transform rotate-12`}>
                {visuals.icon}
            </div>

            {/* Gradient Overlay for Text Readability - Increased opacity to prevent overlap issues */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
    );
};

const VideoCard: React.FC<{ project: VideoProject; onClick: () => void; index: number }> = ({ project, onClick, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div 
            onClick={onClick}
            className="group relative aspect-[16/9] bg-[#0f0f0f] overflow-hidden cursor-pointer rounded-sm border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* 1. Procedural Generated Thumbnail (Fallback/Base) */}
            <GeneratedThumbnail category={project.category} title={project.title} />

            {/* 2. Real Image (if available) - Fades in on load */}
            {project.thumbnailSrc && (
                 <img 
                    src={project.thumbnailSrc} 
                    alt={project.title} 
                    onLoad={() => setImageLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 grayscale group-hover:grayscale-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            )}

            {/* 3. Hover Interaction Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>

            {/* 4. Content Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                
                {/* Top Meta */}
                <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-2 py-1 backdrop-blur-sm bg-black/20">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 scale-90 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <Play size={16} fill="currentColor" />
                    </div>
                </div>

                {/* Bottom Title */}
                <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2 opacity-80">
                        <div className={`w-1.5 h-1.5 rounded-full bg-white`}></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-none tracking-tight break-words max-w-[95%] drop-shadow-lg">
                        {project.title.replace('Showcase', '')}
                    </h3>
                </div>
            </div>
        </div>
    );
};

const VideoModal: React.FC<{ project: VideoProject; onClose: () => void }> = ({ project, onClose }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videoSrc, setVideoSrc] = useState<string>('');
    const [isDrive, setIsDrive] = useState(false);

    useEffect(() => {
        let src = project.videoSrc;
        
        if (src.includes('dropbox.com')) {
            // Convert dropbox link to direct stream
            src = src.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
            setIsDrive(false);
        } else if (src.includes('drive.google.com')) {
            // Google Drive Logic
            const id = src.match(/\/d\/(.+?)\//)?.[1] || src.match(/id=(.+?)(&|$)/)?.[1];
            if (id) src = `https://drive.google.com/file/d/${id}/preview`;
            setIsDrive(true);
        }
        setVideoSrc(src);
        
        // Timeout check to prevent infinite loading
        const timer = setTimeout(() => { if (loading) setLoading(false); }, 8000);
        return () => clearTimeout(timer);
    }, [project, loading]);

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4 md:p-8 cursor-pointer"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-7xl flex flex-col h-full max-h-[90vh] cursor-default"
            >
                
                {/* Minimal Header */}
                <div className="flex items-center justify-between mb-4 shrink-0">
                    <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{project.title}</h3>
                    <button 
                        onClick={onClose}
                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-zinc-300 transition-colors uppercase tracking-widest"
                    >
                        Close <X size={18} />
                    </button>
                </div>

                {/* Player Container */}
                <div className="relative flex-1 bg-zinc-900 overflow-hidden border border-white/10 shadow-2xl rounded-sm flex items-center justify-center group">
                    {/* Click backdrop to close area - invisible but ensures clicks outside video close */}
                    <div className="absolute inset-0" onClick={onClose} />
                    
                    {loading && !error && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                            <div className="w-12 h-12 border-2 border-white/20 border-t-white animate-spin rounded-full"></div>
                        </div>
                    )}
                    
                    {error ? (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 bg-zinc-900 pointer-events-auto">
                            <AlertCircle className="w-12 h-12 text-zinc-500 mb-4" />
                            <p className="text-zinc-400 mb-6 font-medium">Video Preview Unavailable</p>
                            <a 
                                href={project.videoSrc}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-full"
                            >
                                Watch on {isDrive ? 'Google Drive' : 'External Player'}
                            </a>
                        </div>
                    ) : (
                         isDrive ? (
                            <iframe 
                                src={videoSrc}
                                className={`relative z-10 w-full h-full ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 pointer-events-auto`}
                                allow="autoplay; encrypted-media; fullscreen"
                                allowFullScreen
                                onLoad={() => setLoading(false)}
                                onError={() => setError(true)}
                            />
                        ) : (
                            <video 
                                src={videoSrc}
                                className={`relative z-10 max-h-full max-w-full w-auto h-auto object-contain ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 pointer-events-auto shadow-2xl`}
                                controls
                                autoPlay
                                playsInline
                                onLoadedData={() => setLoading(false)}
                                onError={() => { setLoading(false); setError(true); }}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
