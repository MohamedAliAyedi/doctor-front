"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { NotificationsContent } from "@/components/notifications/NotificationsContent";

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <NotificationsContent />
    </DashboardLayout>
  );
}
