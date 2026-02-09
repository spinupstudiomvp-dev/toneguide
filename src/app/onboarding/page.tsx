"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { VoiceSliders } from "@/components/VoiceSliders";
import { Upload, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

const STEPS = [
  { title: "Name your brand", subtitle: "Let's start with the basics" },
  { title: "Upload guidelines", subtitle: "Drop your brand docs here" },
  { title: "Set the voice", subtitle: "Where does your brand fall?" },
  { title: "Your voice profile", subtitle: "Here's what we think" },
  { title: "Try it out!", subtitle: "See the magic in action" },
];

const STEP_COPY = [
  "First things first ✨",
  "The good stuff 📚",
  "Getting warmer 🎯",
  "Almost there! ✅",
  "The grand finale 🎉",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [brandName, setBrandName] = useState("");
  const [sliders, setSliders] = useState({ formal: 50, serious: 50, technical: 50, reserved: 50 });
  const [files, setFiles] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const router = useRouter();

  const progress = ((step + 1) / STEPS.length) * 100;

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files).map((f) => f.name);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((f) => f.name);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress */}
      <div className="border-b border-border/50 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-coral">{STEP_COPY[step]}</span>
            <span className="text-xs text-muted-foreground">Step {step + 1} of {STEPS.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          <h1 className="font-serif text-3xl font-bold mb-2">{STEPS[step].title}</h1>
          <p className="text-muted-foreground mb-8">{STEPS[step].subtitle}</p>

          {step === 0 && (
            <div className="space-y-4">
              <Input
                placeholder="e.g., Wildfire Agency"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="h-14 text-lg px-5"
                autoFocus
              />
              <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center cursor-pointer hover:border-coral/30 transition-colors">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Upload your logo (optional)</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                dragOver ? "border-coral bg-coral-light/50 scale-[1.02]" : "border-border/50 hover:border-coral/30"
              }`}
            >
              <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium mb-1">Drag & drop your brand documents</p>
              <p className="text-sm text-muted-foreground mb-4">PDF, DOCX, or plain text</p>
              <label className="cursor-pointer">
                <span className="text-sm text-coral hover:underline">Or browse files</span>
                <input type="file" className="hidden" multiple onChange={handleFileInput} />
              </label>
              {files.length > 0 && (
                <div className="mt-6 space-y-2">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 justify-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <VoiceSliders sliders={sliders} onChange={setSliders} />
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-coral" />
                  <span className="font-medium">AI-Generated Voice Profile</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your guidelines and preferences, here&apos;s how {brandName || "your brand"} sounds:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium mb-1">Tone</p>
                    <p className="text-sm text-muted-foreground">Warm, approachable, and confident. Avoids jargon but isn&apos;t afraid of specifics.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium mb-1">Personality</p>
                    <p className="text-sm text-muted-foreground">Like a knowledgeable friend — helpful without being condescending, professional without being stiff.</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="rounded-full">Friendly</Badge>
                    <Badge variant="secondary" className="rounded-full">Clear</Badge>
                    <Badge variant="secondary" className="rounded-full">Confident</Badge>
                    <Badge variant="secondary" className="rounded-full">Warm</Badge>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Try pasting some content to see how it scores:</p>
                <textarea
                  className="w-full h-32 p-4 border border-border/50 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-coral/20"
                  placeholder="Paste your content here..."
                />
                <Button className="mt-3 bg-coral hover:bg-coral-dark text-white rounded-full">
                  <Sparkles className="w-4 h-4 mr-1" /> Check Content
                </Button>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
            ) : <div />}
            {step < STEPS.length - 1 ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="bg-coral hover:bg-coral-dark text-white rounded-full px-6"
                disabled={step === 0 && !brandName}
              >
                Continue <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/brand/1/check")}
                className="bg-coral hover:bg-coral-dark text-white rounded-full px-6"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
