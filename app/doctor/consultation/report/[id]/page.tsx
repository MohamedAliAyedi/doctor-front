"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ConsultationReportContent } from "@/components/consultation/ConsultationReportContent";

export default function ConsultationReportPage() {
  return (
    <DashboardLayout>
      <ConsultationReportContent />
    </DashboardLayout>
  );
}
