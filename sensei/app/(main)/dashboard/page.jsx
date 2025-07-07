import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation"; // Use next/navigation for redirection
import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/dashboard-view";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  const insights = await getIndustryInsights(); // Fetch industry insights

  if (!isOnboarded) {
    redirect("/onboarding"); // Redirect to dashboard if already onboarded
  }
  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
};

export default IndustryInsightsPage;
