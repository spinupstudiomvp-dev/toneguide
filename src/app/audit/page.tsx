"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Loader2 } from "lucide-react";
import AuditReport from "@/components/AuditReport";
import { AuditData } from "@/lib/tone-analysis";

const PROGRESS_STEPS = [
  "Finding your website...",
  "Reading your homepage...",
  "Discovering linked pages...",
  "Scanning about & blog pages...",
  "Looking for social channels...",
  "Analyzing your content...",
  "Reverse-engineering your voice...",
  "Generating your voice profile...",
];

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditData | null>(null);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setStep((s) => (s < PROGRESS_STEPS.length - 1 ? s + 1 : s));
    }, 4000);
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setStep(0);
    setResult(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setResult(data);
        // Save to localStorage for sharing
        try {
          const saved = JSON.parse(localStorage.getItem("toneAudits") || "{}");
          saved[data.id] = data;
          localStorage.setItem("toneAudits", JSON.stringify(saved));
        } catch {}
        // Update URL without reload
        window.history.pushState({}, "", `/audit/${data.id}`);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <main className="min-h-screen bg-background">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">ToneGuide</span>
            </a>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => { setResult(null); setUrl(""); }}
            >
              Run New Audit
            </Button>
          </div>
        </nav>
        <div className="pt-24 pb-20 px-6">
          <AuditReport data={result} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">ToneGuide</span>
          </a>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center">
          {!loading ? (
            <>
              <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Audit Your <span className="text-coral">Brand Voice</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-10">
                Enter your website URL and we&apos;ll reverse-engineer your tone of voice in under 60 seconds. It&apos;s free.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="yourcompany.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-14 pl-11 rounded-full bg-white border-border/50 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-coral hover:bg-coral-dark text-white rounded-full h-14 px-8 text-base shrink-0"
                >
                  Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              <p className="text-xs text-muted-foreground mt-6">No signup required. Results are instant and shareable.</p>
            </>
          ) : (
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-coral/10 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-coral animate-spin" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Analyzing {url}...</h2>
              <div className="space-y-3 text-left max-w-sm mx-auto">
                {PROGRESS_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 text-sm transition-all duration-500 ${
                      i <= step ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {i < step ? (
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    ) : i === step ? (
                      <Loader2 className="w-5 h-5 text-coral animate-spin" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-muted" />
                    )}
                    <span className={i <= step ? "text-foreground" : "text-muted-foreground"}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
