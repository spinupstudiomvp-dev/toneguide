"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";

export default function AuditEmailCapture({
  brandName,
  auditUrl,
}: {
  brandName: string;
  auditUrl: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const joinWaitlist = useMutation(api.waitlist.join);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      await joinWaitlist({ email: email.trim(), source: `audit:${auditUrl}` });
      setSubmitted(true);
    } catch {
      // Likely already on waitlist — still show success
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 animate-in fade-in duration-500">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <p className="font-medium text-lg">You&apos;re on the list!</p>
        <p className="text-muted-foreground text-sm">
          We&apos;ll notify you when ToneGuide launches. Keep {brandName}&apos;s voice consistent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
      <div className="relative flex-1 w-full">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="pl-10 h-12 rounded-full border-border/60"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="bg-coral hover:bg-coral-dark text-white rounded-full px-6 h-12 font-medium whitespace-nowrap"
      >
        {loading ? "Joining..." : "Get Early Access"}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
