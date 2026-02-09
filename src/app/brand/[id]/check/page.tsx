"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScoreRing } from "@/components/ScoreRing";
import { CopilotChat } from "@/components/CopilotChat";
import { ArrowLeft, Sparkles, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const contentTypes = ["Social Post", "Ad Copy", "Email", "Landing Page", "Blog", "Press Release"];

export default function BrandCheckPage() {
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState("Social Post");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleCheck = () => {
    if (!content.trim()) return;
    // Mock score based on content length/complexity
    const mockScore = Math.min(95, Math.max(45, 100 - content.split(" ").filter(w =>
      ["disrupt", "synergy", "leverage", "revolutionary", "game-changing"].includes(w.toLowerCase())
    ).length * 15));
    setScore(mockScore);
    setChecked(true);
  };

  const annotations = checked ? [
    content.toLowerCase().includes("disrupt") && { text: "disrupt", issue: "Banned term. Try: \"transform\" or \"improve\"", severity: "error" as const },
    content.toLowerCase().includes("synergy") && { text: "synergy", issue: "Banned term. Try: \"collaboration\" or \"teamwork\"", severity: "error" as const },
    content.toLowerCase().includes("leverage") && { text: "leverage", issue: "Banned term. Try: \"use\" or \"build on\"", severity: "error" as const },
    content.length > 200 && { text: "", issue: "Content is quite long. Consider breaking into shorter paragraphs.", severity: "warning" as const },
  ].filter(Boolean) : [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/50 bg-white shrink-0">
        <div className="max-w-full mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/brand/1">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Wildfire Agency</Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {contentTypes.map((ct) => (
              <button
                key={ct}
                onClick={() => setContentType(ct)}
                className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                  contentType === ct
                    ? "bg-coral text-white"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {ct}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flex-1 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
        {/* Left: Editor */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-lg font-semibold">Content Editor</h2>
            <div className="flex items-center gap-2">
              <label className="cursor-pointer">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted transition-colors">
                  <ImageIcon className="w-3 h-3 mr-1" /> Upload Image
                </Badge>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>

          <Textarea
            value={content}
            onChange={(e) => { setContent(e.target.value); setChecked(false); }}
            placeholder="Paste your content here... Try using banned words like 'disrupt' or 'synergy' to see the checker in action."
            className="flex-1 min-h-[200px] resize-none text-sm leading-relaxed p-4 rounded-xl border-border/50"
          />

          <div className="mt-4 flex items-center justify-between">
            <Button
              onClick={handleCheck}
              disabled={!content.trim()}
              className="bg-coral hover:bg-coral-dark text-white rounded-full px-6"
            >
              <Sparkles className="w-4 h-4 mr-1" /> Check Content
            </Button>

            {checked && (
              <div className="flex items-center gap-3">
                <ScoreRing score={score} size={56} strokeWidth={4} />
                <div>
                  <p className="text-sm font-medium">Brand Score</p>
                  <p className="text-xs text-muted-foreground">
                    {score >= 85 ? "Excellent! Ready to publish." : score >= 70 ? "Good, minor tweaks suggested." : "Needs revision."}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Annotations */}
          {annotations.length > 0 && (
            <div className="mt-4 space-y-2">
              {annotations.map((a, i) => a && (
                <div
                  key={i}
                  className={`p-3 rounded-lg text-sm ${
                    a.severity === "error" ? "bg-red-50 border border-red-100 text-red-700" : "bg-amber-50 border border-amber-100 text-amber-700"
                  }`}
                >
                  {a.text && <span className="font-medium">&quot;{a.text}&quot;</span>} {a.issue}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Copilot Chat */}
        <div className="flex flex-col">
          <CopilotChat brandName="Wildfire Agency" />
        </div>
      </div>
    </div>
  );
}
