"use client";

import Link from "next/link";
import { ScoreRing } from "./ScoreRing";
import { ArrowRight, BarChart3 } from "lucide-react";

interface Brand {
  id: string;
  name: string;
  score: number;
  checksToday: number;
  color: string;
}

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brand/${brand.id}`}>
      <div className="group p-6 bg-white rounded-2xl border border-border/50 hover:shadow-lg hover:shadow-coral/5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: brand.color }}
            >
              {brand.name[0]}
            </div>
            <div>
              <h3 className="font-semibold text-sm">{brand.name}</h3>
              <p className="text-xs text-muted-foreground">{brand.checksToday} checks today</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center gap-3">
          <ScoreRing score={brand.score} size={48} strokeWidth={3} />
          <div>
            <p className="text-xs text-muted-foreground">Brand Health</p>
            <p className="text-sm font-medium">
              {brand.score >= 85 ? "Excellent" : brand.score >= 70 ? "Good" : "Needs Work"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
