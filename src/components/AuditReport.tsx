"use client";

import { AuditData } from "@/lib/tone-analysis";
import VoiceRadar from "./VoiceRadar";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2, AlertCircle, Lightbulb, Users, BookOpen,
  TrendingUp, Globe, ExternalLink,
} from "lucide-react";

interface Props {
  data: AuditData;
}

function ScoreRing({ score, size = 100 }: { score: number; size?: number }) {
  const r = (size - 12) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? "#4ade80" : score >= 60 ? "#e87960" : "#f59e0b";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f0ebe6" strokeWidth={6} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color}
          strokeWidth={6} strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold" style={{ color }}>{score}</span>
        <span className="text-[10px] text-muted-foreground">/ 100</span>
      </div>
    </div>
  );
}

export default function AuditReport({ data }: Props) {
  const { analysis: a, brandName, url, pagesAnalyzed, socialLinks } = data;

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Voice Audit: <span className="text-coral">{brandName}</span>
        </h1>
        <p className="text-muted-foreground">
          <Globe className="w-4 h-4 inline mr-1" />
          {url} · {pagesAnalyzed} pages analyzed
          {socialLinks?.twitter && (
            <span className="ml-3">
              <ExternalLink className="w-3 h-3 inline mr-1" />@{socialLinks.twitter}
            </span>
          )}
        </p>
      </div>

      {/* Score + Radar */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center">
          <ScoreRing score={a.overallScore} size={140} />
          <p className="mt-4 font-serif text-lg font-semibold">Voice Consistency Score</p>
          <p className="text-sm text-muted-foreground mt-1">
            {a.overallScore >= 80 ? "Excellent" : a.overallScore >= 60 ? "Good — room to improve" : "Needs attention"}
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-center mb-4">Voice Profile</h3>
          <VoiceRadar {...a.voiceProfile} />
        </div>
      </div>

      {/* Personality */}
      <section className="bg-white rounded-2xl border border-border/50 p-8">
        <h2 className="font-serif text-2xl font-bold mb-4">Brand Personality</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{a.personalitySummary}</p>
        <div className="flex flex-wrap gap-2">
          {a.personalityTraits.map((t) => (
            <Badge key={t} className="bg-coral-light text-coral-dark border-0 rounded-full px-4 py-1">{t}</Badge>
          ))}
        </div>
      </section>

      {/* Vocabulary */}
      <section className="bg-white rounded-2xl border border-border/50 p-8">
        <h2 className="font-serif text-2xl font-bold mb-6">
          <BookOpen className="w-5 h-5 inline mr-2 text-coral" />
          Vocabulary Analysis
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Signature Phrases</h4>
            <div className="flex flex-wrap gap-2">
              {a.vocabulary.signaturePhrases.map((p) => (
                <span key={p} className="bg-coral/10 text-coral-dark text-sm px-3 py-1 rounded-full">&ldquo;{p}&rdquo;</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Power Words</h4>
            <div className="flex flex-wrap gap-2">
              {a.vocabulary.powerWords.map((w) => (
                <span key={w} className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">{w}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Avoided Patterns</h4>
            <div className="flex flex-wrap gap-2">
              {a.vocabulary.avoidedPatterns.map((p) => (
                <span key={p} className="bg-red-50 text-red-600 text-sm px-3 py-1 rounded-full line-through">{p}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Jargon Level</h4>
            <Badge variant="outline" className="text-sm capitalize">{a.vocabulary.jargonLevel}</Badge>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-white rounded-2xl border border-border/50 p-8">
        <h2 className="font-serif text-2xl font-bold mb-4">
          <Users className="w-5 h-5 inline mr-2 text-coral" />
          Target Audience
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">{a.targetAudience.description}</p>
        <p className="text-sm text-muted-foreground mb-4">{a.targetAudience.demographics}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold mb-2">Pain Points Addressed</h4>
            <ul className="space-y-1">
              {a.targetAudience.painPoints.map((p) => (
                <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Aspirations</h4>
            <ul className="space-y-1">
              {a.targetAudience.aspirations.map((a) => (
                <li key={a} className="text-sm text-muted-foreground flex items-start gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Strengths & Gaps */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-2xl border border-border/50 p-8">
          <h2 className="font-serif text-xl font-bold mb-4">
            <CheckCircle2 className="w-5 h-5 inline mr-2 text-green-500" />
            Strengths
          </h2>
          <ul className="space-y-3">
            {a.strengths.map((s) => (
              <li key={s} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />{s}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-2xl border border-border/50 p-8">
          <h2 className="font-serif text-xl font-bold mb-4">
            <AlertCircle className="w-5 h-5 inline mr-2 text-amber-500" />
            Gaps
          </h2>
          <ul className="space-y-3">
            {a.gaps.map((g) => (
              <li key={g} className="text-sm text-muted-foreground flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />{g}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Recommendations */}
      <section className="bg-coral/5 rounded-2xl border border-coral/20 p-8">
        <h2 className="font-serif text-2xl font-bold mb-6">
          <Lightbulb className="w-5 h-5 inline mr-2 text-coral" />
          Recommendations
        </h2>
        <div className="space-y-4">
          {a.recommendations.map((rec, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full bg-coral/10 text-coral text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Channel Consistency */}
      <section className="bg-white rounded-2xl border border-border/50 p-8">
        <h2 className="font-serif text-xl font-bold mb-4">Channel Breakdown</h2>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Website</span>
              <span className="text-sm font-bold text-coral">{a.channelConsistency.website.score}/100</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-coral rounded-full transition-all duration-1000"
                style={{ width: `${a.channelConsistency.website.score}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{a.channelConsistency.website.tone}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 border-t border-border/50">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
          Keep your team on this voice
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          ToneGuide helps your marketing team stay on-brand with AI-powered content checks, a voice copilot, and real-time brand guidelines.
        </p>
        <a
          href="/#waitlist"
          className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-colors"
        >
          Get Early Access
          <ExternalLink className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
