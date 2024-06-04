import { Suspense } from "react";

import LoginModal from "@/components/signin/login-modal";
import CreateAccountModal from "./create-account-modal";
import LandingHeader from "./landing-header";
import Footer from "@/components/footer";
import LandingHero from "./landing-hero";
import HeroBackground from "./hero-background";
import InfoSection from "./info-section";

interface LandingPageProps {
  userId: string;
  credentialId: string;
}

export default function LandingPage({
  userId,
  credentialId,
}: LandingPageProps) {
  const showLogin = !credentialId;
  const showCreateAccount = !userId && !!credentialId;

  return (
    <>
      <main className="">
        <Suspense>
          {showLogin && <LoginModal />}
          {showCreateAccount && <CreateAccountModal />}
        </Suspense>
        <HeroBackground />
        <div className="absolute inset-0 flex flex-col">
          <LandingHeader />
          <LandingHero />
        </div>
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
