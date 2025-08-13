"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PatientListContent } from "@/components/patients-list/PatientListContent";

export default function PatientListPage() {
  return (
    <DashboardLayout>
      <PatientListContent />
    </DashboardLayout>
  );
}
