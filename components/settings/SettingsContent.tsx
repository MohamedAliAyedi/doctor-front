"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const settingsTabs = [
  { id: "general", label: "General", active: true },
  { id: "profile", label: "Profile", active: false },
  { id: "password", label: "Password", active: false },
  { id: "notification", label: "Notification", active: false },
  { id: "appointment", label: "Appointment", active: false },
  { id: "communication", label: "Communication", active: false },
  { id: "integration", label: "Integration", active: false },
  { id: "theme", label: "Theme", active: false },
  { id: "service", label: "service", active: false },
  { id: "permission", label: "Permission", active: false },
];

export function SettingsContent() {
  const [activeTab, setActiveTab] = useState("general");
  const [language, setLanguage] = useState("English (USA)");
  const [timezone, setTimezone] = useState("UCT +00:00");
  const [dateFormat, setDateFormat] = useState("mm/dd/yyyy");
  const [timeFormat, setTimeFormat] = useState("12 hours");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-pink-500">Settings</h1>
      </div>

      {/* Settings Container */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-50 overflow-hidden">
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex space-x-8 overflow-x-auto">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content */}
        <div className="p-8">
          {activeTab === "general" && (
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-pink-500">
                General settings
              </h2>

              {/* Language Section */}
              <div className="space-y-6">
                <h3 className="text-base font-medium text-pink-500">
                  Language
                </h3>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-700">
                    Language
                  </label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-80 h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                      <SelectItem value="English (USA)">
                        English (USA)
                      </SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="Arabic">Arabic</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date & Time Section */}
              <div className="space-y-6">
                <h3 className="text-base font-medium text-pink-500">
                  Date & Time
                </h3>

                {/* Timezone */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-700">
                    Timezone
                  </label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger className="w-80 h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                      <SelectItem value="UCT +00:00">UCT +00:00</SelectItem>
                      <SelectItem value="UCT +01:00">UCT +01:00</SelectItem>
                      <SelectItem value="UCT +02:00">UCT +02:00</SelectItem>
                      <SelectItem value="UCT -05:00">UCT -05:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time Format */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Date Format */}
                  <div className="space-y-4">
                    <label className="block text-sm text-gray-700">
                      Date Format
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="date-format-1"
                          name="dateFormat"
                          value="mm/dd/yyyy"
                          checked={dateFormat === "mm/dd/yyyy"}
                          onChange={(e) => setDateFormat(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="date-format-1"
                          className="text-sm text-gray-700"
                        >
                          mm/dd/yyyy
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="date-format-2"
                          name="dateFormat"
                          value="mm/dd/yyyy"
                          checked={dateFormat === "mm/dd/yyyy"}
                          onChange={(e) => setDateFormat(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="date-format-2"
                          className="text-sm text-gray-700"
                        >
                          mm/dd/yyyy
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Time Format */}
                  <div className="space-y-4">
                    <label className="block text-sm text-gray-700">
                      Time Format
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="time-format-12"
                          name="timeFormat"
                          value="12 hours"
                          checked={timeFormat === "12 hours"}
                          onChange={(e) => setTimeFormat(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="time-format-12"
                          className="text-sm text-gray-700"
                        >
                          12 hours
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="time-format-24"
                          name="timeFormat"
                          value="24 hours"
                          checked={timeFormat === "24 hours"}
                          onChange={(e) => setTimeFormat(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="time-format-24"
                          className="text-sm text-gray-700"
                        >
                          24 hours
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content would go here */}
          {activeTab !== "general" && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {settingsTabs.find((tab) => tab.id === activeTab)?.label}{" "}
                settings coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
