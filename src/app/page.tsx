"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquare,
  Image as ImageIcon,
  BarChart3,
  Upload,
  Sparkles,
  Zap,
  Shield,
  ChevronRight,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">
            ToneGuide
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Log In</a>
          <a href="#waitlist">
            <Button size="sm" className="bg-coral hover:bg-coral-dark text-white rounded-full px-5">
              Get Early Access
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function AuditCTA() {
  const [url, setUrl] = useState("");
  return (
    <section className="py-16 md:py-24 bg-coral/5 border-y border-coral/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 text-xs font-medium bg-coral-light text-coral-dark border-0">
          <Sparkles className="w-3 h-3 mr-1.5" />
          Free tool — no signup required
        </Badge>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Audit Your <span className="text-coral">Brand Voice</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Enter your website URL and we&apos;ll reverse-engineer your tone of voice in under 60 seconds. Completely free.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (url.trim()) window.location.href = `/audit?url=${encodeURIComponent(url.trim())}`;
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <Input
            type="text"
            placeholder="yourcompany.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-12 rounded-full px-5 bg-white border-border/50 flex-1"
          />
          <Button type="submit" className="bg-coral hover:bg-coral-dark text-white rounded-full h-12 px-8 shrink-0">
            Audit My Voice
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-xs font-medium bg-coral-light text-coral-dark border-0">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Brand voice AI for agencies
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your brand voice,{" "}
            <span className="text-coral">always on.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Stop spending hours reviewing every asset for brand consistency.
            ToneGuide checks content against your voice guidelines in seconds —
            so your team stays on-brand without slowing down.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#waitlist">
              <Button size="lg" className="bg-coral hover:bg-coral-dark text-white rounded-full px-8 h-12 text-base">
                Get Early Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base text-muted-foreground">
                See How It Works
              </Button>
            </a>
          </div>
        </div>

        {/* Product Mock */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-white shadow-2xl shadow-black/5 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40 bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-amber-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
              <span className="ml-3 text-xs text-muted-foreground">ToneGuide — Brand Check</span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40">
              {/* Left: Editor */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs rounded-full">Social Post</Badge>
                  <Badge variant="outline" className="text-xs rounded-full border-coral/30 text-coral">Checking…</Badge>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-foreground">
                    🚀 Excited to announce our{" "}
                    <span className="bg-amber-100 text-amber-800 px-1 rounded underline decoration-wavy decoration-amber-400">
                      game-changing
                    </span>{" "}
                    new product launch! This is going to{" "}
                    <span className="bg-red-100 text-red-700 px-1 rounded underline decoration-wavy decoration-red-400">
                      disrupt the industry
                    </span>{" "}
                    and transform how teams collaborate.
                  </p>
                  <p className="text-muted-foreground text-xs mt-4 italic">
                    ⚠️ &quot;game-changing&quot; — Banned phrase. Try: &quot;innovative&quot; or &quot;breakthrough&quot;
                  </p>
                  <p className="text-muted-foreground text-xs italic">
                    ⚠️ &quot;disrupt the industry&quot; — Too aggressive for your brand voice. Try a warmer tone.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-4 border-amber-400 flex items-center justify-center">
                      <span className="text-sm font-bold text-amber-600">68</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Brand<br/>Score</span>
                  </div>
                </div>
              </div>
              {/* Right: Chat */}
              <div className="p-6 md:p-8 bg-muted/10">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-4 h-4 text-coral" />
                  <span className="text-sm font-medium">Copilot</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-xl px-4 py-3 text-sm max-w-[85%]">
                    Can you rewrite this post in our brand voice?
                  </div>
                  <div className="bg-coral/10 rounded-xl px-4 py-3 text-sm max-w-[85%] ml-auto">
                    <p className="text-coral-dark font-medium text-xs mb-1">ToneGuide</p>
                    Here&apos;s a warmer version: &quot;We&apos;re thrilled to share something new — a fresh way for teams to work together, built with care.&quot;
                  </div>
                  <div className="bg-muted/50 rounded-xl px-4 py-3 text-sm max-w-[85%]">
                    Perfect! Does it pass the brand check now?
                  </div>
                  <div className="bg-coral/10 rounded-xl px-4 py-3 text-sm max-w-[85%] ml-auto">
                    <p className="text-coral-dark font-medium text-xs mb-1">ToneGuide</p>
                    ✅ Score: 94/100. On-brand and ready to publish.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Voice Profile",
      description:
        "AI-powered analysis of your brand guidelines. See your voice as a visual radar chart — formal vs casual, serious vs playful — and share it with your whole team.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Check",
      description:
        "Paste any content — ad copy, emails, social posts — and get an instant brand score with line-by-line annotations. Catch off-brand language before it ships.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Copilot Chat",
      description:
        "Ask for rewrites, generate on-brand copy from scratch, or check if a headline works. It knows your brand voice inside and out.",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Image Check",
      description:
        "Upload design comps and screenshots. ToneGuide extracts the text and checks it against your guidelines. No more manual copy-pasting.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything your team needs to stay on-voice
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From automated content checks to an AI copilot that knows your brand — ToneGuide keeps everyone aligned.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-border/50 bg-white hover:shadow-lg hover:shadow-coral/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center text-coral mb-5 group-hover:bg-coral group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-8 h-8" />,
      title: "Upload your guidelines",
      description:
        "Drop in your brand docs, tone of voice guide, and example copy. ToneGuide reads everything and builds a voice profile.",
    },
    {
      number: "02",
      icon: <Zap className="w-8 h-8" />,
      title: "Check any content",
      description:
        "Your team pastes or uploads content. In seconds, they get a score, annotations, and rewrite suggestions — all tuned to your brand.",
    },
    {
      number: "03",
      icon: <Shield className="w-8 h-8" />,
      title: "Stay consistent at scale",
      description:
        "Every team member writes on-brand, every time. Track consistency scores across your team and watch quality improve.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Three steps to brand consistency
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Set up once. Your team stays on-brand forever.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-6">
                <span className="text-coral">{step.icon}</span>
              </div>
              <div className="font-serif text-sm text-coral font-semibold mb-2">{step.number}</div>
              <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    {
      quote: "We used to spend 3 hours reviewing every campaign for brand consistency. Now it takes 10 minutes.",
      name: "Sarah Chen",
      role: "Creative Director",
      company: "Wildfire Agency",
    },
    {
      quote: "Our client teams actually started following the brand guidelines because ToneGuide made it effortless.",
      name: "Marcus Rivera",
      role: "Brand Strategist",
      company: "Northstar Creative",
    },
    {
      quote: "The copilot is incredible. It's like having a brand manager available 24/7 for every team member.",
      name: "Emma Johansson",
      role: "Head of Content",
      company: "Luminary Group",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 text-xs font-medium bg-coral-light text-coral-dark border-0">
            Trusted by agencies
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
            Loved by brand teams
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-white border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-foreground leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const joinWaitlist = useMutation(api.waitlist.join);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      await joinWaitlist({ email });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 bg-warm">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Ready to keep your brand on-voice?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Join the waitlist for early access. We&apos;re onboarding agencies now.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-coral-dark bg-coral-light rounded-full px-6 py-4 mx-auto max-w-md">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="you@agency.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-full px-5 bg-white border-border/50"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-coral hover:bg-coral-dark text-white rounded-full h-12 px-8 shrink-0"
            >
              {loading ? "Joining…" : "Join Waitlist"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}
        {error && (
          <p className="text-red-500 text-sm mt-3">{error}</p>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-coral flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-serif text-lg font-bold">ToneGuide</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 ToneGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AuditCTA />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
