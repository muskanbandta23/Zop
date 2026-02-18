
import React, { useState, useEffect } from 'react';
import { COMPETITORS } from './constants';
import { Competitor, FeedType, PulseUpdate } from './types';
import { CompetitorCard } from './components/CompetitorCard';
import { ComparisonModal } from './components/ComparisonModal';
import { GeminiService } from './services/geminiService';
import { 
  BarChart3, 
  Search, 
  Globe, 
  ShieldCheck, 
  Zap,
  Info,
  Rss,
  TrendingUp,
  History,
  Twitter,
  MessageSquare,
  Newspaper,
  BookOpen,
  ArrowUpRight,
  Clock,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeFeedTab, setActiveFeedTab] = useState<FeedType>('Blog');
  const [feedItems, setFeedItems] = useState<PulseUpdate[]>([]);
  const [loadingFeed, setLoadingFeed] = useState(false);

  const categories = ['All', 'FinOps', 'Optimization', 'Automation', 'IDP'];
  const feedTabs: { id: FeedType; icon: any }[] = [
    { id: 'Blog', icon: BookOpen },
    { id: 'News', icon: Newspaper },
    { id: 'X.com', icon: Twitter },
    { id: 'Reddit', icon: MessageSquare },
  ];

  const filteredCompetitors = COMPETITORS.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         c.brief.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const fetchFeed = async () => {
    setLoadingFeed(true);
    const service = new GeminiService();
    try {
      const updates = await service.getPulseUpdates(COMPETITORS, activeFeedTab);
      setFeedItems(updates);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingFeed(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, [activeFeedTab]);

  return (
    <div className="min-h-screen flex flex-col bg-zop">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-zop/90 backdrop-blur-lg border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-zop-accent to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <BarChart3 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter uppercase">ZOPINTEL</h1>
              <p className="text-[10px] text-zop-accent font-black tracking-[0.2em] uppercase opacity-80">Competitive Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Watch: Online</span>
            </div>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-zop-accent transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search landscape..." 
                className="bg-slate-900/50 border border-slate-700/50 rounded-full py-2 pl-10 pr-4 text-sm w-48 md:w-64 focus:outline-none focus:border-zop-accent focus:bg-slate-900 transition-all placeholder:text-slate-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-12 pb-10 bg-gradient-to-b from-slate-900/40 to-zop relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zop-accent/10 border border-zop-accent/30 rounded-full mb-6">
               <Rss size={14} className="text-zop-accent" />
               <span className="text-[10px] font-black text-zop-accent uppercase tracking-widest">Real-time Competitive Tracking (Last 20 Days)</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tight">
              Market <span className="text-zop-accent">Intelligence</span> Accelerated.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Monitor CloudZero, Cast AI, nOps, and {COMPETITORS.length - 3} other rivals. 
              Get direct links to their latest X posts, Reddit discussions, blogs, and news.
            </p>
          </div>
        </div>
      </header>

      {/* Intelligence Hub Main */}
      <main className="flex-1 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Feed Section (Right) */}
          <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
             {/* Feed Tabs */}
             <div className="glass border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
                <div className="flex flex-wrap border-b border-slate-700/50">
                   {feedTabs.map((tab) => (
                     <button
                       key={tab.id}
                       onClick={() => setActiveFeedTab(tab.id)}
                       className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                         activeFeedTab === tab.id 
                         ? 'bg-zop-accent/10 text-zop-accent border-b-2 border-zop-accent' 
                         : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                       }`}
                     >
                       <tab.icon size={16} />
                       {tab.id}
                     </button>
                   ))}
                </div>
                
                <div className="p-6">
                   <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold flex items-center gap-2">
                         Latest {activeFeedTab} Posts
                         {loadingFeed && <RefreshCw size={16} className="animate-spin text-zop-accent" />}
                      </h3>
                      <button onClick={fetchFeed} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all">
                        <RefreshCw size={18} />
                      </button>
                   </div>

                   <div className="space-y-4">
                      {loadingFeed ? (
                        Array(5).fill(0).map((_, i) => (
                          <div key={i} className="animate-pulse flex gap-4 p-4 glass border border-slate-800 rounded-xl">
                            <div className="w-12 h-12 bg-slate-800 rounded-lg shrink-0"></div>
                            <div className="flex-1 space-y-3">
                               <div className="h-4 bg-slate-800 rounded w-1/4"></div>
                               <div className="h-3 bg-slate-800 rounded w-3/4"></div>
                            </div>
                          </div>
                        ))
                      ) : feedItems.length > 0 ? (
                        feedItems.map((item) => (
                          <a 
                            key={item.id} 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col md:flex-row gap-4 p-5 glass border border-slate-700/50 rounded-xl hover:border-zop-accent/50 hover:bg-slate-800/30 transition-all group"
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                              activeFeedTab === 'X.com' ? 'bg-black text-white' :
                              activeFeedTab === 'Reddit' ? 'bg-orange-600 text-white' :
                              activeFeedTab === 'News' ? 'bg-blue-600 text-white' :
                              'bg-zop-accent text-zop'
                            }`}>
                              {activeFeedTab === 'X.com' && <Twitter size={20} />}
                              {activeFeedTab === 'Reddit' && <MessageSquare size={20} />}
                              {activeFeedTab === 'News' && <Newspaper size={20} />}
                              {activeFeedTab === 'Blog' && <BookOpen size={20} />}
                            </div>
                            <div className="flex-1">
                               <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] font-black uppercase text-zop-accent">
                                    {COMPETITORS.find(c => c.id === item.competitorId)?.name || 'General Industry'}
                                  </span>
                                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                     <Clock size={10} />
                                     <span>{item.timestamp}</span>
                                  </div>
                               </div>
                               <h4 className="font-bold text-slate-100 group-hover:text-zop-accent transition-colors mb-2">
                                 {item.title}
                               </h4>
                               <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                                 {item.summary}
                               </p>
                               {item.engagement && (
                                 <span className="text-[10px] font-bold text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                                   {item.engagement}
                                 </span>
                               )}
                            </div>
                            <div className="flex items-center text-zop-accent opacity-0 group-hover:opacity-100 transition-opacity">
                               <ArrowUpRight size={20} />
                            </div>
                          </a>
                        ))
                      ) : (
                        <div className="text-center py-10 text-slate-500">
                           No updates found for this category recently.
                        </div>
                      )}
                   </div>
                </div>
             </div>

             {/* Vendor Radar Section */}
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2">
                      <History size={20} className="text-zop-accent" />
                      Vendor Radar
                   </h3>
                   <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all border whitespace-nowrap ${
                          activeCategory === cat 
                          ? 'bg-zop-accent text-zop border-zop-accent shadow-[0_0_10px_rgba(56,189,248,0.4)]' 
                          : 'bg-slate-800/50 text-slate-500 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCompetitors.map(competitor => (
                    <CompetitorCard 
                      key={competitor.id} 
                      competitor={competitor} 
                      onSelect={setSelectedCompetitor}
                    />
                  ))}
                </div>
             </div>
          </div>

          {/* Side Strategy Panel (Left) */}
          <div className="lg:col-span-4 space-y-8 order-1 lg:order-2">
            <div className="glass border border-slate-700/50 rounded-2xl p-6 bg-slate-900/40 shadow-xl sticky top-28">
              <h3 className="font-bold flex items-center gap-2 mb-6 text-sm uppercase tracking-widest">
                <TrendingUp size={18} className="text-zop-accent" />
                ZopIntel Strategy Hub
              </h3>
              
              <div className="space-y-6">
                <div>
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">ZopNight Edge</h4>
                   <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-zop-accent pl-4">
                     "While giants like IBM Datadog focus on visibility, ZopNight focuses on autonomous state control."
                   </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4">
                     <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                        <Globe size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-slate-200">Full Cloud Fabric</p>
                        <p className="text-[10px] text-slate-500 mt-1">Native AWS, GCP, Azure Support</p>
                     </div>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4">
                     <div className="p-2 bg-green-500/10 text-green-400 rounded-lg">
                        <ShieldCheck size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-slate-200">Policy Guardrails</p>
                        <p className="text-[10px] text-slate-500 mt-1">Automated Cost Compliance</p>
                     </div>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4">
                     <div className="p-2 bg-yellow-500/10 text-yellow-400 rounded-lg">
                        <Zap size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-slate-200">Idle Zero</p>
                        <p className="text-[10px] text-slate-500 mt-1">Power down non-prod assets instantly</p>
                     </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Hot Keywords Tracked</h4>
                   <div className="flex flex-wrap gap-2">
                      {['#FinOps', '#CloudCost', '#IDP', '#K8s', '#Kubernetes', '#Automation'].map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-zop-accent px-2 py-1 bg-zop-accent/10 rounded-md">{tag}</span>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Comparison Modal */}
      <ComparisonModal 
        competitor={selectedCompetitor} 
        onClose={() => setSelectedCompetitor(null)} 
      />
    </div>
  );
};

export default App;
