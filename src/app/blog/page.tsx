import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — ToneGuide",
  description: "Insights on brand voice, tone consistency, and marketing strategy from ToneGuide.",
};

const posts = [
  {
    slug: "brand-voice-email-marketing",
    title: "How to Keep Your Brand Voice Consistent in Email Marketing",
    excerpt: "Your emails sound like they come from 5 different companies. Here's a practical framework for maintaining brand voice consistency across every email — from welcome sequences to re-engagement campaigns.",
    date: "February 13, 2026",
    readTime: "8 min read",
  },
  {
    slug: "train-writers-brand-voice",
    title: "How to Train New Writers on Your Brand Voice (Fast)",
    excerpt: "A practical playbook for onboarding freelancers, new hires, and agency writers on your brand voice — so every piece sounds like it came from your team.",
    date: "February 13, 2026",
    readTime: "8 min read",
  },
  {
    slug: "brand-voice-social-media",
    title: "How to Adapt Your Brand Voice for Social Media (Without Losing It)",
    excerpt: "Learn how to adapt your brand voice across LinkedIn, Twitter/X, Instagram, and TikTok while staying consistent. Platform-specific tips with real examples.",
    date: "February 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "brand-voice-ai-tools",
    title: "Best AI Tools for Brand Voice Consistency (2026 Guide)",
    excerpt: "Compare the best AI tools that help marketing teams maintain brand voice consistency across all channels. From tone checkers to style guides — find the right fit.",
    date: "February 11, 2026",
    readTime: "8 min read",
  },
  {
    slug: "brand-voice-guidelines-template",
    title: "Brand Voice Guidelines Template (Free & Ready to Use)",
    excerpt: "Get a free brand voice guidelines template with 7 essential sections. Define your tone, vocabulary, and writing rules so your entire team stays on-brand.",
    date: "February 11, 2026",
    readTime: "9 min read",
  },
  {
    slug: "how-to-audit-brand-voice",
    title: "How to Audit Your Brand Voice in 15 Minutes (Free Tool)",
    excerpt: "Step-by-step guide to auditing your brand voice. Find inconsistencies across channels, strengthen your tone, and get a free AI-powered report.",
    date: "February 11, 2026",
    readTime: "7 min read",
  },
  {
    slug: "tone-of-voice-examples",
    title: "12 Tone of Voice Examples From Brands That Nail It",
    excerpt: "See 12 real tone of voice examples from brands like Mailchimp, Apple, Slack, and Innocent. Learn what makes each voice work and how to build your own.",
    date: "February 10, 2026",
    readTime: "8 min read",
  },
  {
    slug: "brand-voice-consistency-tips",
    title: "7 Brand Voice Consistency Tips That Actually Work",
    excerpt: "Struggling with inconsistent brand messaging? These 7 actionable tips help marketing teams maintain a unified voice across every channel, writer, and campaign.",
    date: "February 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "brand-voice-audit-guide",
    title: "How to Do a Brand Voice Audit (Step-by-Step Guide)",
    excerpt: "A practical five-step process to audit your brand voice, identify inconsistencies across channels, and build an action plan for stronger tone consistency.",
    date: "February 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "what-is-brand-voice",
    title: "What Is Brand Voice? A Complete Guide for Marketing Teams",
    excerpt: "Learn what brand voice is, why it matters, and how to define one that keeps your entire team on-message across every channel.",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
];

export default function BlogIndex() {
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
            <Link href="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors font-medium text-foreground">Blog</Link>
          </div>
          <Link href="/#waitlist" className="text-sm bg-coral hover:bg-coral-dark text-white rounded-full px-5 py-2">
            Get Early Access
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg mb-12">Insights on brand voice, tone consistency, and marketing strategy.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="p-8 rounded-2xl border border-border/50 bg-white hover:shadow-lg hover:shadow-coral/5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl font-bold mb-3 group-hover:text-coral transition-colors">{post.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center text-coral font-medium text-sm">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
