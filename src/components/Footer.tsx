import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
        <h2 className="text-[10vw] font-black text-zinc-900 leading-none select-none">M.WALI</h2>
        <div className="flex justify-center gap-8 mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            <span>Video Editing</span>
            <span>Motion Design</span>
            <span>Karachi, PK</span>
        </div>
        <p className="mt-8 text-[10px] text-zinc-700">© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
