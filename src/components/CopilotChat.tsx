"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content: "Hey! I'm your brand voice copilot. Ask me to check content, rewrite copy, or answer any questions about your brand voice guidelines. 💡",
  },
];

const MOCK_RESPONSES: Record<string, string> = {
  default: "I'd be happy to help with that! Based on your brand guidelines, I'd suggest keeping the tone warm and conversational. Avoid jargon and speak directly to the reader. Would you like me to rewrite something specific?",
  rewrite: "Here's a warmer version that aligns with your brand voice:\n\n\"We're excited to share something new — built with your team in mind. Simple, helpful, and ready when you are.\"\n\nThis scores 92/100 on your brand voice check. ✅",
  check: "I've analyzed that against your guidelines. A few things stand out:\n\n✅ Good use of active voice\n✅ Conversational tone\n⚠️ Consider shortening the second sentence\n⚠️ \"Leverage\" is on your banned words list — try \"use\" instead\n\nOverall score: 78/100",
};

export function CopilotChat({ brandName }: { brandName: string }) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let response = MOCK_RESPONSES.default;
      if (lower.includes("rewrite") || lower.includes("rephrase")) response = MOCK_RESPONSES.rewrite;
      if (lower.includes("check") || lower.includes("review")) response = MOCK_RESPONSES.check;

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-4 border-b border-border/50 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-coral" />
        </div>
        <div>
          <h3 className="font-medium text-sm">Copilot</h3>
          <p className="text-[10px] text-muted-foreground">{brandName} voice expert</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-muted/50 text-foreground"
                  : "bg-coral/10 text-foreground"
              }`}
            >
              {msg.role === "assistant" && (
                <p className="text-coral-dark font-medium text-xs mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> ToneGuide
                </p>
              )}
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-coral/10 px-4 py-3 rounded-2xl text-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-coral/40 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-coral/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-coral/40 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border/50">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your brand voice..."
            className="h-10 rounded-full px-4 text-sm"
          />
          <Button
            type="submit"
            size="sm"
            disabled={!input.trim()}
            className="bg-coral hover:bg-coral-dark text-white rounded-full w-10 h-10 p-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
