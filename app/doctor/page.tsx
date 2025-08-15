import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { WelcomeMessage } from "@/components/dashboard/WelcomeMessage";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { PatientStatistic } from "@/components/dashboard/PatientStatistic";
import { BottomSection } from "@/components/dashboard/BottomSection";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeMessage />
        <StatsCards />
        <PatientStatistic />
        <BottomSection />
      </div>
    </DashboardLayout>
  );
}
