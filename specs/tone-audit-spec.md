# ToneGuide — Tone of Voice Audit (Lead Magnet)

## Overview
A free, no-signup tone of voice audit. Enter a brand URL → we crawl their website, find their social channels, scrape content, and reverse-engineer their brand voice. Works from the homepage (lead magnet) and inside the platform (existing users).

## Input Flow
1. User enters brand website URL (e.g. `nike.com`)
2. We crawl the site and auto-discover social links (LinkedIn, X, Instagram, YouTube, etc.)
3. If we can't find social links, we ask: "We couldn't find your X handle — enter it here (optional)"
4. No account required. Fully free. No email gate on results.

## What We Scrape

### Website
- Homepage (hero copy, tagline, value props)
- About page (mission, vision, company description)
- Blog/content hub (last 10-20 posts — titles, intros, writing style)
- Product/services pages (how they describe what they sell)
- Contact/careers page (reveals internal voice)
- **Method**: Crawl up to 15-20 key pages. Use headless fetch or Apify website scraper.

### X / Twitter
- Company handle (auto-discovered from website or asked)
- Last 50 tweets (excluding retweets)
- Leadership handles if discoverable (CEO, CMO — top 1-2 people)
- **Method**: Composio Twitter tools (already integrated in GrowthLens)

### LinkedIn
- Company page posts (last 20-30)
- Leadership profiles (CEO/founder — last 20 posts)
- **Method**: Apify harvestapi actors (already integrated in GrowthLens)

### Other Channels (as discoverable)
- Instagram bio + recent captions (if public)
- YouTube channel description + recent video titles/descriptions
- Google Business listing description
- **Method**: Apify actors or direct scraping where possible. Best effort — if a channel isn't found, skip it gracefully.

## Analysis (GPT-4o)

Feed all scraped content to GPT-4o with a structured prompt. Output:

### 1. Voice Profile (reverse-engineered)
Same 4 dimensions as the platform:
- **Formal ↔ Casual** (0-100 scale)
- **Serious ↔ Playful** (0-100 scale)
- **Technical ↔ Simple** (0-100 scale)
- **Reserved ↔ Bold** (0-100 scale)

### 2. Brand Personality Summary
- 2-3 sentence description: "Your brand voice is confident and direct, with a professional edge. You favor short, punchy sentences and avoid jargon."
- 3-5 personality traits: "Authoritative, Warm, Results-driven"

### 3. Vocabulary Analysis
- **Signature phrases**: words/phrases they use repeatedly
- **Power words**: emotionally charged words they favor
- **Avoided words**: patterns of what they DON'T say
- **Jargon level**: how much industry jargon they use

### 4. Channel Consistency Score
- Compare voice across website vs X vs LinkedIn vs other channels
- Overall consistency score (0-100)
- Per-channel breakdown: "Website: Professional, X: More casual, LinkedIn: Thought-leadery"
- Flag inconsistencies: "Your X tone is significantly more casual than your website"

### 5. Target Audience Inference
- Who their copy suggests they're targeting
- Demographics/psychographics: "Mid-market B2B decision-makers, 30-50, value efficiency"
- Pain points addressed in their copy
- Aspirational language analysis

### 6. Content Strategy Insights
- Content themes/pillars from blog + social
- Posting cadence
- Format preferences (long-form vs short, visual vs text)
- Engagement patterns (what type of content gets most interaction)

### 7. Strengths & Gaps
- "Strong on authority and expertise"
- "Weak on warmth and approachability"
- "Inconsistent between channels"
- Specific recommendations: "Consider softening your website copy to match the approachability of your social presence"

### 8. Competitor Voice Comparison (stretch)
- If we can identify competitors (from their website/industry), briefly note how they differ
- "Your competitors lean more casual — you stand out as the authoritative choice"

## Report UI

### Audit Page (`/audit` and `/audit/[id]`)
- Clean, light design matching ToneGuide's editorial feel
- Voice profile radar chart at the top
- Personality summary card
- Channel consistency breakdown (visual — colored bars per channel)
- Vocabulary cloud or list
- Target audience card
- Strengths & gaps with specific recommendations
- Content strategy insights
- **Shareable URL**: `/audit/[id]` loads saved results
- **Email report**: "Enter your email to receive this report" (optional, at bottom)
- **CTA**: "Want to keep your team on this voice? → Create a free ToneGuide account"

### Homepage Integration
- Prominent section on landing page: "Audit Your Brand Voice — Free"
- Input field for URL right on the homepage
- Or a separate CTA button that goes to `/audit`

## Loading UX
Crawling + analysis takes time (30-60s). Show a fun progress sequence:
- "Finding your website..." ✓
- "Reading your homepage..." ✓
- "Discovering social channels..." ✓
- "Analyzing 47 pieces of content..." ✓
- "Reverse-engineering your voice..." ✓
- "Generating your voice profile..." ✓

## Data Storage (Convex)

### toneAudits table
- url: string (brand website)
- brandName: string (extracted or inferred)
- channels: JSON string (which channels found + scraped)
- voiceProfile: JSON string (the 4 dimension scores)
- analysis: JSON string (full analysis output)
- score: number (overall consistency score)
- email?: string (if they opted to receive report)
- createdAt: number

## Re-auditing
- Saved audits can be re-run: "Run again" button
- Shows comparison: "Since last audit: formality increased 8%, consistency improved 12%"
- Tracks changes over time

## Conversion Funnel
1. Homepage → "Audit Your Voice" CTA
2. Enter URL → free audit runs
3. See results → "Enter email to save & share this report"
4. Email captured → send report link
5. CTA in report → "Keep your team on-brand → Sign up for ToneGuide"
6. User signs up → audit becomes their first brand's voice profile baseline

## MVP Scope (what to build first)
1. Website scraping (homepage, about, blog — 10 pages max)
2. X/Twitter scraping (company handle, 50 tweets)
3. GPT-4o analysis producing voice profile + summary + vocabulary + strengths/gaps
4. Report page with shareable URL
5. Email capture for report delivery
6. Homepage integration (audit CTA)
7. Storage in Convex

## Later
- LinkedIn company + leadership scraping
- Instagram, YouTube, Google Business
- Competitor comparison
- Re-audit tracking over time
- PDF export
