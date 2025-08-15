"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SecretaryManagementContent } from "@/components/secretary/SecretaryManagementContent";

export default function SecretaryManagementPage() {
  return (
    <DashboardLayout>
      <SecretaryManagementContent />
    </DashboardLayout>
  );
}
