"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { XRayResultsContent } from "@/components/medical-record/XRayResultsContent";

export default function XRayResultsPage() {
  return (
    <DashboardLayout>
      <XRayResultsContent />
    </DashboardLayout>
  );
}