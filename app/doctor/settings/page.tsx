"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SettingsContent } from "@/components/settings/SettingsContent";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsContent />
    </DashboardLayout>
  );
}
