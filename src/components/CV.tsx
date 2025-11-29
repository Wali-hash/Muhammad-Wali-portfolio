import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';

interface CVProps {
  onBack: () => void;
}

const CV: React.FC<CVProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-12 px-4 print:p-0 font-sans print:bg-white">
      <div className="max-w-[850px] mx-auto bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-12 shadow-2xl rounded-sm print:shadow-none print:p-0 print:bg-white print:border-none print:text-black">
        
        {/* Actions Bar (Hidden on Print) */}
        <div className="flex justify-between items-center mb-12 print:hidden">
            <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
            </button>
            <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg"
            >
                <Download size={14} /> Save as PDF
            </button>
        </div>

        {/* CV CONTENT */}
        <div className="space-y-8 text-zinc-300 print:text-gray-800">
            {/* Header */}
            <div className="text-center border-b border-white/10 print:border-gray-300 pb-8 mb-8">
                <h1 className="text-4xl font-bold text-white print:text-[#2c3e50] tracking-wider mb-2">MUHAMMAD WALI</h1>
                <div className="text-xl text-zinc-400 print:text-gray-600 mb-2 font-medium">Video Editor & 2D Animator</div>
                <div className="text-sm text-zinc-500 print:text-gray-500 font-medium tracking-wide">
                    Karachi, Pakistan | 0311 0306044 | Wali311306@gmail.com
                </div>
            </div>

            {/* Summary */}
            <section>
                <h2 className="text-xl font-bold text-white print:text-[#2c3e50] border-b border-white/10 print:border-[#3498db] pb-2 mb-4 uppercase tracking-widest text-xs">Professional Summary</h2>
                <p className="text-justify text-zinc-400 print:text-gray-600 leading-relaxed">
                    Skilled and creative Video Editor & 2D Animator with over 4 years of experience in producing engaging video content and motion graphics. Specializes in storytelling through social media videos, product animations, and promotional campaigns. Highly organized and able to manage multiple projects under tight deadlines.
                </p>
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-xl font-bold text-white print:text-[#2c3e50] border-b border-white/10 print:border-[#3498db] pb-2 mb-4 uppercase tracking-widest text-xs">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Adobe Premiere Pro, After Effects, Photoshop",
                        "Text Animation, Motion Graphics, Product Animation",
                        "Social Media Video Editing (Reels, Shorts, TikTok)",
                        "Basic Sound Design and Color Grading",
                        "Storytelling for E-commerce and Brand Promotion",
                        "Following Brand Guidelines with Creative Execution"
                    ].map((skill, i) => (
                        <div key={i} className="p-3 bg-white/5 print:bg-gray-50 border-l-2 border-zinc-500 print:border-[#3498db] text-sm text-zinc-300 print:text-gray-700">
                           {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section>
                <h2 className="text-xl font-bold text-white print:text-[#2c3e50] border-b border-white/10 print:border-[#3498db] pb-2 mb-4 uppercase tracking-widest text-xs">Professional Experience</h2>
                
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-white print:text-[#2c3e50]">Video Editor</h3>
                    <div className="text-zinc-400 print:text-[#3498db] font-bold text-sm my-1">Creative Riots</div>
                    <div className="text-zinc-500 print:text-gray-500 italic text-sm mb-3">September 2025 – November 2025</div>
                    <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 print:text-gray-600 text-sm marker:text-zinc-600">
                        <li>Edited promotional, educational, and social media videos for various clients</li>
                        <li>Produced engaging content aligned with brand identity and marketing objectives</li>
                        <li>Managed complete post-production workflow including audio syncing and color grading</li>
                        <li>Delivered high-quality video content under tight deadlines</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-bold text-white print:text-[#2c3e50]">Junior Animator</h3>
                    <div className="text-zinc-400 print:text-[#3498db] font-bold text-sm my-1">Kids Madani Channel</div>
                    <div className="text-zinc-500 print:text-gray-500 italic text-sm mb-3">September 2021 – August 2025</div>
                    <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 print:text-gray-600 text-sm marker:text-zinc-600">
                        <li>Created 2D animations and motion graphics for children's educational content</li>
                        <li>Developed text animations, product animations, and engaging visual effects</li>
                        <li>Collaborated with creative teams to produce content that resonated with young audiences</li>
                        <li>Handled complete animation process from concept to final delivery</li>
                        <li>Organized and managed raw footage and project files efficiently</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-xl font-bold text-white print:text-[#2c3e50] border-b border-white/10 print:border-[#3498db] pb-2 mb-4 uppercase tracking-widest text-xs">Education</h2>
                <div className="mb-2 text-zinc-400 print:text-gray-600 text-sm">
                    <strong className="text-white print:text-[#2c3e50]">Intermediate</strong> – Board of Intermediate Education Karachi
                </div>
                <div className="mb-2 text-zinc-400 print:text-gray-600 text-sm">
                    <strong className="text-white print:text-[#2c3e50]">Darsay Nizami</strong> – Jamia-tul-Madina, Faizan-e-Madina, Karachi
                </div>
            </section>

             {/* Certifications */}
             <section>
                <h2 className="text-xl font-bold text-white print:text-[#2c3e50] border-b border-white/10 print:border-[#3498db] pb-2 mb-4 uppercase tracking-widest text-xs">Certifications & Training</h2>
                <div className="space-y-1 text-zinc-400 print:text-gray-600 text-sm">
                    <div>• Adobe Creative Suite (After Effects, Premiere Pro, Photoshop)</div>
                    <div>• MS Office</div>
                    <div>• Continual development in modern video editing techniques and social media content trends</div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
