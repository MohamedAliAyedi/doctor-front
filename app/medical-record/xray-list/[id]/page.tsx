"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { XRayListContent } from "@/components/medical-record/XRayListContent";

export default function XRayListPage() {
  return (
    <DashboardLayout>
      <XRayListContent />
    </DashboardLayout>
  );
}