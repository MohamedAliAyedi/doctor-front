"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Sample appointment data
const appointmentData = {
  "2024-10-01": [
    {
      id: 1,
      type: "FINAL EXAMINATION",
      time: "9:00",
      color: "bg-yellow-400",
      patient: "JC",
    },
  ],
  "2024-10-02": [
    {
      id: 2,
      type: "FINAL EXAMINATION",
      time: "9:00",
      color: "bg-yellow-400",
      patient: "JC",
    },
  ],
  "2024-10-03": [
    {
      id: 3,
      type: "FINAL EXAMINATION",
      time: "9:00",
      color: "bg-yellow-400",
      patient: "JC",
    },
  ],
  "2024-10-04": [
    {
      id: 4,
      type: "RADIO INJECTION",
      time: "12:00",
      color: "bg-blue-500",
      patient: "",
    },
  ],
  "2024-10-05": [
    {
      id: 5,
      type: "ROUTINE CHECKUP",
      time: "4:00",
      color: "bg-pink-500",
      patient: "",
    },
  ],
  "2024-10-06": [
    {
      id: 6,
      type: "LIVER STENT",
      time: "2:00",
      color: "bg-purple-500",
      patient: "",
    },
  ],
  "2024-10-15": [
    {
      id: 7,
      type: "WALK-IN FEVER",
      time: "5:00",
      color: "bg-blue-400",
      patient: "S+",
    },
  ],
  "2024-10-16": [
    {
      id: 8,
      type: "LIVER ATC & ROUTINE CHECKUP",
      time: "4:00",
      color: "bg-pink-500",
      patient: "",
    },
  ],
  "2024-10-18": [
    {
      id: 9,
      type: "HAND INFECTION",
      time: "1:00",
      color: "bg-yellow-500",
      patient: "",
    },
  ],
  "2024-10-21": [
    {
      id: 10,
      type: "URINE BOOST",
      time: "5:30",
      color: "bg-purple-400",
      patient: "",
    },
  ],
  "2024-10-25": [
    {
      id: 11,
      type: "URINE VISIT & ROUTINE CHECKUP",
      time: "8:00",
      color: "bg-pink-500",
      patient: "",
    },
  ],
};

// Preview appointments for the right sidebar
const previewAppointments = [
  {
    id: 1,
    type: "FINAL EXAMINATION",
    time: "9:00",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    type: "RADIO INJECTION",
    time: "12:00",
    color: "bg-blue-500",
  },
  {
    id: 3,
    type: "FINAL EXAMINATION",
    time: "9:00",
    color: "bg-pink-500",
  },
  {
    id: 4,
    type: "FINAL EXAMINATION",
    time: "9:00",
    color: "bg-yellow-400",
  },
  {
    id: 5,
    type: "RADIO INJECTION",
    time: "12:00",
    color: "bg-blue-500",
  },
];

