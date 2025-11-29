import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] h-20 glass-nav flex items-center justify-end px-6 md:px-12 transition-all">
      {/* Actions */}
      <div className="flex items-center gap-6">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Wali311306@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-muted hover:text-white transition-colors group"
        >
          <span>Contact</span>
          <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <button 
          onClick={onOpenCV}
          className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          <span>View CV</span>
          <Download size={14} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
