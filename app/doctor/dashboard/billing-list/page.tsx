"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BillingListContent } from "@/components/billing/BillingListContent";

export default function BillingListPage() {
  return (
    <DashboardLayout>
      <BillingListContent />
    </DashboardLayout>
  );
}
