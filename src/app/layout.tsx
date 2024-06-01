import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import { getStatus } from "@/services/api/user";
import CreateAccountPage from "./create-account-page";
import LandingPage from "./landing-page";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const mainFont = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tuktukwan",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const status = await getStatus();
  // const status = {
  //   credential_id: "",
  //   token: "",
  //   user_id: "",
  // };

  const renderMode = (children: React.ReactNode) => {
    if (status.credential_id && status.user_id) {
      return (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      );
    } else if (status.credential_id) {
      return <CreateAccountPage />;
    } else {
      return <LandingPage />;
    }
  };

  return (
    <html lang="en">
      <body className={poppins.className}>{renderMode(children)}</body>
    </html>
  );
}
