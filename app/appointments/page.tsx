"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AppointmentsContent } from "@/components/appointments/AppointmentsContent";

export default function AppointmentsPage() {
  return (
    <DashboardLayout>
      <AppointmentsContent />
    </DashboardLayout>
  );
}