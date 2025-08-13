"use client";

import { ChatContent } from "@/components/chat/ChatContent";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function ChatsPage() {
  return (
    <DashboardLayout>
      <ChatContent />
    </DashboardLayout>
  );
}
