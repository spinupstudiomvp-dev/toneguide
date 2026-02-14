import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, RefreshCw, AlertTriangle, CheckCircle2, Target, Layers, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Update Your Brand Voice During a Rebrand (Without Losing Trust) — ToneGuide",
  description:
    "A step-by-step guide to evolving your brand voice during a rebrand. Learn how to shift tone, update guidelines, and transition your audience without losing what made your brand recognizable.",
  keywords: [
    "brand voice rebrand",
    "update brand voice",
    "rebrand tone of voice",
    "brand voice evolution",
    "change brand voice",
    "rebrand communication strategy",
    "brand voice transition",
  ],
  openGraph: {
    title: "How to Update Your Brand Voice During a Rebrand (Without Losing Trust)",
    description:
      "A step-by-step guide to evolving your brand voice during a rebrand without losing audience trust.",
    type: "article",
    publishedTime: "2026-02-14T06:00:00Z",
  },
};

export default function BrandVoiceRebrandPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            How to Update Your Brand Voice During a Rebrand (Without Losing Trust)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> February 14, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 9 min read
            </span>
          </div>
        </header>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A rebrand is exciting — new logo, new colors, new energy. But most teams obsess over the
            visual identity and treat voice as an afterthought. Then the awkward reality hits: your
            website sounds completely different from your emails, your social posts feel off, and
            loyal customers wonder if they&apos;re dealing with the same company.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your brand voice is your most intimate touchpoint with customers. Change it wrong, and
            you break trust. Change it right, and you strengthen it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide walks you through how to evolve your brand voice during a rebrand — step by
            step — so you come out the other side sounding intentional, not confused.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Why Most Rebrands Break Brand Voice
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The typical rebrand timeline looks like this: hire an agency, spend months on visual
            identity, then rush the verbal identity in the last two weeks. The result is a beautiful
            brand book with a two-paragraph &quot;tone of voice&quot; section that nobody reads.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&apos;s what goes wrong:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">•</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">No voice audit before the rebrand.</strong> Teams
                don&apos;t document what their current voice actually sounds like, so they can&apos;t
                make deliberate decisions about what to keep vs. change.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">•</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">Visual-first thinking.</strong> The new brand
                identity drives everything. Voice gets reverse-engineered from mood boards instead of
                strategy.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">•</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">No transition plan.</strong> The old voice disappears
                overnight. Customers wake up to a completely different tone with zero context.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">•</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">Inconsistent rollout.</strong> Marketing updates
                first. Support tickets still sound like the old brand three months later.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <Target className="w-6 h-6 text-blue-500" />
            Step 1: Audit Your Current Voice Before You Change Anything
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before deciding where you&apos;re going, you need to know where you are. Pull samples
            from every channel — website, emails, social, support, sales decks — and map your
            current voice across these dimensions:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Formality spectrum</strong> — Where do you fall
                between casual and corporate?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Emotional range</strong> — Are you warm, neutral,
                or authoritative?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Vocabulary patterns</strong> — Industry jargon,
                plain language, slang?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Sentence structure</strong> — Short and punchy, or
                long and explanatory?
              </span>
            </li>
          </ul>
          <blockquote className="border-l-4 border-blue-200 pl-4 py-2 my-6 bg-blue-50 rounded-r-lg">
            <p className="text-gray-700 italic">
              Tools like <Link href="/" className="text-blue-600 hover:underline">ToneGuide</Link> can
              run this audit automatically — analyzing your content across channels and giving you a
              baseline voice profile before you start making changes.
            </p>
          </blockquote>
          <p className="text-gray-600 leading-relaxed">
            This audit serves two purposes: it reveals inconsistencies you already have (and should
            fix regardless), and it gives you a concrete baseline to evolve from.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <Layers className="w-6 h-6 text-purple-500" />
            Step 2: Decide What Stays, What Shifts, What Goes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A rebrand rarely means a complete voice overhaul. In most cases, you&apos;re adjusting
            the dial — not flipping the switch. Categorize your voice attributes into three buckets:
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-1">🟢 Keep</h3>
              <p className="text-green-800 text-sm">
                Voice traits your audience loves and associates with you. These are your brand&apos;s
                verbal DNA. Examples: humor in support tickets, straightforward product explanations,
                that specific way you open emails.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-1">🟡 Shift</h3>
              <p className="text-amber-800 text-sm">
                Traits that need to evolve to match your new positioning. Maybe you&apos;re moving
                upmarket and need to dial down the slang. Or you&apos;re becoming more approachable
                and need to drop the corporate speak.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-1">🔴 Drop</h3>
              <p className="text-red-800 text-sm">
                Habits that no longer serve you. Maybe you&apos;ve outgrown the startup snark. Maybe
                the industry jargon is alienating new customers. These go completely.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The key insight: your audience can handle evolution. They can&apos;t handle a personality
            transplant. If you keep 60-70% of your voice DNA intact, the shift feels natural rather
            than jarring.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <MessageSquare className="w-6 h-6 text-indigo-500" />
            Step 3: Build Your New Voice Guidelines (With Before/After Examples)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Generic voice guidelines (&quot;We are bold, innovative, and human&quot;) are useless.
            Every brand claims those words. What works is showing the difference in practice.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For every voice attribute in your new guidelines, include:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold mt-0.5">1.</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">The principle</strong> — What it means in one
                sentence.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold mt-0.5">2.</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">Old voice example</strong> — How you used to write
                it.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold mt-0.5">3.</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">New voice example</strong> — How you write it now.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold mt-0.5">4.</span>
              <span className="text-gray-600">
                <strong className="text-gray-900">Common mistakes</strong> — Where writers tend to
                overdo or underdo the new direction.
              </span>
            </li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
            <p className="text-sm font-mono text-gray-500 mb-2">Example: &quot;Confident, not arrogant&quot;</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">Old voice</p>
                <p className="text-gray-700 text-sm italic">&quot;We&apos;re the only platform you&apos;ll ever need. Nobody else even comes close.&quot;</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">New voice</p>
                <p className="text-gray-700 text-sm italic">&quot;Teams ship faster with our platform. Here&apos;s how we compare on what matters.&quot;</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Watch out for</p>
                <p className="text-gray-700 text-sm italic">Don&apos;t swing too far into hedging (&quot;We think we might be good at...&quot;). Confidence without the chest-beating.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            These before/after examples are gold for writer onboarding. They make the difference
            tangible instead of abstract. Create at least 8-10 covering your most common content
            types.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <RefreshCw className="w-6 h-6 text-teal-500" />
            Step 4: Roll Out in Phases (Not All at Once)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The biggest mistake teams make is flipping the switch on launch day. One day you sound
            like a startup, the next day you sound like McKinsey. Instead, use a phased rollout:
          </p>
          <div className="space-y-4 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Internal alignment (2-4 weeks before launch)</h3>
              <p className="text-gray-600 text-sm">
                Train all writers and content creators on the new guidelines. Run workshops where
                people rewrite existing content in the new voice. Catch misinterpretations early.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 2: High-visibility content (launch day)</h3>
              <p className="text-gray-600 text-sm">
                Update your website, main landing pages, and social profiles. These are the first
                things people see. Get these right and the rest can follow.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 3: Operational content (weeks 1-4)</h3>
              <p className="text-gray-600 text-sm">
                Update email templates, help docs, chatbot scripts, onboarding flows, and sales
                materials. These have the highest volume of touchpoints.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 4: Long-tail content (months 1-3)</h3>
              <p className="text-gray-600 text-sm">
                Blog archives, PDF resources, partner materials, and internal docs. These matter but
                aren&apos;t urgent. Schedule a content sweep for each category.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This phased approach also gives you time to spot problems. If the new voice isn&apos;t
            landing well in email, you can adjust before rolling it out to support.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <Zap className="w-6 h-6 text-yellow-500" />
            Step 5: Monitor and Adjust Post-Launch
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your new voice is a hypothesis, not a finished product. After launch, track these
            signals:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Engagement metrics</strong> — Are open rates, click
                rates, and social engagement improving or declining?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Customer feedback</strong> — Direct comments about
                tone, support satisfaction scores, social sentiment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Internal consistency</strong> — Are all teams
                actually using the new voice, or are pockets still writing in the old style?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-900">Writer confidence</strong> — Do your content
                creators feel equipped, or are they second-guessing every sentence?
              </span>
            </li>
          </ul>
          <blockquote className="border-l-4 border-teal-200 pl-4 py-2 my-6 bg-teal-50 rounded-r-lg">
            <p className="text-gray-700 italic">
              Set up regular voice audits — monthly for the first quarter, quarterly after that. Use
              automated tools to flag drift before it becomes a pattern. A tool
              like <Link href="/" className="text-blue-600 hover:underline">ToneGuide</Link> can
              track consistency across channels and alert you when content starts veering off.
            </p>
          </blockquote>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Real Talk: When a Full Voice Overhaul Actually Makes Sense
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sometimes incremental evolution isn&apos;t enough. A complete voice reset is justified when:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-gray-600">
                You&apos;re entering an entirely new market (B2C to B2B, or vice versa)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-gray-600">
                Your brand has reputation damage and needs a clean break
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-gray-600">
                You&apos;ve merged with another company and need a unified voice
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-gray-600">
                Your current voice actively repels your target audience
              </span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            In these cases, skip the gradual transition. Acknowledge the change openly with your
            audience. A blog post, an email, or even a social thread explaining &quot;here&apos;s
            what&apos;s changing and why&quot; builds more trust than a silent overnight swap.
          </p>
        </section>

        {/* Bottom Line */}
        <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Bottom Line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A rebrand is your chance to refine your voice — not reinvent it from scratch. The brands
            that handle it best follow a simple pattern: audit what you have, decide what shifts,
            document it with examples, roll out in phases, and monitor the results.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your customers fell in love with a voice, not a logo. Respect that relationship, evolve
            deliberately, and your rebrand will strengthen trust instead of breaking it.
          </p>
        </section>

        {/* Footer nav */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link
              href="/blog"
              className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> All posts
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Audit your brand voice free <Zap className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
