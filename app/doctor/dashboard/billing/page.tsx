"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BillingContent } from "@/components/billing/BillingContent";

export default function BillingPage() {
  return (
    <DashboardLayout>
      <BillingContent />
    </DashboardLayout>
  );
}
