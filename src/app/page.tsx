"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export function Home() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim()) {
      console.log("Prompt submitted:", prompt);
    }
  };

  const recommendedPrompts = [
    "Create a modern dashboard design",
    "Generate a landing page for SaaS",
    "Design a mobile app interface",
    "Build an e-commerce product card"
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-50">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-pink-50 to-white opacity-80" />
      
      {/* Static grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main input area */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="relative group">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to generate..."
              className="w-full resize-none rounded-2xl border-2 border-purple-200/50 bg-white/80 pl-5 pr-14 py-4 text-base text-gray-900 placeholder-gray-400 shadow-xl backdrop-blur-xl transition-all duration-500 focus:border-purple-300 focus:bg-white/90 focus:shadow-purple-300/30 focus:outline-none"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                minHeight: "140px"
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
            
            <button
              onClick={handleSubmit}
              disabled={!prompt.trim()}
              className="absolute right-3 bottom-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-2.5 text-white shadow-lg shadow-purple-400/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-400/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
            >
              <Sparkles className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;