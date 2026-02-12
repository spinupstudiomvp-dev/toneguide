import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, MessageCircle, Hash, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Adapt Your Brand Voice for Social Media (Without Losing It) — ToneGuide",
  description:
    "Learn how to adapt your brand voice across LinkedIn, Twitter/X, Instagram, and TikTok while staying consistent. Platform-specific tips with real examples.",
  keywords: [
    "brand voice social media",
    "tone of voice social media",
    "brand voice across platforms",
    "social media brand consistency",
    "adapt brand voice",
  ],
  openGraph: {
    title: "How to Adapt Your Brand Voice for Social Media (Without Losing It)",
    description:
      "Platform-specific strategies for maintaining brand voice consistency across LinkedIn, Twitter/X, Instagram, and TikTok.",
  },
};

export default function BrandVoiceSocialMedia() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">ToneGuide</span>
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            February 12, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            8 min read
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          How to Adapt Your Brand Voice for Social Media (Without Losing It)
        </h1>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your brand should sound like the same person everywhere — but not say the same thing the same way everywhere.
          LinkedIn isn&apos;t Twitter. TikTok isn&apos;t your blog. Here&apos;s how to flex your voice across platforms
          without breaking it.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">The Core Problem: Same Voice, Different Rooms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Think about how you talk at a dinner party versus a board meeting. You&apos;re still you — same values,
            same personality, same sense of humor. But you adjust your delivery. Volume, formality, word choice. You
            read the room.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Brands need to do the same thing. The mistake most teams make is one of two extremes: they either copy-paste
            the same content everywhere (and sound robotic on half the platforms), or they let each channel freelance
            (and lose all consistency). Neither works.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The solution is a <strong>voice system</strong> — a core identity that stays fixed, with dials you turn
            up or down depending on the platform.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-coral" />
            Step 1: Define What Doesn&apos;t Change
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before you adapt anything, lock in your non-negotiables. These are the voice traits that stay constant
            no matter where you show up:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Values:</strong> What you stand for (transparency, simplicity, boldness)</li>
            <li><strong>Personality traits:</strong> 3-4 adjectives that define how you sound (witty, direct, warm)</li>
            <li><strong>Vocabulary boundaries:</strong> Words you always use and words you never use</li>
            <li><strong>Point of view:</strong> How you see your industry and your role in it</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If someone reads your LinkedIn post and your TikTok caption back-to-back, they should feel the same
            brand behind both — even if the format is completely different.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <Hash className="w-6 h-6 text-coral" />
            Step 2: Map Your Voice Dials per Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Now identify the dimensions you&apos;ll adjust. Think of these as sliders, not switches:
          </p>

          <div className="bg-muted/30 rounded-xl p-6 mb-6 space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-1">Formality</p>
              <p className="text-muted-foreground text-sm">LinkedIn: 7/10 → Twitter: 4/10 → TikTok: 2/10</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Humor</p>
              <p className="text-muted-foreground text-sm">LinkedIn: 3/10 → Twitter: 7/10 → TikTok: 9/10</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Depth</p>
              <p className="text-muted-foreground text-sm">LinkedIn: 8/10 → Twitter: 4/10 → Instagram: 3/10</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Emoji usage</p>
              <p className="text-muted-foreground text-sm">LinkedIn: minimal → Instagram: moderate → TikTok: heavy</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Document these settings for your team. When a new writer asks &ldquo;how should I write for our
            Instagram?&rdquo; the answer is in the system, not in someone&apos;s head.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-coral" />
            Platform-by-Platform Breakdown
          </h2>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">LinkedIn: The Thought Leader</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            LinkedIn rewards expertise and substance. Your voice here should be confident but not arrogant,
            insightful but not academic. First-person works well. Hot takes work if they&apos;re backed by experience.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Longer posts perform well — 800-1,200 characters is the sweet spot</li>
            <li>Open with a hook that stops the scroll (contrarian take, surprising stat, personal story)</li>
            <li>Use line breaks liberally — walls of text die on LinkedIn</li>
            <li>Skip hashtags in the body; add 3-5 at the end if you want reach</li>
          </ul>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">Twitter/X: The Sharp Conversationalist</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Twitter rewards clarity and compression. Every word earns its place. Your brand voice gets distilled
            to its purest form here — if you can&apos;t sound like yourself in 280 characters, your voice
            isn&apos;t defined clearly enough.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>One idea per tweet. That&apos;s it.</li>
            <li>Threads let you go deep, but each tweet should stand alone</li>
            <li>Replies and quote tweets are where personality shines — don&apos;t just broadcast</li>
            <li>Humor and strong opinions travel further than safe corporate messaging</li>
          </ul>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">Instagram: The Visual Storyteller</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Instagram is visual-first, but captions still matter — especially for carousels and Reels. Your voice
            here should be warmer, more relatable, and slightly more casual than LinkedIn.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Front-load the caption — only the first 125 characters show before &ldquo;more&rdquo;</li>
            <li>Carousel text IS your voice — write it like mini-blog slides, not bullet points</li>
            <li>Stories are the most casual touchpoint — this is where personality lives</li>
            <li>CTAs should feel like suggestions, not demands</li>
          </ul>

          <h3 className="font-serif text-xl font-bold mt-8 mb-3">TikTok: The Unfiltered Human</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TikTok is the hardest platform for brands because it punishes anything that feels like marketing.
            Your voice here needs to sound like a person, not a logo. That doesn&apos;t mean abandoning your brand —
            it means turning the &ldquo;human&rdquo; dial to maximum.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Speak like your audience speaks — mirror their language and cadence</li>
            <li>Self-awareness and humor are non-negotiable</li>
            <li>Trends are participation invitations — use them to express your brand, not just chase views</li>
            <li>Captions are short; the video does the voice work</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">The Cross-Platform Consistency Check</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            How do you know your voice is actually consistent across platforms? Run this quick test:
          </p>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Pull one recent post from each platform</li>
            <li>Remove all platform context (no logos, no usernames)</li>
            <li>Show them to someone outside your team</li>
            <li>Ask: &ldquo;Do these sound like the same brand?&rdquo;</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If the answer is &ldquo;no&rdquo; — you have a voice problem, not a content problem. Go back to Step 1
            and tighten your non-negotiables.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Common Mistakes (and How to Fix Them)</h2>

          <blockquote className="border-l-4 border-coral/30 pl-6 my-6 italic text-muted-foreground">
            &ldquo;We sound professional on LinkedIn and completely unhinged on Twitter.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>The fix:</strong> Casual doesn&apos;t mean chaotic. Define the <em>boundaries</em> of your
            humor and informality. &ldquo;We&apos;re witty, never sarcastic. We poke fun at problems, never people.&rdquo;
            That&apos;s a guardrail that lets your team be creative without going off-brand.
          </p>

          <blockquote className="border-l-4 border-coral/30 pl-6 my-6 italic text-muted-foreground">
            &ldquo;Our social content sounds nothing like our website.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>The fix:</strong> Your website is usually written by a different team (or agency) than your social.
            The voice profile needs to be the shared reference point for both. Run regular audits across all
            touchpoints — not just social channels in isolation.
          </p>

          <blockquote className="border-l-4 border-coral/30 pl-6 my-6 italic text-muted-foreground">
            &ldquo;We just repost our blog content as social posts.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>The fix:</strong> Repurposing is smart. Copy-pasting isn&apos;t. Take the <em>idea</em> from the blog
            and rewrite it native to each platform. Same insight, different packaging. That&apos;s adaptation, not laziness.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Build Your Platform Voice Guide</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Here&apos;s what to document for each platform your brand is active on:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Audience on this platform:</strong> Who are they and what do they expect?</li>
            <li><strong>Voice dial settings:</strong> Formality, humor, depth, emoji usage</li>
            <li><strong>Content types:</strong> What formats work here (threads, carousels, stories)?</li>
            <li><strong>3 example posts:</strong> On-brand samples for writers to reference</li>
            <li><strong>Red lines:</strong> What never works on this platform for your brand</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This becomes a one-page cheat sheet per platform. New writers can pick it up and produce on-brand
            content from day one — without guessing.
          </p>

          <div className="mt-16 p-8 bg-coral/5 rounded-2xl border border-coral/10">
            <h3 className="font-serif text-xl font-bold mb-3">Not sure if your voice carries across platforms?</h3>
            <p className="text-muted-foreground mb-6">
              Run a free brand voice audit on your website — then compare it against your social channels.
              You&apos;ll spot the gaps in under 60 seconds.
            </p>
            <Link href="/audit">
              <Button className="bg-coral hover:bg-coral-dark text-white rounded-full px-6">
                Run Free Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
