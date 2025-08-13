"use client";

import { useState } from "react";
import { Search, ChevronDown, X, Check, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const invitationRequests = [
  {
    id: 1,
    name: "Marwen Said",
    avatar:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "22 Jan 2024",
    time: "",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 2,
    name: "Mariem Raali",
    avatar:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "20 Jan 2024",
    time: "",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 3,
    name: "Ahmed Bourat",
    avatar:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "24 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 4,
    name: "Hassen Louati",
    avatar:
      "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "26 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 5,
    name: "Laila Hamza",
    avatar:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "18 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 6,
    name: "Sami Ouni",
    avatar:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "28 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 7,
    name: "Sofien Jlassi",
    avatar:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "16 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 8,
    name: "Nada Haji",
    avatar:
      "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "16 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 9,
    name: "Sirine Jablon",
    avatar:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "16 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
  {
    id: 10,
    name: "Ali Mouradi",
    avatar:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    date: "18 Jan 2024",
    time: "12:00pm",
    message:
      "I am seeking a reputable healthcare provider and would be grateful if you could accept me as a new patient.",
    status: "pending",
  },
];

export function InvitationRequestsContent() {
  const [selectedFilter, setSelectedFilter] = useState("All requests");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAccept = (id: number) => {
    console.log("Accepting invitation:", id);
  };

  const handleReject = (id: number) => {
    console.log("Rejecting invitation:", id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Users className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-secondary">
          Invitation requests
        </h1>
      </div>

      {/* Filters and Search */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-50">
        <div className="flex items-center justify-between mb-6">
          {/* Search */}
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border border-gray-200 focus:bg-white focus:ring-1 focus:ring-blue-200 rounded-lg h-10"
            />
          </div>

          {/* Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-white border-gray-200 hover:bg-gray-50 rounded-lg px-4 py-2"
              >
                <span className="text-sm">{selectedFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="p-2">
                <div className="flex items-center space-x-2 p-2 text-sm text-gray-700">
                  <span>All requests</span>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="text-sm font-medium text-gray-900 px-2">
                    Today
                  </div>
                  <div className="text-sm font-medium text-gray-900 px-2">
                    This week
                  </div>
                  <div className="text-sm font-medium text-gray-900 px-2">
                    This month
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200">
          <div>Name</div>
          <div>Date</div>
          <div>Message</div>
          <div className="text-center">Action</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-2 mt-4">
          {invitationRequests.map((request) => (
            <div
              key={request.id}
              className="grid grid-cols-4 gap-4 py-4 px-4 bg-white rounded-lg hover:bg-gray-50 transition-colors items-center"
            >
              {/* Name */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={request.avatar} />
                  <AvatarFallback>
                    {request.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {request.name}
                  </p>
                  <p className="text-xs text-gray-500">See patient profile</p>
                </div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-600">
                <div>{request.date}</div>
                {request.time && (
                  <div className="text-xs text-gray-500">{request.time}</div>
                )}
              </div>

              {/* Message */}
              <div className="text-sm text-gray-600 pr-4">
                {request.message}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center space-x-2">
                <Button
                  onClick={() => handleReject(request.id)}
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 rounded-full border-red-200 text-red-500 hover:bg-red-50 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleAccept(request.id)}
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 rounded-full border-green-200 text-green-500 hover:bg-green-50 p-0"
                >
                  <Check className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
