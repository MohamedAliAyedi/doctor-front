"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ConnectPatientContent } from "@/components/connect-patient/ConnectPatientContent";

export default function ConnectPatientPage() {
  return (
    <DashboardLayout>
      <ConnectPatientContent />
    </DashboardLayout>
  );
}
