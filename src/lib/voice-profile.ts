// Voice profile extraction utilities

export interface VoiceProfile {
  formal: number;
  serious: number;
  technical: number;
  reserved: number;
  traits: string[];
  description: string;
}

export function generateVoiceProfile(
  sliders: { formal: number; serious: number; technical: number; reserved: number },
  brandName: string
): VoiceProfile {
  const traits: string[] = [];

  if (sliders.formal < 40) traits.push("Casual");
  else if (sliders.formal > 60) traits.push("Formal");
  else traits.push("Balanced");

  if (sliders.serious < 40) traits.push("Playful");
  else if (sliders.serious > 60) traits.push("Serious");

  if (sliders.technical < 40) traits.push("Simple");
  else if (sliders.technical > 60) traits.push("Technical");

  if (sliders.reserved < 40) traits.push("Bold");
  else if (sliders.reserved > 60) traits.push("Reserved");
  else traits.push("Confident");

  const tone = sliders.formal < 50 ? "conversational" : "professional";
  const energy = sliders.serious < 50 ? "energetic and upbeat" : "measured and thoughtful";

  return {
    ...sliders,
    traits,
    description: `${brandName}'s voice is ${tone}, ${energy}. ${traits.join(", ")} in character.`,
  };
}
