import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Mail, Target, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Keep Your Brand Voice Consistent in Email Marketing — ToneGuide",
  description:
    "Your emails sound like they come from 5 different companies. Here's a practical framework for maintaining brand voice consistency across every email — from welcome sequences to re-engagement campaigns.",
  keywords: [
    "brand voice email marketing",
    "email tone of voice",
    "consistent email brand voice",
    "email marketing brand guidelines",
    "brand voice email campaigns",
    "email copywriting brand voice",
  ],
  openGraph: {
    title: "How to Keep Your Brand Voice Consistent in Email Marketing",
    description:
      "A practical framework for maintaining brand voice consistency across every email you send.",
    type: "article",
    publishedTime: "2026-02-13T14:00:00Z",
  },
};

export default function BrandVoiceEmailMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How to Keep Your Brand Voice Consistent in Email Marketing
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 13, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
        </header>

        {/* Intro */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Your website sounds polished. Your social media sounds human. Your emails sound like a completely different company. If this describes your marketing, you're not alone — email is where brand voice goes to die.
          </p>

          <p className="mb-6">
            Email marketing sits in a strange middle ground. It's more personal than a blog post but more structured than a tweet. It reaches people in their inbox — the most cluttered, competitive space in digital marketing. And because most teams have multiple people writing emails (marketing, sales, support, product), consistency falls apart fast.
          </p>

          <p className="mb-8">
            The result? Subscribers can't tell if they're hearing from a brand or a random company they accidentally signed up for. Recognition drops. Trust erodes. Unsubscribes climb.
          </p>

          <p className="mb-8">
            Here's how to fix it — with a practical framework that works whether you're a solo marketer or running a 20-person team.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-coral" />
            Why Email Is the Hardest Channel for Brand Voice
          </h2>

          <p className="mb-4">
            Most brand voice guidelines were written for websites and ads. They cover headlines, CTAs, and maybe social captions. But email has unique challenges that generic guidelines don't address:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Volume.</strong> A typical SaaS company sends 15-30 different email types — welcome sequences, feature announcements, billing reminders, re-engagement campaigns, newsletters, event invites. Each one needs to sound like you.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Multiple authors.</strong> Marketing writes the newsletter. Product writes release notes. Support writes transactional emails. Sales writes outreach. Nobody checks if they all sound the same.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Template fatigue.</strong> Teams copy old emails and tweak them. Over months, voice drifts. The welcome email from 2024 sounds nothing like the one from last week.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Emotional range.</strong> A cart abandonment email needs different energy than a "your trial is expiring" email. Both need to sound like your brand. That's hard.</span>
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-coral" />
            The Email Voice Framework: 4 Layers
          </h2>

          <p className="mb-6">
            Generic brand voice guidelines tell you to "be friendly" or "sound professional." That's useless when you're staring at a blank email draft at 4 PM. Instead, define your email voice across four specific layers:
          </p>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">1. Greeting & Sign-off Voice</h3>
          <p className="mb-4">
            This is the first and last thing subscribers see. It sets the entire tone. Define exactly how you open and close emails — and be specific:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-sm font-medium mb-2">❌ Vague guideline:</p>
            <p className="text-muted-foreground mb-4">"Keep greetings friendly and professional."</p>
            <p className="text-sm font-medium mb-2">✅ Specific guideline:</p>
            <p className="text-muted-foreground">"Use 'Hey [First Name]' for newsletters and marketing emails. Use 'Hi [First Name]' for transactional and billing emails. Never use 'Dear' or 'Hello there.' Sign off with 'Cheers, [Team/Name]' — never 'Best regards.'"</p>
          </div>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">2. Subject Line Voice</h3>
          <p className="mb-4">
            Subject lines are where most brands lose their voice entirely. They default to whatever gets opens — ALL CAPS, emoji spam, clickbait — regardless of whether it sounds like their brand.
          </p>
          <p className="mb-4">
            Create a subject line voice guide with clear rules:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span>Sentence case vs. title case (pick one, stick to it)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span>Emoji policy (never, sparingly, or which specific ones)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span>Length range (e.g., 30-50 characters)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span>Punctuation rules (questions allowed? exclamation marks?)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span>5 example subject lines that nail your voice, 5 that don't</span>
            </li>
          </ul>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">3. Body Copy Voice</h3>
          <p className="mb-4">
            The meat of every email. Define rules for:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Paragraph length.</strong> Short paragraphs (1-3 sentences) for marketing emails. Slightly longer for newsletters where readers expect depth.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Sentence structure.</strong> Do you use contractions? ("We've" vs "We have.") Fragments? ("Big news." vs "We have big news for you.")</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Humor threshold.</strong> Can you make jokes? Self-deprecating humor? Pop culture references? Where's the line?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral mt-1">•</span>
              <span><strong>Jargon rules.</strong> Industry terms you use freely vs. ones you always explain.</span>
            </li>
          </ul>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">4. CTA Voice</h3>
          <p className="mb-4">
            Call-to-action buttons are tiny pieces of copy that carry enormous weight. And they're where voice inconsistency is most visible — because subscribers see dozens of your CTAs over time.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-sm font-medium mb-3">Define your CTA spectrum:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>High energy:</strong> "Let's go" / "Grab your spot" / "Start building"</li>
              <li><strong>Medium energy:</strong> "See what's new" / "Check it out" / "Learn more"</li>
              <li><strong>Low energy:</strong> "View details" / "Read the guide" / "Review changes"</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">Map each energy level to email types. Product launches get high energy. Billing updates get low energy. Newsletters get medium.</p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6 text-coral" />
            The Email Voice Audit: Find Your Weak Spots
          </h2>

          <p className="mb-4">
            Before you write new guidelines, audit what you're already sending. Pull the last 10-15 emails from your ESP and run them through this checklist:
          </p>

          <ol className="space-y-4 mb-8 list-none">
            <li className="flex items-start gap-3">
              <span className="bg-coral text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <span><strong>Read them aloud in sequence.</strong> Do they sound like the same person wrote them? If you closed your eyes, could you tell they're from the same brand?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-coral text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <span><strong>Check greetings and sign-offs.</strong> Count how many variations you find. More than 2 = inconsistency problem.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-coral text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <span><strong>Compare subject lines.</strong> Screenshot them all in a list. Is there a recognizable pattern, or does it look like 5 different brands?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-coral text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
              <span><strong>Highlight CTAs.</strong> List every CTA button text. Do they follow a consistent energy level for similar email types?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-coral text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
              <span><strong>Score formality.</strong> Rate each email 1-10 on formality. If scores swing more than 3 points between similar email types, you have a voice gap.</span>
            </li>
          </ol>

          {/* Section 4 */}
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-coral" />
            Voice Templates for 5 Common Email Types
          </h2>

          <p className="mb-6">
            Here's how to adapt your voice across different email scenarios without losing consistency. The core personality stays the same — only the energy and formality shift.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border border-border/50 rounded-xl p-6">
              <h4 className="font-bold mb-2">Welcome Email</h4>
              <p className="text-sm text-muted-foreground mb-2">Energy: High · Formality: Low · Goal: Excitement</p>
              <p className="text-muted-foreground">This is your brand's first impression in someone's inbox. Lead with personality. Show them they made the right choice. Skip the feature dump — make them feel something.</p>
            </div>

            <div className="border border-border/50 rounded-xl p-6">
              <h4 className="font-bold mb-2">Product Update / Feature Announcement</h4>
              <p className="text-sm text-muted-foreground mb-2">Energy: Medium-High · Formality: Low-Medium · Goal: Engagement</p>
              <p className="text-muted-foreground">Lead with the benefit, not the feature name. Keep the builder enthusiasm without drowning in technical details. One clear CTA to try it.</p>
            </div>

            <div className="border border-border/50 rounded-xl p-6">
              <h4 className="font-bold mb-2">Newsletter / Digest</h4>
              <p className="text-sm text-muted-foreground mb-2">Energy: Medium · Formality: Medium · Goal: Value</p>
              <p className="text-muted-foreground">Your most "magazine editor" voice. Conversational but substantive. This is where your brand's point of view shines — don't just curate, commentate.</p>
            </div>

            <div className="border border-border/50 rounded-xl p-6">
              <h4 className="font-bold mb-2">Re-engagement / Win-back</h4>
              <p className="text-sm text-muted-foreground mb-2">Energy: Low-Medium · Formality: Low · Goal: Reconnection</p>
              <p className="text-muted-foreground">Honest and human. Acknowledge the silence without guilt-tripping. Give them a genuine reason to come back — or an easy way to leave. Desperation kills brand voice faster than anything.</p>
            </div>

            <div className="border border-border/50 rounded-xl p-6">
              <h4 className="font-bold mb-2">Transactional (Billing, Receipts, Account)</h4>
              <p className="text-sm text-muted-foreground mb-2">Energy: Low · Formality: Medium-High · Goal: Clarity</p>
              <p className="text-muted-foreground">Personality takes a back seat to clarity. But "back seat" doesn't mean "absent." Even a receipt can sound like your brand — it just shouldn't try to be funny about someone's credit card being declined.</p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Putting It Into Practice</h2>

          <p className="mb-4">
            The framework is only useful if your team actually uses it. Here's how to make it stick:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span><strong>Create an email voice cheat sheet.</strong> One page. Greetings, sign-offs, subject line rules, CTA energy levels, and 3 "sounds like us" vs "doesn't sound like us" examples. Pin it wherever your team writes emails.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span><strong>Audit quarterly.</strong> Every 3 months, pull your last 20 emails and run the 5-point checklist above. Voice drifts slowly — you won't notice until you look.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span><strong>Assign a voice owner for email.</strong> One person reviews every email before it goes out — not for typos, but for tone. This is the single most effective thing you can do.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span><strong>Use AI as a consistency check.</strong> Tools like ToneGuide can analyze your emails against your brand voice guidelines and flag when something sounds off — before it hits inboxes.</span>
            </li>
          </ul>

          {/* Closing */}
          <div className="border-t border-border/50 pt-8 mt-12">
            <h2 className="font-serif text-2xl font-bold mb-4">Your Inbox Is a Brand Experience</h2>
            <p className="mb-4">
              Every email you send is a brand touchpoint. Not just the ones marketing writes — every receipt, every password reset, every "your trial is ending" nudge. When they all sound like the same brand, subscribers trust you more. They open more. They click more.
            </p>
            <p className="mb-8">
              Start with the 4-layer framework. Audit what you're sending today. Fix the biggest gaps first. And remember: consistency doesn't mean monotony — it means your brand is recognizable no matter which email someone opens.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-coral/5 to-coral/10 rounded-2xl p-8 text-center mt-8">
            <h3 className="font-serif text-xl font-bold mb-2">Want to audit your brand voice automatically?</h3>
            <p className="text-muted-foreground mb-4">ToneGuide analyzes your content against your brand guidelines and catches inconsistencies before your audience does.</p>
            <Link href="/#waitlist" className="inline-block bg-coral hover:bg-coral-dark text-white rounded-full px-6 py-3 font-medium transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