const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function AppointmentsContent() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 1)); // October 2024
  const [selectedMonth, setSelectedMonth] = useState("This month, October");
  const [viewMode, setViewMode] = useState("MONTH");

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay() + 1); // Start from Monday
    
    const days = [];
    const currentDateObj = new Date(startDate);
    
    // Generate 6 weeks of days
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const dateKey = `${currentDateObj.getFullYear()}-${String(currentDateObj.getMonth() + 1).padStart(2, '0')}-${String(currentDateObj.getDate()).padStart(2, '0')}`;
        const appointments = appointmentData[dateKey] || [];
        
        weekDays.push({
          date: new Date(currentDateObj),
          dateKey,
          appointments,
          isCurrentMonth: currentDateObj.getMonth() === month,
          isToday: currentDateObj.toDateString() === new Date().toDateString(),
        });
        
        currentDateObj.setDate(currentDateObj.getDate() + 1);
      }
      days.push(weekDays);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
    setSelectedMonth(`This month, ${monthNames[newDate.getMonth()]}`);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-50 overflow-hidden">
      {/* Main Calendar Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-pink-500">Appointments</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateMonth('prev')}
                  className="w-8 h-8 p-0 hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-48 border-gray-200 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <SelectItem value="This month, October">This month, October</SelectItem>
                    <SelectItem value="This month, November">This month, November</SelectItem>
                    <SelectItem value="This month, December">This month, December</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateMonth('next')}
                  className="w-8 h-8 p-0 hover:bg-gray-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <span>Add unavailability</span>
              </Button>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 w-fit">
            <Button
              variant={viewMode === "DAY" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("DAY")}
              className={`px-4 py-2 rounded-md text-sm ${
                viewMode === "DAY" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              DAY
            </Button>
            <Button
              variant={viewMode === "WEEK" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("WEEK")}
              className={`px-4 py-2 rounded-md text-sm ${
                viewMode === "WEEK" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              WEEK
            </Button>
            <Button
              variant={viewMode === "MONTH" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("MONTH")}
              className={`px-4 py-2 rounded-md text-sm ${
                viewMode === "MONTH" 
                  ? "bg-pink-500 text-white shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              MONTH
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 p-6">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-4 mb-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-4 flex-1">
            {calendarDays.flat().map((dayData, index) => (
              <div
                key={index}
                className={`min-h-[120px] p-2 border border-gray-100 rounded-lg relative ${
                  !dayData.isCurrentMonth ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-50 transition-colors`}
              >
                {/* Date Number */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-sm font-medium ${
                      dayData.isCurrentMonth ? "text-gray-900" : "text-gray-400"
                    } ${dayData.isToday ? "bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center" : ""}`}
                  >
                    {dayData.date.getDate()}
                  </span>
                  {dayData.appointments.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-4 h-4 p-0 text-gray-400 hover:text-gray-600"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  )}
                </div>

                {/* Appointments */}
                <div className="space-y-1">
                  {dayData.appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className={`${appointment.color} text-white text-xs px-2 py-1 rounded-md relative`}
                    >
                      <div className="font-medium">{appointment.type}</div>
                      <div className="text-xs opacity-90">{appointment.time}</div>
                      {appointment.patient && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {appointment.patient}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">EARPIECE NOV</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-600">EXAMINATION</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="text-sm text-gray-600">CONSULTATION</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">ROUTINE CHECKUP</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600">SICK VISIT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Preview of the Day */}
      <div className="w-80 border-l border-gray-200 bg-white/80 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview of the Day</h3>
        
        {/* Time slots */}
        <div className="space-y-6">
          {/* 7:00 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>7:00</span>
          </div>

          {/* 9:00 - Appointments */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>9:00</span>
            </div>
            <div className="space-y-2 ml-4">
              <div className="bg-yellow-400 text-white text-xs px-3 py-2 rounded-lg">
                <div className="font-medium">FINAL EXAMINATION</div>
                <div className="text-xs opacity-90">9:00</div>
              </div>
            </div>
          </div>

          {/* 10:00 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>10:00</span>
          </div>

          {/* 12:00 - Appointments */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>12:00</span>
            </div>
            <div className="space-y-2 ml-4">
              <div className="bg-blue-500 text-white text-xs px-3 py-2 rounded-lg">
                <div className="font-medium">RADIO INJECTION</div>
                <div className="text-xs opacity-90">12:00</div>
              </div>
            </div>
          </div>

          {/* 14:00 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>14:00</span>
          </div>

          {/* 16:00 - Appointments */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>16:00</span>
            </div>
            <div className="space-y-2 ml-4">
              <div className="bg-pink-500 text-white text-xs px-3 py-2 rounded-lg">
                <div className="font-medium">FINAL EXAMINATION</div>
                <div className="text-xs opacity-90">9:00</div>
              </div>
            </div>
          </div>

          {/* 18:00 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>18:00</span>
          </div>

          {/* 20:00 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>20:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}