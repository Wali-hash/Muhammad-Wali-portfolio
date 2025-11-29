import React from 'react';
import { SKILLS_DATA, CORE_COMPETENCIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Tech Stack */}
            <div>
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">Software</h2>
                <div className="space-y-6">
                    {SKILLS_DATA.filter(s => s.category === 'Software').map((skill, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-4">
                            <span className="text-lg font-medium text-zinc-200">{skill.name}</span>
                            <span className="text-xs font-bold text-zinc-600">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Competencies */}
            <div>
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">Capabilities</h2>
                <div className="flex flex-wrap gap-3">
                    {CORE_COMPETENCIES.map((comp, idx) => (
                        <span key={idx} className="px-4 py-2 bg-surface border border-white/5 text-sm text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-default">
                            {comp}
                        </span>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
