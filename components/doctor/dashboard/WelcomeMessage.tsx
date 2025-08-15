"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WelcomeMessage() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            <span className="text-secondary">Welcome Dr. Latifa</span>
          </h1>
          <p className="text-gray-600 mt-1">How&apos;re you feeling today?</p>
        </div>
        <Button
          variant="outline"
          className="flex items-center space-x-2 bg-white/80 border-white/40 hover:bg-white"
        >
          <span>Monthly</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
