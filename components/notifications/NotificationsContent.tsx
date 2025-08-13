"use client";

import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const notifications = [
  {
    id: 1,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: false,
    hasAvatar: true,
  },
  {
    id: 2,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: false,
    hasAvatar: true,
  },
  {
    id: 3,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: false,
    hasAvatar: true,
  },
  {
    id: 4,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
  {
    id: 5,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
];

const olderNotifications = [
  {
    id: 6,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
  {
    id: 7,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
  {
    id: 8,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
  {
    id: 9,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
  {
    id: 10,
    type: "Update Message",
    message:
      "This is to inform you that on Monday 10oct 2024 you have an appointment with Patient Ahmad",
    time: "3:23pm",
    isRead: true,
    hasAvatar: false,
  },
];

export function NotificationsContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        {/* <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
          <Bell className="w-5 h-5 text-white" />
        </div> */}
        <h1 className="text-2xl font-bold text-secondary">Notifications</h1>
      </div>

      {/* Notifications Container */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-50 overflow-hidden">
        {/* Today Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today</h2>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {/* Notification Icon/Avatar */}
                <div className="flex-shrink-0">
                  {notification.hasAvatar ? (
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                </div>

                {/* Notification Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {notification.isRead ? (
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        ) : (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <span className="text-sm font-medium text-blue-600">
                          {notification.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 ml-4 flex-shrink-0">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 25th June Section */}
        <div className="border-t border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            25th June
          </h2>
          <div className="space-y-4">
            {olderNotifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {/* Notification Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-gray-500" />
                  </div>
                </div>

                {/* Notification Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-600">
                          {notification.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 ml-4 flex-shrink-0">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
