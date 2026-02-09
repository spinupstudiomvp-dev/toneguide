"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VoiceSliders } from "@/components/VoiceSliders";
import { ScoreRing } from "@/components/ScoreRing";
import { ArrowLeft, Pencil, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const dosList = [
  "Use active voice",
  "Keep sentences under 20 words",
  "Address the reader directly (\"you\")",
  "Use contractions for warmth",
  "Lead with the benefit, not the feature",
];

const dontsList = [
  "Use jargon or buzzwords",
  "Write in passive voice",
  "Use exclamation marks excessively!!!",
  "Say \"disrupt\", \"synergy\", or \"leverage\"",
  "Start sentences with \"In order to\"",
];

const exampleCopy = [
  { type: "on-brand", text: "We built this to make your mornings easier. No fuss, no friction — just a better start to your day." },
  { type: "off-brand", text: "Our revolutionary, industry-disrupting solution leverages cutting-edge synergies to transform your morning paradigm." },
];

const preferredTerms = ["customers", "simple", "helpful", "build", "grow", "fresh"];
const bannedTerms = ["disrupt", "synergy", "leverage", "game-changing", "revolutionary", "paradigm"];

export default function BrandProfilePage() {
  const [sliders, setSliders] = useState({ formal: 35, serious: 30, technical: 25, reserved: 20 });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Dashboard</Button>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/brand/1/check">
              <Button size="sm" className="bg-coral hover:bg-coral-dark text-white rounded-full">
                <Sparkles className="w-4 h-4 mr-1" /> Check Content
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#E8634A] flex items-center justify-center text-white font-bold text-xl">
            W
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold">Wildfire Agency</h1>
            <p className="text-muted-foreground">Brand voice profile</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Voice Dimensions */}
          <div className="p-6 bg-white rounded-2xl border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg font-semibold">Voice Dimensions</h2>
              <Button variant="ghost" size="sm"><Pencil className="w-3 h-3 mr-1" /> Edit</Button>
            </div>
            <VoiceSliders sliders={sliders} onChange={setSliders} />
          </div>

          {/* Health Score */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-border/50 text-center">
              <h2 className="font-serif text-lg font-semibold mb-4">Brand Health</h2>
              <ScoreRing score={87} size={100} strokeWidth={6} />
              <p className="mt-3 text-sm text-muted-foreground">Based on 47 checks this month</p>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <h3 className="font-semibold text-sm text-green-800 mb-3 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Do&apos;s
                </h3>
                <ul className="space-y-2">
                  {dosList.map((item, i) => (
                    <li key={i} className="text-xs text-green-700">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                <h3 className="font-semibold text-sm text-red-800 mb-3 flex items-center gap-1">
                  <XCircle className="w-4 h-4" /> Don&apos;ts
                </h3>
                <ul className="space-y-2">
                  {dontsList.map((item, i) => (
                    <li key={i} className="text-xs text-red-700">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Example Copy */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-border/50">
          <h2 className="font-serif text-lg font-semibold mb-4">Example Copy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {exampleCopy.map((ex, i) => (
              <div key={i} className={`p-4 rounded-xl ${ex.type === "on-brand" ? "bg-green-50 border border-green-100" : "bg-red-50 border border-red-100"}`}>
                <Badge className={`mb-2 text-[10px] rounded-full ${ex.type === "on-brand" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {ex.type === "on-brand" ? "✓ On-Brand" : "✗ Off-Brand"}
                </Badge>
                <p className="text-sm leading-relaxed">{ex.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vocabulary */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-border/50">
            <h2 className="font-serif text-lg font-semibold mb-4">Preferred Terms</h2>
            <div className="flex flex-wrap gap-2">
              {preferredTerms.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full bg-green-50 text-green-800 border-green-100">{t}</Badge>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-border/50">
            <h2 className="font-serif text-lg font-semibold mb-4">Banned Terms</h2>
            <div className="flex flex-wrap gap-2">
              {bannedTerms.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full bg-red-50 text-red-800 border-red-100">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
