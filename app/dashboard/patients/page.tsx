"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PatientManagementContent } from "@/components/dashboard/PatientManagementContent";

export default function PatientsPage() {
  return (
    <DashboardLayout>
      <PatientManagementContent />
    </DashboardLayout>
  );
}
