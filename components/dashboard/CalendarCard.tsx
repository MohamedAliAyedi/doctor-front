"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const calendarDays = [
  [27, 28, 29, 30, 31, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
];

export function CalendarCard() {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex-1 border-2 border-gray-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">September 2021</h3>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.flat().map((day, index) => (
          <button
            key={index}
            className={`
              w-8 h-8 text-sm rounded-lg flex items-center justify-center
              ${
                day === 16
                  ? "bg-blue-600 text-white shadow-md"
                  : day < 10 && index < 5
                  ? "text-gray-400"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
