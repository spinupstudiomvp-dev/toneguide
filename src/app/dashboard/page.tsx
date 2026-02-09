"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ArrowRight, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { ScoreRing } from "@/components/ScoreRing";
import { BrandCard } from "@/components/BrandCard";

const mockBrands = [
  { id: "1", name: "Wildfire Agency", score: 87, checksToday: 12, color: "#E8634A" },
  { id: "2", name: "Northstar Creative", score: 74, checksToday: 5, color: "#4A90D9" },
  { id: "3", name: "Luminary Group", score: 92, checksToday: 8, color: "#D4A843" },
];

const recentChecks = [
  { id: "1", brand: "Wildfire Agency", type: "Social Post", score: 91, time: "2 min ago" },
  { id: "2", brand: "Northstar Creative", type: "Email", score: 68, time: "15 min ago" },
  { id: "3", brand: "Wildfire Agency", type: "Ad Copy", score: 85, time: "1 hour ago" },
  { id: "4", brand: "Luminary Group", type: "Landing Page", score: 94, time: "3 hours ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-serif text-xl font-bold">ToneGuide</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/onboarding">
              <Button size="sm" className="bg-coral hover:bg-coral-dark text-white rounded-full">
                <Plus className="w-4 h-4 mr-1" /> New Brand
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-muted-foreground">Monitor brand voice consistency across all your brands.</p>
        </div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mockBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Recent Checks */}
        <div>
          <h2 className="font-serif text-xl font-semibold mb-4">Recent Checks</h2>
          <div className="space-y-3">
            {recentChecks.map((check) => (
              <div
                key={check.id}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-border/50 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <ScoreRing score={check.score} size={40} strokeWidth={3} />
                  <div>
                    <p className="font-medium text-sm">{check.brand}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-[10px] rounded-full">{check.type}</Badge>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{check.time}</span>
                    </div>
                  </div>
                </div>
                <Link href="/brand/1/check">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <FileText className="w-4 h-4 mr-1" /> View
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
