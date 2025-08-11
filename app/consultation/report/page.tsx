"use client";

import { ConsultationPatientContent } from "@/components/consultation/ConsultationPatientContent";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function ConsultationPatientPage() {
  return (
    <DashboardLayout>
      <ConsultationPatientContent />
    </DashboardLayout>
  );
}
