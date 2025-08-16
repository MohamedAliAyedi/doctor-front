"use client";

import { ConsultationPatientContent } from "@/components/consultation/ConsultationPatientContent";
import { DashboardLayout } from "@/components/doctor/dashboard/DashboardLayout";

export default function ConsultationPatientPage() {
  return (
    <DashboardLayout>
      <ConsultationPatientContent />
    </DashboardLayout>
  );
}
