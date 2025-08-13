"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Search,
  MoreHorizontal,
  Smile,
  Send,
  Paperclip,
  Download,
} from "lucide-react";

const chatList = [
  {
    id: 1,
    name: "Ibrahim Mekni",
    role: "DOC",
    avatar:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "3 min ago",
    unread: 0,
    active: false,
  },
  {
    id: 2,
    name: "Ibrahim Mekni",
    role: "Active 5min ago",
    avatar:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "",
    unread: 0,
    active: true,
  },
  {
    id: 3,
    name: "Mohammed Sfar",
    role: "DOC",
    avatar:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "18 min ago",
    unread: 1,
    active: false,
  },
  {
    id: 4,
    name: "Selma chebli",
    role: "Patient",
    avatar:
      "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "30 min ago",
    unread: 0,
    active: false,
  },
  {
    id: 5,
    name: "Michael Chebli",
    role: "DOC",
    avatar:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "1 hr ago",
    unread: 0,
    active: false,
  },
  {
    id: 6,
    name: "Ahmed Beji",
    role: "Child",
    avatar:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "2 hrs ago",
    unread: 1,
    active: false,
  },
  {
    id: 7,
    name: "Amine Hadji",
    role: "DOC",
    avatar:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "4 hrs ago",
    unread: 1,
    active: false,
  },
  {
    id: 8,
    name: "Sacha Kalel",
    role: "DOC",
    avatar:
      "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "3 days ago",
    unread: 1,
    active: false,
  },
  {
    id: 9,
    name: "Eva Jones",
    role: "MOTHER",
    avatar:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    lastMessage: "4 days ago",
    unread: 1,
    active: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "other",
    content: "Hi Dr Hamdi,",
    time: "1 WEEK AGO",
    showTime: true,
  },
  {
    id: 2,
    sender: "other",
    content: "Please send the images as discussed on your last visit",
    time: "",
    showTime: false,
  },
  {
    id: 3,
    sender: "me",
    content: "Here are the images, and don't forget your medications.",
    time: "28 min ago",
    showTime: false,
    images: [
      { id: 1, type: "image" },
      { id: 2, type: "image" },
      { id: 3, type: "image" },
      { id: 4, type: "video" },
    ],
  },
  {
    id: 4,
    sender: "other",
    content: "THANKS I'll use them and then get back to you ASAP",
    time: "TODAY",
    showTime: true,
  },
  {
    id: 5,
    sender: "me",
    content: "",
    time: "28 min ago",
    showTime: false,
    file: {
      name: "Transcend.zip",
      size: "1 MB",
    },
  },
];

export function ChatContent() {
  const [selectedChat, setSelectedChat] = useState(2);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="flex h-[calc(100vh-120px)] bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-50 overflow-hidden">
      {/* Left Sidebar - Chat List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-pink-500">Chats</h2>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chatList.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedChat === chat.id
                  ? "bg-blue-50 border-l-4 border-l-blue-500"
                  : ""
              }`}
            >
              <Avatar className="w-12 h-12 mr-3">
                <AvatarImage src={chat.avatar} />
                <AvatarFallback>
                  {chat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate text-sm">
                    {chat.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {chat.lastMessage && (
                      <span className="text-xs text-gray-500">
                        {chat.lastMessage}
                      </span>
                    )}
                    {chat.unread > 0 && (
                      <Badge className="bg-pink-500 hover:bg-pink-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center p-0">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{chat.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search name or gender"
              className="pl-10 bg-white border-gray-200 rounded-lg h-10 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Chat Conversation */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white/80">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>IM</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-gray-900">Ibrahim Mekni</h3>
              <p className="text-sm text-gray-500">Active 5min ago</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              {message.showTime && (
                <div className="text-center text-xs text-gray-400 mb-4">
                  {message.time}
                </div>
              )}

              <div
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md ${
                    message.sender === "me" ? "order-2" : "order-1"
                  }`}
                >
                  {message.content && (
                    <div
                      className={`px-4 py-2 rounded-2xl mb-2 ${
                        message.sender === "me"
                          ? "bg-pink-500 text-white ml-auto"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  )}
                  {message.sender === "other" && (
                    <Avatar className="w-8 h-8 mb-2">
                      <AvatarImage src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>IM</AvatarFallback>
                    </Avatar>
                  )}

                  {message.images && (
                    <div className="grid grid-cols-4 mt-2">
                      {message.images.map((img) => (
                        <div key={img.id} className="relative">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex justify-center">
                            {img.type === "video" ? (
                              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                              </div>
                            ) : (
                              <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {message.file && (
                    <div className="bg-gray-100 rounded-lg p-3 mt-2 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {message.file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {message.file.size}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <Download className="w-4 h-4 text-gray-500" />
                      </Button>
                    </div>
                  )}

                  {message.time && !message.showTime && (
                    <p className="text-xs text-gray-400 mt-1 text-right">
                      DOC {message.time}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white/80">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <Paperclip className="w-4 h-4 text-gray-500" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder="Start typing here"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="pr-10 bg-white border-gray-200 rounded-full h-10"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 p-0"
              >
                <Smile className="w-4 h-4 text-gray-500" />
              </Button>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white w-10 h-10 rounded-full p-0">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
