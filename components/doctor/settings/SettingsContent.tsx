"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Copy, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const settingsTabs = [
  { id: "general", label: "General", active: false },
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

  // Password form state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Profile form state
  const [firstName, setFirstName] = useState("Ahmed");
  const [lastName, setLastName] = useState("Ben Ahmed");
  const [email, setEmail] = useState("Ahmed@mail.com");
  const [phoneNumber, setPhoneNumber] = useState("+216 92 928 2891");
  const [licenceId, setLicenceId] = useState("");
  const [address, setAddress] = useState("21 Street, Hammamet");

  // Appointment settings state
  const [availabilityFrom, setAvailabilityFrom] = useState("9:00 AM");
  const [availabilityTo, setAvailabilityTo] = useState("6:00 PM");
  const [breakFrom, setBreakFrom] = useState("12:00 PM");
  const [breakTo, setBreakTo] = useState("1:00 PM");
  const [workingDays, setWorkingDays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const [appointmentTypes, setAppointmentTypes] = useState([
    { id: 1, name: "Consultation", checked: true },
    { id: 2, name: "Follow up", checked: true },
    { id: 3, name: "Virtual", checked: false },
  ]);
  const [bufferTime, setBufferTime] = useState("30 min");
  const [newAppointmentType, setNewAppointmentType] = useState("");

  // Notification settings state
  const [emailNotificationFreq, setEmailNotificationFreq] = useState("never");
  const [emailNewsUpdates, setEmailNewsUpdates] = useState({
    tipsAndTricks: true,
    offersAndPromotions: true,
    researchOpportunities: true,
    developerNewsletter: true,
    platformChangelog: true,
  });
  const [signInNotifications, setSignInNotifications] = useState("most-secure");

  // Communication settings state
  const [emailSettings, setEmailSettings] = useState({
    notifications: true,
    newsletterSubscriptions: true,
    patientCommunication: true,
  });
  const [smsSettings, setSmsSettings] = useState({
    appointmentAlerts: true,
    announcements: true,
    promotionalOffers: true,
  });
  const [videoCallSettings, setVideoCallSettings] = useState({
    patient: true,
    secretary: true,
    otherDoctor: true,
  });

  const toggleWorkingDay = (day: string) => {
    setWorkingDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleAppointmentType = (id: number) => {
    setAppointmentTypes((prev) =>
      prev.map((type) =>
        type.id === id ? { ...type, checked: !type.checked } : type
      )
    );
  };

  const addAppointmentType = () => {
    if (newAppointmentType.trim()) {
      const newType = {
        id: appointmentTypes.length + 1,
        name: newAppointmentType,
        checked: true,
      };
      setAppointmentTypes([...appointmentTypes, newType]);
      setNewAppointmentType("");
    }
  };

  const copyUserId = () => {
    navigator.clipboard.writeText("215368");
  };

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
          {/* General Settings */}
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
                          value="dd/mm/yyyy"
                          checked={dateFormat === "dd/mm/yyyy"}
                          onChange={(e) => setDateFormat(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="date-format-2"
                          className="text-sm text-gray-700"
                        >
                          dd/mm/yyyy
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

          {/* Profile Settings */}
          {activeTab === "profile" && (
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-pink-500">
                Profile settings
              </h2>

              <div className="flex items-start space-x-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face" />
                    <AvatarFallback className="bg-blue-500 text-white text-2xl">
                      A
                    </AvatarFallback>
                  </Avatar>
                  <button className="text-sm text-blue-500 hover:text-blue-600">
                    Click to change photo
                  </button>

                  {/* My ID Section */}
                  <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold text-pink-500 mb-2">
                      My ID
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-700">
                        215368
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyUserId}
                        className="w-6 h-6 p-0 text-blue-500 hover:bg-blue-50"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <Label className="text-sm text-blue-500">First name</Label>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <Label className="text-sm text-blue-500">
                      Search keywords
                    </Label>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label className="text-sm text-blue-500">Email</Label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label className="text-sm text-blue-500">
                      Search keywords
                    </Label>
                    <Input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>

                  {/* Licence ID */}
                  <div className="space-y-2">
                    <Label className="text-sm text-blue-500">Licence ID</Label>
                    <Input
                      placeholder="Search keywords"
                      value={licenceId}
                      onChange={(e) => setLicenceId(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label className="text-sm text-blue-500">
                      Search keywords
                    </Label>
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-3 h-12 rounded-full font-medium">
                  Save changes
                </Button>
              </div>
            </div>
          )}

          {/* Password Settings */}
          {activeTab === "password" && (
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-pink-500">Password</h2>

              <div className="space-y-6 max-w-md">
                {/* Current Password */}
                <div className="space-y-2">
                  <Label className="text-sm text-blue-500">
                    Current password
                  </Label>
                  <Input
                    type="password"
                    placeholder="Current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                  />
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <Label className="text-sm text-blue-500">New password</Label>
                  <Input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                  />
                </div>

                {/* Confirm New Password */}
                <div className="space-y-2">
                  <Label className="text-sm text-blue-500">
                    Confirm new password
                  </Label>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                  />
                </div>

                {/* Save Button */}
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-3 h-12 rounded-full font-medium">
                  Save changes
                </Button>
              </div>
            </div>
          )}

          {/* Appointment Settings */}
          {activeTab === "appointment" && (
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-pink-500">
                Appointment settings
              </h2>

              {/* Availability Hours */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-pink-500">
                  Availability Hours
                </h3>
                <div className="grid grid-cols-2 gap-6 max-w-2xl">
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">From</Label>
                    <Input
                      value={availabilityFrom}
                      onChange={(e) => setAvailabilityFrom(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">To</Label>
                    <Input
                      value={availabilityTo}
                      onChange={(e) => setAvailabilityTo(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>
                </div>
              </div>

              {/* Break Time */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-pink-500">
                  Break time
                </h3>
                <div className="grid grid-cols-2 gap-6 max-w-2xl">
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">From</Label>
                    <Input
                      value={breakFrom}
                      onChange={(e) => setBreakFrom(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-600">To</Label>
                    <Input
                      value={breakTo}
                      onChange={(e) => setBreakTo(e.target.value)}
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>
                </div>
              </div>

              {/* Working Days */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-pink-500">
                  Working days
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <Button
                      key={day}
                      onClick={() => toggleWorkingDay(day)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        workingDays.includes(day)
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                      }`}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Appointment Types */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-pink-500">
                  Appointment types
                </h3>
                <div className="space-y-3">
                  {appointmentTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-3">
                      <Checkbox
                        checked={type.checked}
                        onCheckedChange={() => toggleAppointmentType(type.id)}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                      />
                      <span className="text-sm text-gray-700">{type.name}</span>
                    </div>
                  ))}

                  {/* Add new appointment type */}
                  <div className="flex items-center space-x-3 mt-4">
                    <span className="text-sm text-blue-500">
                      Add appointment Type
                    </span>
                    <div className="flex items-center space-x-2">
                      <Input
                        placeholder="Add appointment type"
                        value={newAppointmentType}
                        onChange={(e) => setNewAppointmentType(e.target.value)}
                        className="h-10 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 w-48"
                      />
                      <Button
                        onClick={addAppointmentType}
                        className="w-8 h-8 p-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buffer Time */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-pink-500">
                  Buffer time (Between consultations)
                </h3>
                <Select value={bufferTime} onValueChange={setBufferTime}>
                  <SelectTrigger className="w-48 h-12 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                    <SelectItem value="15 min">15 min</SelectItem>
                    <SelectItem value="30 min">30 min</SelectItem>
                    <SelectItem value="45 min">45 min</SelectItem>
                    <SelectItem value="60 min">60 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notification" && (
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-pink-500">
                Notifications settings
              </h2>

              {/* Email Notifications */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    When you&apos;re busy or not online, Substance can send you
                    email notifications for any new direct messages or mentions
                    of your name.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    Send me email notifications:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="email-notifications"
                        name="emailNotifications"
                        value="send"
                        checked={emailNotificationFreq === "send"}
                        onChange={(e) =>
                          setEmailNotificationFreq(e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="email-notifications"
                        className="text-sm text-gray-700"
                      >
                        Send me email notifications:
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="once-hour"
                        name="emailNotifications"
                        value="once-hour"
                        checked={emailNotificationFreq === "once-hour"}
                        onChange={(e) =>
                          setEmailNotificationFreq(e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="once-hour"
                        className="text-sm text-gray-700"
                      >
                        Once an hour at most
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="never"
                        name="emailNotifications"
                        value="never"
                        checked={emailNotificationFreq === "never"}
                        onChange={(e) =>
                          setEmailNotificationFreq(e.target.value)
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor="never" className="text-sm text-gray-700">
                        Never
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email News & Updates */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Email News & Updates
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    From time to time, we&apos;d like to send you emails with
                    interesting news about Cuboid and your workspace. You can
                    choose which of these updates you&apos;d like to receive:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { key: "tipsAndTricks", label: "Tips and Tricks" },
                    {
                      key: "offersAndPromotions",
                      label: "Offers and Promotions",
                    },
                    {
                      key: "researchOpportunities",
                      label: "Research Opportunities",
                    },
                    {
                      key: "developerNewsletter",
                      label:
                        "Cuboid Developer Newsletter: Best practices for connecting your work to Substance via our platform",
                    },
                    {
                      key: "platformChangelog",
                      label:
                        "Cuboid Platform Changelog: Stay in the know when we make updates to our APIs",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-start space-x-3">
                      <Checkbox
                        checked={
                          emailNewsUpdates[
                            item.key as keyof typeof emailNewsUpdates
                          ]
                        }
                        onCheckedChange={(checked) =>
                          setEmailNewsUpdates((prev) => ({
                            ...prev,
                            [item.key]: checked as boolean,
                          }))
                        }
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                      />
                      <label className="text-sm text-gray-700 leading-relaxed">
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sign-in Notifications */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    Sign-in Notifications
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    These emails help keep your Substance account secure. If you
                    haven&apos;t already, you should also enable two-factor
                    authentication.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="radio"
                      id="most-secure"
                      name="signInNotifications"
                      value="most-secure"
                      checked={signInNotifications === "most-secure"}
                      onChange={(e) => setSignInNotifications(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1"
                    />
                    <div>
                      <label
                        htmlFor="most-secure"
                        className="text-sm font-medium text-gray-900"
                      >
                        Most secure
                      </label>
                      <p className="text-sm text-gray-600 mt-1">
                        Receive an email anytime someone signs in to your Cuboid
                        account from an unrecognized device.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="radio"
                      id="standard"
                      name="signInNotifications"
                      value="standard"
                      checked={signInNotifications === "standard"}
                      onChange={(e) => setSignInNotifications(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1"
                    />
                    <div>
                      <label
                        htmlFor="standard"
                        className="text-sm font-medium text-gray-900"
                      >
                        Standard
                      </label>
                      <p className="text-sm text-gray-600 mt-1">
                        Receive an email when someone signs in from a new
                        location, with an unrecognized device.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="radio"
                      id="no-notifications"
                      name="signInNotifications"
                      value="no-notifications"
                      checked={signInNotifications === "no-notifications"}
                      onChange={(e) => setSignInNotifications(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1"
                    />
                    <div>
                      <label
                        htmlFor="no-notifications"
                        className="text-sm font-medium text-gray-900"
                      >
                        Don&apos;t send me any sign-in notifications
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Communication Settings */}
          {activeTab === "communication" && (
            <div className="space-y-8">
              <h2 className="text-lg font-semibold text-pink-500">
                Communication settings
              </h2>

              {/* Email Section */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">Email</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Notifications</span>
                    <Switch
                      checked={emailSettings.notifications}
                      onCheckedChange={(checked) =>
                        setEmailSettings((prev) => ({
                          ...prev,
                          notifications: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Newsletter Subscriptions
                    </span>
                    <Switch
                      checked={emailSettings.newsletterSubscriptions}
                      onCheckedChange={(checked) =>
                        setEmailSettings((prev) => ({
                          ...prev,
                          newsletterSubscriptions: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Patient Communication
                    </span>
                    <Switch
                      checked={emailSettings.patientCommunication}
                      onCheckedChange={(checked) =>
                        setEmailSettings((prev) => ({
                          ...prev,
                          patientCommunication: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SMS Section */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">SMS</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Appointment Alerts
                    </span>
                    <Switch
                      checked={smsSettings.appointmentAlerts}
                      onCheckedChange={(checked) =>
                        setSmsSettings((prev) => ({
                          ...prev,
                          appointmentAlerts: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Announcements</span>
                    <Switch
                      checked={smsSettings.announcements}
                      onCheckedChange={(checked) =>
                        setSmsSettings((prev) => ({
                          ...prev,
                          announcements: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Promotional Offers
                    </span>
                    <Switch
                      checked={smsSettings.promotionalOffers}
                      onCheckedChange={(checked) =>
                        setSmsSettings((prev) => ({
                          ...prev,
                          promotionalOffers: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Video Call Settings */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">
                  Video Call Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Patient</span>
                    <Switch
                      checked={videoCallSettings.patient}
                      onCheckedChange={(checked) =>
                        setVideoCallSettings((prev) => ({
                          ...prev,
                          patient: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Secretary</span>
                    <Switch
                      checked={videoCallSettings.secretary}
                      onCheckedChange={(checked) =>
                        setVideoCallSettings((prev) => ({
                          ...prev,
                          secretary: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Other Doctor</span>
                    <Switch
                      checked={videoCallSettings.otherDoctor}
                      onCheckedChange={(checked) =>
                        setVideoCallSettings((prev) => ({
                          ...prev,
                          otherDoctor: checked,
                        }))
                      }
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content placeholder */}
          {![
            "general",
            "profile",
            "password",
            "appointment",
            "notification",
            "communication",
          ].includes(activeTab) && (
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
