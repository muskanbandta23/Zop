
export interface Competitor {
  id: string;
  name: string;
  website: string;
  linkedin: string;
  brief: string;
  strengths: string[];
  gaps: string[];
  zopEdge: string;
  category: 'FinOps' | 'IDP' | 'Optimization' | 'Automation';
}

export type FeedType = 'X.com' | 'Reddit' | 'Blog' | 'News';

export interface PulseUpdate {
  id: string;
  competitorId: string;
  type: 'blog' | 'linkedin' | 'feature' | 'funding' | 'tweet' | 'reddit' | 'news';
  sourceCategory: FeedType;
  title: string;
  summary: string;
  timestamp: string;
  url: string;
  engagement?: string;
}

export interface AnalysisResponse {
  comparison: string;
  criticalThreatLevel: 'Low' | 'Medium' | 'High';
  recommendedActions: string[];
}
