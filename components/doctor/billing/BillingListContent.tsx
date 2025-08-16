"use client";

import { useState } from "react";
import { Search, Plus, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { NewBillModal } from "./NewBillModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const billsData = [
  {
    id: 1,
    patient: {
      name: "Marwen Said",
      avatar:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "22 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Cash",
    time: "12:24 pm",
    status: "Paid",
  },
  {
    id: 2,
    patient: {
      name: "Mariem Routi",
      avatar:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "20 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Card",
    time: "12:24 pm",
    status: "Pending",
  },
  {
    id: 3,
    patient: {
      name: "Ahmed Bourat",
      avatar:
        "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "24 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Cash",
    time: "12:24 pm",
    status: "Paid",
  },
  {
    id: 4,
    patient: {
      name: "Hassen Louati",
      avatar:
        "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "26 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Card",
    time: "12:24 pm",
    status: "Paid",
  },
  {
    id: 5,
    patient: {
      name: "Laila Hamza",
      avatar:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "18 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Cash",
    time: "12:24 pm",
    status: "Pending",
  },
  {
    id: 6,
    patient: {
      name: "Sami Ouni",
      avatar:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "28 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Cash",
    time: "12:24 pm",
    status: "Paid",
  },
  {
    id: 7,
    patient: {
      name: "Sofien Jlassi",
      avatar:
        "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "16 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Card",
    time: "12:24 pm",
    status: "Pending",
  },
  {
    id: 8,
    patient: {
      name: "Nada Haji",
      avatar:
        "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "16 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Cash",
    time: "12:24 pm",
    status: "Pending",
  },
  {
    id: 9,
    patient: {
      name: "Sirine Jablon",
      avatar:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "16 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Card",
    time: "12:24 pm",
    status: "Pending",
  },
  {
    id: 10,
    patient: {
      name: "Ali Mouradi",
      avatar:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      profile: "See patient's profile",
    },
    date: "16 Jan 2024",
    cost: "TND 50",
    paymentMethod: "Cash",
    time: "12:24 pm",
    status: "Paid",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Paid":
      return (
        <Badge className="bg-green-500 hover:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          Paid
        </Badge>
      );
    case "Pending":
      return (
        <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          Pending
        </Badge>
      );
    default:
      return (
        <Badge className="bg-gray-500 hover:bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {status}
        </Badge>
      );
  }
};

export function BillingListContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("All bills");
  const [isNewBillModalOpen, setIsNewBillModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-secondary">Bills List</h1>
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Total 23
              </Badge>
            </div>
            <p className="text-sm text-gray-500">
              15 new bill were added today
            </p>
          </div>
        </div>
        <Button 
          onClick={() => setIsNewBillModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
        >
          <span>Add a new bill</span>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-50">
        {/* Search and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border border-gray-200 focus:bg-white focus:ring-1 focus:ring-blue-200 rounded-lg h-10"
            />
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
            <Select value={filterValue} onValueChange={setFilterValue}>
              <SelectTrigger className="w-32 h-8 border-gray-200 rounded-lg text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                <SelectItem value="All bills">All bills</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 py-3 px-4 text-sm font-medium text-gray-500 border-b border-gray-200">
          <div>Patient</div>
          <div>Date</div>
          <div>Cost</div>
          <div>Payment method</div>
          <div>Time</div>
          <div>Status</div>
          <div>Bill</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-1 mt-4">
          {billsData.map((bill) => (
            <div
              key={bill.id}
              className="grid grid-cols-7 gap-4 py-4 px-4 bg-white rounded-lg hover:bg-gray-50 transition-colors items-center"
            >
              {/* Patient */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={bill.patient.avatar} />
                  <AvatarFallback>
                    {bill.patient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {bill.patient.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {bill.patient.profile}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-600">{bill.date}</div>

              {/* Cost */}
              <div className="text-sm text-gray-900 font-medium">
                {bill.cost}
              </div>

              {/* Payment Method */}
              <div className="text-sm text-gray-600">{bill.paymentMethod}</div>

              {/* Time */}
              <div className="text-sm text-gray-600">{bill.time}</div>

              {/* Status */}
              <div>{getStatusBadge(bill.status)}</div>

              {/* Bill */}
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 text-blue-500 hover:bg-blue-50"
                >
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Bill Modal */}
      <NewBillModal
        isOpen={isNewBillModalOpen}
        onClose={() => setIsNewBillModalOpen(false)}
      />
    </div>
  );
}
