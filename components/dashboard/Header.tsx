"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-white/50 backdrop-blur-sm px-6 py-4 shadow-sm rounded-xl border-2 border-gray-50 m-3">
      {" "}
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search keywords"
            className="pl-10 bg-white border border-primary focus:bg-white focus:ring-1 focus:ring-blue-200 rounded-full h-10"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notification */}
          <Button
            variant="ghost"
            size="sm"
            className="relative bg-white rounded-3xl"
          >
            <Bell className="w-5 h-5 text-secondary" />
          </Button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium text-gray-900">maroufi.tarek</p>
              <p className="text-gray-500 text-xs">Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
