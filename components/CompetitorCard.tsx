
import React from 'react';
import { Competitor } from '../types';
import { ExternalLink, Linkedin, ArrowRight, ShieldAlert, Zap } from 'lucide-react';

interface Props {
  competitor: Competitor;
  onSelect: (c: Competitor) => void;
}

export const CompetitorCard: React.FC<Props> = ({ competitor, onSelect }) => {
  return (
    <div className="glass border border-slate-700/50 rounded-xl p-6 flex flex-col hover:border-zop-accent transition-all duration-300 group cursor-pointer" onClick={() => onSelect(competitor)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-zop-accent font-bold mb-1 block">
            {competitor.category}
          </span>
          <h3 className="text-xl font-bold group-hover:text-zop-accent transition-colors">{competitor.name}</h3>
        </div>
        <div className="flex gap-2">
          <a href={competitor.website} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <ExternalLink size={18} />
          </a>
          <a href={competitor.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      
      <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">
        {competitor.brief}
      </p>

      <div className="space-y-3 mt-auto">
        <div className="flex items-center gap-2 text-xs text-red-400/80">
          <ShieldAlert size={14} />
          <span>Gap: {competitor.gaps[0]}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-green-400/80">
          <Zap size={14} />
          <span>ZopEdge: {competitor.zopEdge.substring(0, 40)}...</span>
        </div>
      </div>

      <button className="mt-6 flex items-center gap-2 text-xs font-semibold text-zop-accent group-hover:gap-3 transition-all">
        VIEW FULL INTEL <ArrowRight size={14} />
      </button>
    </div>
  );
};
