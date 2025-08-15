"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ConsultationHistoryContent } from "@/components/consultation-history/ConsultationHistoryContent";

export default function ConsultationHistoryPage() {
  return (
    <DashboardLayout>
      <ConsultationHistoryContent />
    </DashboardLayout>
  );
}
