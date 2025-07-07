import { industries } from "@/data/industries";
import React from "react";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation"; // Use next/navigation for redirection
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard"); // Redirect to dashboard if already onboarded
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
