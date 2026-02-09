"use client";

import { Slider } from "@/components/ui/slider";

interface VoiceSlidersProps {
  sliders: { formal: number; serious: number; technical: number; reserved: number };
  onChange: (sliders: { formal: number; serious: number; technical: number; reserved: number }) => void;
}

const dimensions = [
  { key: "formal" as const, left: "Casual", right: "Formal", emoji: "🎩" },
  { key: "serious" as const, left: "Playful", right: "Serious", emoji: "😊" },
  { key: "technical" as const, left: "Simple", right: "Technical", emoji: "🔬" },
  { key: "reserved" as const, left: "Bold", right: "Reserved", emoji: "🦁" },
];

export function VoiceSliders({ sliders, onChange }: VoiceSlidersProps) {
  return (
    <div className="space-y-8">
      {dimensions.map((dim) => (
        <div key={dim.key}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">{dim.left}</span>
            <span className="text-lg">{dim.emoji}</span>
            <span className="text-sm font-medium">{dim.right}</span>
          </div>
          <Slider
            value={[sliders[dim.key]]}
            onValueChange={(v) => onChange({ ...sliders, [dim.key]: v[0] })}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
