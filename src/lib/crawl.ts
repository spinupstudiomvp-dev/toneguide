import * as cheerio from "cheerio";

export interface CrawlResult {
  url: string;
  brandName: string;
  pages: { url: string; title: string; text: string }[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

const PRIORITY_PATTERNS = [
  /about/i, /blog/i, /product/i, /service/i, /contact/i,
  /team/i, /story/i, /mission/i, /values/i, /careers/i,
  /pricing/i, /solutions/i, /features/i, /who-we-are/i,
];

const SKIP_PATTERNS = [
  /\.(pdf|png|jpg|jpeg|gif|svg|zip|mp4|mp3)$/i,
  /\?(utm_|ref=|fbclid)/i, /#/,
  /privacy|terms|cookie|legal|sitemap|feed|rss/i,
  /login|signup|register|cart|checkout/i,
];

function normalizeUrl(base: string, href: string): string | null {
  try {
    const u = new URL(href, base);
    u.hash = "";
    u.search = "";
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.toString().replace(/\/+$/, "");
  } catch {
    return null;
  }
}

function extractSocialLinks($: cheerio.CheerioAPI): CrawlResult["socialLinks"] {
  const links: CrawlResult["socialLinks"] = {};
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") || "";
    if (/twitter\.com|x\.com/i.test(href) && !links.twitter) {
      const match = href.match(/(?:twitter\.com|x\.com)\/([A-Za-z0-9_]+)/);
      if (match && !["share", "intent", "search"].includes(match[1])) links.twitter = match[1];
    }
    if (/linkedin\.com\/company/i.test(href) && !links.linkedin) links.linkedin = href;
    if (/instagram\.com/i.test(href) && !links.instagram) links.instagram = href;
    if (/youtube\.com/i.test(href) && !links.youtube) links.youtube = href;
  });
  return links;
}

function extractText($: cheerio.CheerioAPI): string {
  $("script, style, nav, footer, header, iframe, noscript, svg").remove();
  const text = $("body").text().replace(/\s+/g, " ").trim();
  return text.slice(0, 10000);
}

async function fetchPage(url: string): Promise<{ html: string; ok: boolean }> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "ToneGuide Bot/1.0" },
      signal: AbortSignal.timeout(10000),
      redirect: "follow",
    });
    if (!res.ok) return { html: "", ok: false };
    const html = await res.text();
    return { html, ok: true };
  } catch {
    return { html: "", ok: false };
  }
}

export async function crawlWebsite(inputUrl: string, maxPages = 15): Promise<CrawlResult> {
  let baseUrl = inputUrl.trim();
  if (!/^https?:\/\//i.test(baseUrl)) baseUrl = "https://" + baseUrl;
  const origin = new URL(baseUrl).origin;

  const visited = new Set<string>();
  const pages: CrawlResult["pages"] = [];
  let socialLinks: CrawlResult["socialLinks"] = {};
  let brandName = new URL(baseUrl).hostname.replace(/^www\./, "").split(".")[0];
  brandName = brandName.charAt(0).toUpperCase() + brandName.slice(1);

  const queue: string[] = [baseUrl.replace(/\/+$/, "")];
  const discovered: string[] = [];

  // Crawl homepage first
  const { html: homeHtml, ok: homeOk } = await fetchPage(queue[0]);
  if (homeOk) {
    const $ = cheerio.load(homeHtml);
    const title = $("title").text().trim() || "Homepage";
    if ($('meta[property="og:site_name"]').attr("content")) {
      brandName = $('meta[property="og:site_name"]').attr("content")!;
    }
    socialLinks = extractSocialLinks($);
    pages.push({ url: queue[0], title, text: extractText($) });
    visited.add(queue[0]);

    // Discover links
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") || "";
      const norm = normalizeUrl(origin, href);
      if (!norm || !norm.startsWith(origin) || visited.has(norm)) return;
      if (SKIP_PATTERNS.some((p) => p.test(norm))) return;
      discovered.push(norm);
    });
  }

  // Prioritize important pages
  const prioritized = discovered.filter((u) => PRIORITY_PATTERNS.some((p) => p.test(u)));
  const rest = discovered.filter((u) => !prioritized.includes(u));
  const toVisit = [...new Set([...prioritized, ...rest])].slice(0, maxPages - 1);

  // Crawl remaining pages in parallel batches
  const BATCH = 5;
  for (let i = 0; i < toVisit.length && pages.length < maxPages; i += BATCH) {
    const batch = toVisit.slice(i, i + BATCH);
    const results = await Promise.all(
      batch.map(async (url) => {
        if (visited.has(url)) return null;
        visited.add(url);
        const { html, ok } = await fetchPage(url);
        if (!ok) return null;
        const $ = cheerio.load(html);
        const title = $("title").text().trim() || url;
        // Merge social links
        const s = extractSocialLinks($);
        if (s.twitter && !socialLinks.twitter) socialLinks.twitter = s.twitter;
        if (s.linkedin && !socialLinks.linkedin) socialLinks.linkedin = s.linkedin;
        if (s.instagram && !socialLinks.instagram) socialLinks.instagram = s.instagram;
        if (s.youtube && !socialLinks.youtube) socialLinks.youtube = s.youtube;
        return { url, title, text: extractText($) };
      })
    );
    for (const r of results) {
      if (r && pages.length < maxPages) pages.push(r);
    }
  }

  return { url: baseUrl, brandName, pages, socialLinks };
}
