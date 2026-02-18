
import React, { useEffect, useState } from 'react';
import { GeminiService } from '../services/geminiService';
import { PulseUpdate } from '../types';
import { COMPETITORS } from '../constants';
import { Bell, Newspaper, MessageSquare, Tag, ExternalLink, Activity, Clock } from 'lucide-react';

export const PulseFeed: React.FC = () => {
  const [updates, setUpdates] = useState<PulseUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service = new GeminiService();
    // Providing 'News' as the default source category to match the UI's 72-hour monitoring theme.
    service.getPulseUpdates(COMPETITORS, 'News')
      .then(setUpdates)
      .finally(() => setLoading(false));
  }, []);

  const getCompName = (id: string) => {
    const name = COMPETITORS.find(c => c.id === id || c.name.toLowerCase() === id.toLowerCase())?.name;
    return name || id;
  };

  const isVeryRecent = (timestamp: string) => {
    return timestamp.includes('hour') || timestamp.includes('1 day') || timestamp.includes('2 day') || timestamp.includes('3 day');
  };

  return (
    <div className="glass border border-slate-700/50 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="p-4 border-b border-slate-700 flex items-center justify-between bg-slate-800/40">
        <div className="flex items-center gap-2">
          <Bell size={18} className="text-zop-accent animate-pulse" />
          <h2 className="font-bold flex flex-col">
            <span>Competitor Intel</span>
            <span className="text-[9px] text-slate-500 font-medium uppercase">Last 72 Hours Monitoring</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           <span className="text-[10px] text-green-400 font-bold">LIVE</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse space-y-2">
              <div className="h-4 bg-slate-800 rounded w-1/4"></div>
              <div className="h-3 bg-slate-800 rounded w-3/4"></div>
              <div className="h-3 bg-slate-800 rounded w-1/2"></div>
            </div>
          ))
        ) : (
          updates.map((update) => (
            <div key={update.id} className={`p-4 bg-slate-800/20 hover:bg-slate-800/50 border border-slate-700/50 rounded-lg transition-all group relative overflow-hidden ${isVeryRecent(update.timestamp) ? 'border-l-4 border-l-zop-accent' : ''}`}>
              {isVeryRecent(update.timestamp) && (
                <div className="absolute top-0 right-0 p-1">
                   <span className="bg-zop-accent text-zop text-[8px] font-black px-1.5 py-0.5 rounded-bl-lg">NEW</span>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-black text-zop-accent uppercase px-1.5 py-0.5 bg-zop-accent/10 rounded tracking-widest">
                  {update.type}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-slate-500">
                  <Clock size={10} />
                  <span>{update.timestamp}</span>
                </div>
              </div>
              
              <h4 className="text-sm font-bold text-slate-100 mb-1 leading-snug group-hover:text-zop-accent transition-colors">
                {update.title}
              </h4>
              
              <p className="text-[11px] font-medium text-slate-400 mb-2">
                Source: <span className="text-slate-300">{getCompName(update.competitorId)}</span>
              </p>
              
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                {update.summary}
              </p>

              <div className="flex justify-end">
                 <a 
                   href={update.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-1 text-[10px] font-bold text-zop-accent hover:underline"
                 >
                    VIEW ASSET <ExternalLink size={12} />
                 </a>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="p-3 bg-slate-800/40 border-t border-slate-700 text-center">
        <button className="text-[10px] font-bold text-slate-500 hover:text-zop-accent transition-colors flex items-center justify-center gap-2 w-full">
          <Activity size={12} />
          RESCAN FOR NEW BLOGS
        </button>
      </div>
    </div>
  );
};
