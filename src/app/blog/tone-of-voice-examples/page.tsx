import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "12 Tone of Voice Examples From Brands That Nail It — ToneGuide",
  description:
    "See 12 real tone of voice examples from brands like Mailchimp, Apple, Slack, and Innocent. Learn what makes each voice work and how to build your own.",
  openGraph: {
    title: "12 Tone of Voice Examples From Brands That Nail It",
    description:
      "Real-world tone of voice examples broken down. See what makes Mailchimp, Apple, Slack, and others sound like themselves.",
  },
};

export default function ToneOfVoiceExamplesPost() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <header className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-4">
            12 Tone of Voice Examples From Brands That Nail It
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              February 10, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-coral prose-a:no-underline hover:prose-a:underline">
          <p>
            Your tone of voice isn&apos;t what you say — it&apos;s <em>how</em> you say it. The best brands
            are instantly recognizable by their writing alone. No logo needed.
          </p>
          <p>
            Here are 12 brands with distinctive tones of voice, broken down so you can learn from each one.
          </p>

          <h2>1. Mailchimp — Friendly but Not Silly</h2>
          <p>
            Mailchimp&apos;s voice is warm, casual, and human. They use plain language, contractions, and
            the occasional dry joke. But they never sacrifice clarity for humor.
          </p>
          <p>
            <strong>What works:</strong> They wrote an entire voice &amp; tone guide that distinguishes
            between voice (constant personality) and tone (varies by context). Error messages are
            empathetic. Marketing copy is upbeat. Documentation is clear.
          </p>
          <blockquote>&ldquo;We&apos;re serious about helping you grow, but we don&apos;t take ourselves too seriously.&rdquo;</blockquote>

          <h2>2. Apple — Simple, Declarative, Confident</h2>
          <p>
            Apple writes in short sentences. Active voice. No hedging. They describe products in terms of
            experience, not specifications. Every word earns its place.
          </p>
          <p>
            <strong>What works:</strong> &ldquo;iPhone 15 Pro. Forged in titanium.&rdquo; — six words that
            communicate premium, innovation, and craftsmanship. No fluff.
          </p>

          <h2>3. Slack — Conversational and Clever</h2>
          <p>
            Slack sounds like a smart coworker who&apos;s fun to be around. Casual without being
            unprofessional. They lean into workplace humor and everyday language.
          </p>
          <p>
            <strong>What works:</strong> Microcopy throughout the product that makes mundane moments
            feel human. Loading messages, empty states, and error screens all have personality.
          </p>

          <h2>4. Innocent Drinks — Quirky and Self-Aware</h2>
          <p>
            Innocent pushes playful to the edge. They use lowercase, self-deprecating humor, and
            conversational asides. Their packaging reads like a friend texting you.
          </p>
          <p>
            <strong>What works:</strong> Total consistency. The same voice appears on bottles, social media,
            job postings, and annual reports. It never breaks character.
          </p>

          <h2>5. Stripe — Technical but Accessible</h2>
          <p>
            Stripe writes for developers without talking down to anyone. Clear, precise, and surprisingly
            elegant for a payments company. Their docs are industry-leading.
          </p>
          <p>
            <strong>What works:</strong> They prove &ldquo;technical&rdquo; and &ldquo;readable&rdquo;
            aren&apos;t opposites. Complex concepts explained simply, with real code examples.
          </p>

          <h2>6. Nike — Bold, Motivational, Direct</h2>
          <p>
            Nike speaks in commands. Short imperatives. Emotional triggers. They make you feel like an
            athlete whether you&apos;re running a marathon or buying sneakers.
          </p>
          <p>
            <strong>What works:</strong> &ldquo;Just Do It&rdquo; isn&apos;t just a tagline — it&apos;s the
            DNA of every piece of copy. Product descriptions read like pep talks.
          </p>

          <h2>7. Oatly — Rebellious and Irreverent</h2>
          <p>
            Oatly is the brand that puts &ldquo;This tastes like sh*t!&rdquo; on a billboard — from their
            own CEO&apos;s first reaction. They break rules, address the reader directly, and use their
            packaging as a comedy stage.
          </p>
          <p>
            <strong>What works:</strong> Extreme authenticity. Their transparency about their product
            (and its limitations) builds more trust than any polished claim.
          </p>

          <h2>8. Notion — Clean, Calm, Empowering</h2>
          <p>
            Notion&apos;s voice matches its product: minimal, thoughtful, and organized. They avoid
            hype and let the product speak. When they do write, it&apos;s crisp and encouraging.
          </p>
          <p>
            <strong>What works:</strong> Alignment between product experience and brand voice. The UI
            feels like the copy reads — spacious, intentional, focused.
          </p>

          <h2>9. Patagonia — Purpose-Driven and Earnest</h2>
          <p>
            Patagonia writes like activists who happen to sell jackets. Their copy is serious about
            environmental impact, specific about materials, and unapologetically political.
          </p>
          <p>
            <strong>What works:</strong> &ldquo;Don&apos;t Buy This Jacket&rdquo; (Black Friday 2011) is
            one of the most famous ads ever. It works because the voice is consistent everywhere — it&apos;s
            not a stunt, it&apos;s their actual position.
          </p>

          <h2>10. Duolingo — Playful, Gamified, Slightly Unhinged</h2>
          <p>
            Duolingo mastered the art of being annoying in a lovable way. Push notifications, social
            media, and in-app copy all share the same mischievous personality, anchored by their
            chaotic owl mascot.
          </p>
          <p>
            <strong>What works:</strong> They lean into internet culture without forcing it. Their TikTok
            presence feels native because the brand voice was already meme-adjacent.
          </p>

          <h2>11. The Economist — Witty, Intellectual, Understated</h2>
          <p>
            The Economist assumes intelligence. Their headlines use wordplay, their analysis is dry, and
            they never explain the joke. It&apos;s a voice that flatters the reader.
          </p>
          <p>
            <strong>What works:</strong> The red-and-white ad campaign (&ldquo;I never read The Economist.
            — Management trainee. Aged 42.&rdquo;) is decades old and still brilliant. The voice hasn&apos;t
            changed because it didn&apos;t need to.
          </p>

          <h2>12. Basecamp — Opinionated and Direct</h2>
          <p>
            Basecamp has opinions and isn&apos;t afraid to share them. Their copy is conversational,
            their blog posts are essays, and they regularly challenge industry norms.
          </p>
          <p>
            <strong>What works:</strong> A strong founder voice (Jason Fried / DHH) that permeates the
            entire brand. You know where they stand before you read the second paragraph.
          </p>

          <h2>What These Brands Have in Common</h2>
          <p>
            Every brand on this list shares three traits:
          </p>
          <ol>
            <li><strong>Consistency</strong> — The voice doesn&apos;t change between channels.</li>
            <li><strong>Intentionality</strong> — The tone is a deliberate choice, not an accident.</li>
            <li><strong>Alignment</strong> — The voice matches the product and audience expectations.</li>
          </ol>

          <h2>Find Your Own Tone of Voice</h2>
          <p>
            Want to see where your brand stands? Run a free{" "}
            <Link href="/audit" className="text-coral hover:underline">
              tone of voice audit
            </Link>{" "}
            — we&apos;ll analyze your website and show you exactly how your brand sounds today.
          </p>
          <p>
            Then use <Link href="/" className="text-coral hover:underline">ToneGuide</Link> to keep
            your team writing in that voice, every time.
          </p>
        </div>
      </article>
    </main>
  );
}
