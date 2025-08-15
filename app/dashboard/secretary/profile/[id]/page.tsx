"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SecretaryProfileContent } from "@/components/secretary/SecretaryProfileContent";

export default function SecretaryProfilePage() {
  return (
    <DashboardLayout>
      <SecretaryProfileContent />
    </DashboardLayout>
  );
}
