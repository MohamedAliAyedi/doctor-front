"use client";

import { TrendingUp, Heart, Users, FileText } from "lucide-react";

const stats = [
  {
    title: "Revenue this month",
    value: "DT 5,000",
    subtitle: "5% from last month",
    icon: "$",
    bgColor: "bg-white",
    cardBg: "bg-primary",
    textColor: "text-primary",
  },
  {
    title: "Pending payments",
    value: "DT 1,100",
    subtitle: "12 invoices pending payment",
    icon: "♥",
    bgColor: "bg-white",
    cardBg: "bg-secondary",
    textColor: "text-secondary",
  },
  {
    title: "Today's patients",
    value: "DT 1,100",
    subtitle: "12 invoices awaiting payment",
    icon: "⚡",
    bgColor: "bg-white",
    cardBg: "bg-yellow-400",
    textColor: "text-yellow-400",
  },
  {
    title: "Paid invoices",
    value: "85",
    subtitle: "Out of 91 total invoices",
    icon: "📋",
    bgColor: "bg-white",
    cardBg: "bg-sky-400",
    textColor: "text-sky-400",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-2xl shadow-lg text-white relative overflow-hidden`}
        >
          <div className="flex items-start justify-between h-full">
            <div
              className={`${stat.cardBg} w-1/4 h-full flex items-center justify-center text-4xl`}
            >
              {stat.icon}
            </div>
            <div className={`${stat.textColor} ${stat.bgColor} flex-1 p-4`}>
              <p className="text-xl mb-2">{stat.title}</p>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              {stat.subtitle && <p className="text-sm">{stat.subtitle}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
