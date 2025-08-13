"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { InvitationRequestsContent } from "@/components/invitations/InvitationRequestsContent";

export default function InvitationRequestsPage() {
  return (
    <DashboardLayout>
      <InvitationRequestsContent />
    </DashboardLayout>
  );
}
