"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import AuditReport from "@/components/AuditReport";
import { AuditData } from "@/lib/tone-analysis";

export default function SavedAuditPage() {
  const params = useParams();
  const id = params.id as string;
  const [data, setData] = useState<AuditData | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("toneAudits") || "{}");
      if (saved[id]) {
        setData(saved[id]);
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Audit Not Found</h1>
          <p className="text-muted-foreground mb-6">This audit may have expired or the link is invalid.</p>
          <a href="/audit">
            <Button className="bg-coral hover:bg-coral-dark text-white rounded-full px-8">
              Run a New Audit
            </Button>
          </a>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-coral animate-spin" />
      </main>
    );
  }

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
          <a href="/audit">
            <Button variant="outline" size="sm" className="rounded-full">Run New Audit</Button>
          </a>
        </div>
      </nav>
      <div className="pt-24 pb-20 px-6">
        <AuditReport data={data} />
      </div>
    </main>
  );
}
