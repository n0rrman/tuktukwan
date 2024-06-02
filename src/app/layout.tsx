import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import { getStatus } from "@/services/api/user";
import CreateAccountPage from "@/app/create-account-page";
import LandingPage from "@/app/landing-page";
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
  //   credential_id: "22",
  //   token: "",
  //   user_id: "22",
  // };
  console.log("credential", status.credential_id);
  console.log("token", status.token);
  console.log("user_id", status.user_id);

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
