
import React, { useEffect, useState } from 'react';
import { Competitor, AnalysisResponse } from '../types';
import { GeminiService } from '../services/geminiService';
import { X, Loader2, AlertCircle, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ZOP_PRODUCT_BRIEF } from '../constants';

interface Props {
  competitor: Competitor | null;
  onClose: () => void;
}

export const ComparisonModal: React.FC<Props> = ({ competitor, onClose }) => {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (competitor) {
      setLoading(true);
      const service = new GeminiService();
      service.analyzeCompetitor(competitor, ZOP_PRODUCT_BRIEF.zopNight)
        .then(setAnalysis)
        .finally(() => setLoading(false));
    } else {
      setAnalysis(null);
    }
  }, [competitor]);

  if (!competitor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-zop border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            ZopNight vs. <span className="text-zop-accent">{competitor.name}</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-8 flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="animate-spin text-zop-accent" size={48} />
              <p className="text-slate-400 font-medium animate-pulse">Running AI Competitive Analysis...</p>
            </div>
          ) : analysis ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="text-zop-accent" size={20} />
                    The Comparison
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-wrap">
                    {analysis.comparison}
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-4">Recommended Product Actions</h3>
                  <div className="space-y-3">
                    {analysis.recommendedActions.map((action, i) => (
                      <div key={i} className="flex gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                        <p className="text-sm text-slate-300">{action}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <div className={`p-6 rounded-xl border-2 flex flex-col items-center text-center ${
                  analysis.criticalThreatLevel === 'High' ? 'border-red-500 bg-red-500/10' :
                  analysis.criticalThreatLevel === 'Medium' ? 'border-yellow-500 bg-yellow-500/10' :
                  'border-green-500 bg-green-500/10'
                }`}>
                  <AlertCircle size={32} className={`mb-2 ${
                    analysis.criticalThreatLevel === 'High' ? 'text-red-500' :
                    analysis.criticalThreatLevel === 'Medium' ? 'text-yellow-500' :
                    'text-green-500'
                  }`} />
                  <span className="text-xs font-bold uppercase tracking-tighter opacity-70">Threat Level</span>
                  <span className="text-2xl font-black">{analysis.criticalThreatLevel}</span>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">ZopNight Core Differentiator</h4>
                  <p className="text-sm font-medium italic text-zop-accent">"{competitor.zopEdge}"</p>
                </div>
                
                <div className="space-y-2">
                   <h4 className="text-xs font-bold text-slate-500 uppercase">Competitive Strengths</h4>
                   <div className="flex flex-wrap gap-2">
                     {competitor.strengths.map(s => (
                       <span key={s} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400">{s}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
