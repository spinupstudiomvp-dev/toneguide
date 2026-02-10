import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — ToneGuide",
  description: "Insights on brand voice, tone consistency, and marketing strategy from ToneGuide.",
};

const posts = [
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
