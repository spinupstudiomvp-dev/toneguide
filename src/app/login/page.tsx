"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "87tUE3x6rLVWes7U66NT") {
      document.cookie = "toneguide-auth=authenticated; path=/; max-age=604800";
      router.push("/dashboard");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <h1 className="font-serif text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-1">Enter your password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full h-12 bg-coral hover:bg-coral-dark text-white">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
