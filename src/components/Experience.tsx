import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Experience List */}
        <div className="mb-24">
             <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-12">Professional History</h2>
             
             <div className="space-y-12">
                {EXPERIENCE_DATA.map((job, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 border-b border-white/5 hover:border-white/10 transition-colors">
                        <div className="md:w-1/4">
                             <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">{job.period}</span>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
                            <h4 className="text-lg text-zinc-400 mb-6">{job.company}</h4>
                            <div className="space-y-2">
                                {job.description.map((desc, i) => (
                                    <p key={i} className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>

        {/* Education Grid */}
        <div>
             <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-12">Education</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {EDUCATION_DATA.map((edu, idx) => (
                    <div key={idx} className="p-8 border border-white/5 bg-surface hover:bg-white/[0.02] transition-colors">
                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        <p className="text-sm text-zinc-500">{edu.institution}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
