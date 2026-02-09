import { NextRequest, NextResponse } from "next/server";
import { crawlWebsite } from "@/lib/crawl";
import { analyzeTone, AuditData } from "@/lib/tone-analysis";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { url, email } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Crawl
    const crawlResult = await crawlWebsite(url);
    if (crawlResult.pages.length === 0) {
      return NextResponse.json({ error: "Could not access website. Please check the URL." }, { status: 400 });
    }

    // Analyze
    const analysis = await analyzeTone(crawlResult);

    // Generate ID
    const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

    const auditData: AuditData = {
      id,
      url: crawlResult.url,
      brandName: crawlResult.brandName,
      socialLinks: crawlResult.socialLinks,
      pagesAnalyzed: crawlResult.pages.length,
      analysis,
      createdAt: Date.now(),
    };

    // TODO: Store in Convex when deployed
    // For now, return data directly — client stores in localStorage

    return NextResponse.json(auditData);
  } catch (error) {
    console.error("Audit error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
