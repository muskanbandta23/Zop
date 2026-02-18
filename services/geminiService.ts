
import { GoogleGenAI, Type } from "@google/genai";
import { Competitor, AnalysisResponse, PulseUpdate, FeedType } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing Gemini with the required named parameter and environment variable.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async analyzeCompetitor(competitor: Competitor, zopBrief: string): Promise<AnalysisResponse> {
    const prompt = `
      Analyze the competitor "${competitor.name}" against ZopNight.
      Competitor Brief: ${competitor.brief}
      Competitor Strengths: ${competitor.strengths.join(", ")}
      ZopNight Brief: ${zopBrief}

      Focus on why a customer might choose ZopNight over them or vice versa.
    `;

    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            comparison: { type: Type.STRING },
            criticalThreatLevel: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] },
            recommendedActions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["comparison", "criticalThreatLevel", "recommendedActions"]
        }
      }
    });

    // Access the text property directly without calling it as a method.
    return JSON.parse(response.text.trim());
  }

  async getPulseUpdates(competitors: Competitor[], category: FeedType): Promise<PulseUpdate[]> {
    const competitorNames = competitors.map(c => c.name).join(", ");
    
    // Using Google Search grounding for real-time data
    const prompt = `
      Search for the latest activity from the following cloud optimization / FinOps companies: ${competitorNames}.
      Find specifically content for the source category: ${category}.
      
      Requirements:
      - If category is 'X.com', find latest X/Twitter posts from the last 20 days.
      - If category is 'Reddit', find latest Reddit threads or mentions from the last 20 days.
      - If category is 'Blog', find the 3-5 latest blog posts on their websites.
      - If category is 'News', search Google News for mentions of these companies in the last 72 hours.
      
      For each item, provide a realistic link, a catchy title, and a brief summary.
      Format the response as a JSON array of PulseUpdate objects.
    `;

    const response = await this.ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              competitorId: { type: Type.STRING },
              type: { type: Type.STRING },
              sourceCategory: { type: Type.STRING },
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              timestamp: { type: Type.STRING },
              url: { type: Type.STRING },
              engagement: { type: Type.STRING }
            },
            required: ["id", "competitorId", "type", "sourceCategory", "title", "summary", "timestamp", "url"]
          }
        }
      }
    });

    try {
      // Access the text property directly without calling it as a method.
      return JSON.parse(response.text.trim());
    } catch (e) {
      console.error("Failed to parse Gemini response", e);
      return [];
    }
  }
}
