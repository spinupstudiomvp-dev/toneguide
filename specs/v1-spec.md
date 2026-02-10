# ToneGuide V1 — Product Spec

## Overview
ToneGuide helps marketing teams stay on-brand without needing to check with the agency. The agency uploads brand guidelines + tone docs, the client's team uses a copilot to check content, get rewrites, and learn the brand voice over time.

## Stack
- Next.js 14+ (App Router)
- shadcn/ui + Tailwind CSS
- Convex (backend, real-time, auth)
- OpenAI API (GPT-4o for analysis + vision for images)
- Node.js

## Users & Roles
1. **Agency Admin** — creates brands, uploads guidelines, invites client teams
2. **Brand Manager** — reviews checks, sees dashboard, manages brand docs
3. **Marketing Team Member** (client) — the primary user. Checks content, chats with copilot

## Core Flow

### 1. Onboarding (Agency sets up brand)
- Create workspace → Create brand
- Upload brand assets:
  - Tone of voice document (PDF, DOCX, or paste text)
  - Brand guidelines (PDF with visual rules)
  - Example copy (good examples of on-brand content)
  - Banned words/phrases list
  - Competitor examples (what NOT to sound like)
- System extracts & generates:
  - Voice profile: personality traits with sliders (Formal ↔ Casual, Serious ↔ Playful, Technical ↔ Simple, Reserved ↔ Bold)
  - Key vocabulary (preferred terms, banned terms)
  - Writing rules (max sentence length, active voice preference, etc.)
  - Example snippets tagged as "on-brand"
- Agency invites client team via email link

### 2. Brand Voice Profile (visual card)
- Radar chart of voice dimensions
- "Sounds like" examples
- "Never sounds like" examples
- Do's and Don'ts list
- Auto-generated from uploaded docs, editable by agency/brand manager

### 3. Content Check (paste or upload)
- **Text check**: Paste copy → instant analysis
  - Overall brand match score (0-100 with color coding)
  - Line-by-line annotations with specific feedback
  - Flagged violations (banned words, wrong tone, off-brand phrases)
  - Suggested rewrites for flagged sections
  - Content type selector: ad copy, social post, email, landing page, blog, press release
- **Image check**: Upload image → OCR extracts text → analyzes against brand
  - Also checks if visual tone aligns (optional, v2)
  - Supports JPG, PNG, PDF screenshots
- **Bulk check**: Paste multiple assets, get a batch report

### 4. Copilot Chat (the core UX)
- Split-screen: content editor on left, copilot chat on right
- Natural language interaction:
  - "Does this headline work for [Brand]?"
  - "Rewrite this email in our voice"
  - "Make this more playful but keep it professional"
  - "What would [Brand] say instead of 'synergy'?"
  - "Check this against our guidelines"
- Copilot has full context of the brand's voice profile, guidelines, and examples
- Remembers conversation context within a session
- Can generate content from scratch: "Write a LinkedIn post about our new product launch"
- Supports multiple languages — detects input language, applies brand voice rules

### 5. Dashboard
- **Brand overview**: all brands with health scores (how consistently is the team writing on-brand?)
- **Recent checks**: feed of all content checked, scores, who checked it
- **Trends**: consistency score over time per brand
- **Team activity**: who's checking content, frequency, improvement
- **Flagged content**: items that scored below threshold, need review

### 6. Brand Library
- All uploaded guidelines, organized
- Version history (when guidelines are updated)
- Quick reference cards for each brand
- Searchable: "What's our policy on emojis?" → finds the relevant section

## Onboarding UX (Playful & Simple)
- Step 1: "What's your brand's name?" (big friendly input)
- Step 2: "Drop your brand guidelines here" (drag & drop zone, fun animation)
- Step 3: "Let's figure out your voice" — interactive quiz/sliders where user positions their brand on personality dimensions
- Step 4: "Here's what we think your brand sounds like" — AI-generated voice profile, user confirms or tweaks
- Step 5: "Try it out!" — sample content check to show the magic
- Progress bar with playful copy ("Almost there!", "Your brand is coming alive!")

## Auth
- Convex Auth with magic link (email)
- Workspace → Brand → Members hierarchy
- Roles: admin, manager, member

## Data Model (Convex)

### workspaces
- name, slug, createdAt, plan

### brands
- workspaceId, name, logo?, voiceProfile (JSON), guidelines (text), bannedWords[], preferredTerms[], exampleCopy[], createdAt, updatedAt

### brandDocuments
- brandId, title, type (guidelines/tone/examples), content (text), fileUrl?, uploadedAt

### members
- workspaceId, email, name, role (admin/manager/member), brandAccess[] (which brands they can access)

### checks
- brandId, memberId, contentType, inputText, inputImageUrl?, score, feedback (JSON), annotations[], createdAt

### chatSessions
- brandId, memberId, createdAt

### chatMessages
- sessionId, role (user/assistant), content, createdAt

## Pages
- `/` — Landing page (marketing)
- `/login` — Magic link auth
- `/onboarding` — Brand setup wizard
- `/dashboard` — All brands overview
- `/brand/[id]` — Brand detail (voice profile, docs, recent checks)
- `/brand/[id]/check` — Content check + copilot (the main screen)
- `/brand/[id]/library` — Brand guidelines library
- `/brand/[id]/settings` — Brand settings, team management
- `/settings` — Workspace settings

## Key Differentiators
- Not just a checker — it's a **copilot** that teaches the brand voice
- Image support (check copy on designs without extracting manually)
- Multi-language (agencies with international clients)
- Client-facing (reduces agency workload, not just internal tool)
- Playful onboarding that makes setup feel easy, not like homework

## V2 Features (future)
- Browser extension (check content anywhere)
- Google Docs plugin
- Figma plugin
- API for CI/CD content pipelines
- Slack bot ("@toneguide check this copy")
- Analytics: which team members improve fastest
- A/B brand voice testing
