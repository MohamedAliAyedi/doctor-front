"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PatientProfileContent } from "@/components/patient-profile/PatientProfileContent";

export default function PatientProfilePage() {
  return (
    <DashboardLayout>
      <PatientProfileContent />
    </DashboardLayout>
  );
}