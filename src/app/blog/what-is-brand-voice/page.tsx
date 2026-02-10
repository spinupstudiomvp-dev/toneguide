import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Brand Voice? A Complete Guide for Marketing Teams — ToneGuide",
  description: "Learn what brand voice is, why it matters for consistency, and how to define a brand voice that your entire marketing team can follow.",
};

export default function BrandVoiceArticle() {
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
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>
          <Link href="/#waitlist" className="text-sm bg-coral hover:bg-coral-dark text-white rounded-full px-5 py-2">
            Get Early Access
          </Link>
        </div>
      </nav>

      <article className="pt-32 pb-20 max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-coral hover:underline mb-4 inline-block">← Back to Blog</Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span>February 10, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            What Is Brand Voice? A Complete Guide for Marketing Teams
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your brand voice is the personality and emotion infused into every piece of communication. Here&apos;s how to define it, document it, and keep your team consistent.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">What Exactly Is Brand Voice?</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Brand voice is the consistent personality your company expresses through words. It&apos;s not <em>what</em> you say — it&apos;s <em>how</em> you say it. Think of it as the difference between a friend explaining something over coffee and a professor delivering a lecture. The information might be the same, but the experience is completely different.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Your brand voice encompasses your vocabulary choices, sentence structure, humor level, formality, and emotional tone. It shows up in your website copy, social media posts, email campaigns, product descriptions, customer support replies, and even internal communications.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Brand Voice vs. Brand Tone: What&apos;s the Difference?</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Voice stays the same; tone adapts. Your brand voice is your consistent personality — maybe you&apos;re always warm, straightforward, and slightly witty. Your tone shifts based on context: a product launch email might be enthusiastic, while a service outage notice is empathetic and direct.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Think of it this way: you have one voice, but you speak differently at a celebration versus a funeral. The same applies to brands. Defining both gives your team the flexibility to adapt without losing consistency.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Why Brand Voice Matters More Than Ever</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            In a world where companies publish across dozens of channels — social media, email, blog, ads, chatbots, in-app messaging — inconsistency is the default. Multiple writers, agencies, and AI tools all touch your copy. Without a defined voice, your brand starts to sound like it has a split personality.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Research consistently shows that brand consistency increases revenue by 10-20%. Customers trust brands that feel familiar. When your LinkedIn posts sound corporate but your Instagram is casual and your emails are somewhere in between, trust erodes. A strong brand voice builds recognition, loyalty, and differentiation.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">How to Define Your Brand Voice in 4 Steps</h2>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-3">1. Audit Your Current Voice</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Before defining where you want to go, understand where you are. Pull together your best-performing content — the posts that got engagement, the emails with high open rates, the landing pages that converted. What patterns do you see? Are you using short punchy sentences or longer flowing ones? Is there humor? Formality?
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Tools like <Link href="/audit" className="text-coral hover:underline font-medium">ToneGuide&apos;s free brand voice audit</Link> can analyze your website and give you a voice profile in under 60 seconds, mapping where you fall on dimensions like formal vs. casual, serious vs. playful, and authoritative vs. approachable.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-3">2. Define Your Voice Attributes</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Pick 3-5 attributes that describe your brand personality. Common frameworks use spectrums: formal to casual, serious to playful, respectful to irreverent, matter-of-fact to enthusiastic. For each attribute, write a brief description and provide do/don&apos;t examples.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            For example, if one attribute is &quot;Warm but not fluffy,&quot; you might say: <em>Do: &quot;We&apos;re here to help you figure this out.&quot; Don&apos;t: &quot;We&apos;re sooooo excited to be on this journey with you!!!&quot;</em>
          </p>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-3">3. Create a Vocabulary Guide</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Document the specific words and phrases your brand uses — and those it avoids. This is where most voice guides fail: they describe personality in abstract terms but never get specific. Include preferred terms (&quot;customers&quot; vs. &quot;users&quot; vs. &quot;members&quot;), banned words (industry jargon, competitor names, clichés like &quot;game-changing&quot;), and example sentences for common content types.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-8 mb-3">4. Make It Enforceable</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">
            A voice guide sitting in a Google Doc that nobody reads isn&apos;t a voice guide — it&apos;s a wish. The best teams build voice checks into their workflow. This might mean peer review processes, editorial checklists, or automated tools that flag off-brand language before content goes live.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            This is exactly the problem ToneGuide was built to solve: your team pastes content in, gets an instant brand score with specific annotations, and can fix issues before publishing. No more lengthy review cycles or brand police.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Common Brand Voice Mistakes</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            <strong>Being too vague.</strong> &quot;We&apos;re professional yet approachable&quot; describes every brand. Get specific with examples, word lists, and spectrum positions.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            <strong>Ignoring context.</strong> Your voice should flex across channels. A 280-character tweet and a 2,000-word whitepaper need different expressions of the same voice.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            <strong>Not updating.</strong> Brands evolve. Review your voice guidelines quarterly and update them as your audience, product, and market shift.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            <strong>No enforcement.</strong> Guidelines without tooling are suggestions. Build voice checking into your content pipeline so consistency becomes automatic, not aspirational.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-12 mb-4">Getting Started</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Defining your brand voice doesn&apos;t need to be a six-month project. Start with a quick audit of your existing content to see where you stand. Then define 3-5 voice attributes, create a vocabulary list, and put a system in place to check new content against those guidelines.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-8">
            Want to see where your brand voice stands right now? Try our <Link href="/audit" className="text-coral hover:underline font-medium">free brand voice audit</Link> — just enter your website URL and get a detailed analysis in under a minute.
          </p>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-coral/5 border border-coral/10 text-center">
          <h3 className="font-serif text-2xl font-bold mb-3">Ready to keep your brand on-voice?</h3>
          <p className="text-muted-foreground mb-6">Join the waitlist for early access to ToneGuide.</p>
          <Link href="/#waitlist" className="inline-block bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-colors">
            Get Early Access
          </Link>
        </div>
      </article>
    </main>
  );
}
