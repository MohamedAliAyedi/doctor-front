"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BloodResultsContent } from "@/components/medical-record/BloodResultsContent";

export default function BloodResultsPage() {
  return (
    <DashboardLayout>
      <BloodResultsContent />
    </DashboardLayout>
  );
}
