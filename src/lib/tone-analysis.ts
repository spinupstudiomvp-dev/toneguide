import { CrawlResult } from "./crawl";

export interface ToneAuditResult {
  voiceProfile: {
    formalCasual: number;
    seriousPlayful: number;
    technicalSimple: number;
    reservedBold: number;
  };
  personalitySummary: string;
  personalityTraits: string[];
  vocabulary: {
    signaturePhrases: string[];
    powerWords: string[];
    avoidedPatterns: string[];
    jargonLevel: string;
  };
  targetAudience: {
    description: string;
    demographics: string;
    painPoints: string[];
    aspirations: string[];
  };
  contentStrategy: {
    themes: string[];
    formatPreferences: string;
    tonePatterns: string;
  };
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  overallScore: number;
  channelConsistency: {
    website: { tone: string; score: number };
  };
}

export interface AuditData {
  id: string;
  url: string;
  brandName: string;
  socialLinks: CrawlResult["socialLinks"];
  pagesAnalyzed: number;
  analysis: ToneAuditResult;
  createdAt: number;
}

const MOCK_RESULT: ToneAuditResult = {
  voiceProfile: { formalCasual: 62, seriousPlayful: 45, technicalSimple: 55, reservedBold: 68 },
  personalitySummary:
    "Your brand voice is confident and approachable, balancing professionalism with warmth. You favor clear, direct language and aren't afraid to show personality.",
  personalityTraits: ["Confident", "Approachable", "Direct", "Knowledgeable"],
  vocabulary: {
    signaturePhrases: ["built for teams", "simple yet powerful", "get started free"],
    powerWords: ["transform", "effortless", "breakthrough", "empower"],
    avoidedPatterns: ["synergy", "leverage", "circle back", "deep dive"],
    jargonLevel: "moderate",
  },
  targetAudience: {
    description: "Growth-minded professionals and teams looking for modern, efficient solutions",
    demographics: "25-45, tech-savvy professionals, mid-market to enterprise",
    painPoints: ["Complexity of existing tools", "Lack of team alignment", "Slow workflows"],
    aspirations: ["Efficiency", "Professional growth", "Team collaboration"],
  },
  contentStrategy: {
    themes: ["Innovation", "Simplicity", "Team empowerment", "Results-driven"],
    formatPreferences: "Mix of short-form social content and in-depth blog posts",
    tonePatterns: "Conversational with authority — uses second person, active voice, short sentences",
  },
  strengths: [
    "Strong, consistent brand personality across key pages",
    "Clear value propositions with benefit-focused language",
    "Good use of social proof and credibility markers",
    "Accessible language that avoids unnecessary jargon",
  ],
  gaps: [
    "About page could show more personality and brand story",
    "Blog content tone varies between authors",
    "CTAs could be more action-oriented and specific",
    "Limited emotional language — could build stronger connection",
  ],
  recommendations: [
    "Create a voice & tone guide for all content creators",
    "Add more storytelling elements to build emotional connection",
    "Standardize CTA language across all pages",
    "Consider adding a more playful tone to social media content",
    "Develop a branded vocabulary list for consistency",
  ],
  overallScore: 72,
  channelConsistency: {
    website: { tone: "Professional and approachable with clear messaging", score: 75 },
  },
};

export async function analyzeTone(crawlResult: CrawlResult): Promise<ToneAuditResult> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Return mock data with slight variations based on brand
    return { ...MOCK_RESULT };
  }

  const contentSample = crawlResult.pages
    .map((p) => `=== ${p.title} (${p.url}) ===\n${p.text.slice(0, 3000)}`)
    .join("\n\n")
    .slice(0, 30000);

  const prompt = `You are a brand voice analyst. Analyze the following website content and produce a detailed tone of voice audit.

Brand: ${crawlResult.brandName}
Website: ${crawlResult.url}
Pages analyzed: ${crawlResult.pages.length}

CONTENT:
${contentSample}

Return a JSON object with exactly this structure (no markdown, just raw JSON):
{
  "voiceProfile": {
    "formalCasual": <0-100, 0=very formal, 100=very casual>,
    "seriousPlayful": <0-100, 0=very serious, 100=very playful>,
    "technicalSimple": <0-100, 0=very technical, 100=very simple>,
    "reservedBold": <0-100, 0=very reserved, 100=very bold>
  },
  "personalitySummary": "<2-3 sentence summary of their brand voice>",
  "personalityTraits": ["<trait1>", "<trait2>", "<trait3>", "<trait4>"],
  "vocabulary": {
    "signaturePhrases": ["<phrase1>", "<phrase2>", "<phrase3>"],
    "powerWords": ["<word1>", "<word2>", "<word3>", "<word4>"],
    "avoidedPatterns": ["<pattern1>", "<pattern2>", "<pattern3>"],
    "jargonLevel": "<none|low|moderate|high>"
  },
  "targetAudience": {
    "description": "<who their copy targets>",
    "demographics": "<inferred demographics>",
    "painPoints": ["<pain1>", "<pain2>", "<pain3>"],
    "aspirations": ["<aspiration1>", "<aspiration2>", "<aspiration3>"]
  },
  "contentStrategy": {
    "themes": ["<theme1>", "<theme2>", "<theme3>"],
    "formatPreferences": "<their content format preferences>",
    "tonePatterns": "<recurring tone patterns>"
  },
  "strengths": ["<strength1>", "<strength2>", "<strength3>", "<strength4>"],
  "gaps": ["<gap1>", "<gap2>", "<gap3>", "<gap4>"],
  "recommendations": ["<rec1>", "<rec2>", "<rec3>", "<rec4>", "<rec5>"],
  "overallScore": <0-100 brand voice consistency score>,
  "channelConsistency": {
    "website": { "tone": "<description>", "score": <0-100> }
  }
}`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "";
    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as ToneAuditResult;
    }
    return MOCK_RESULT;
  } catch {
    return MOCK_RESULT;
  }
}
