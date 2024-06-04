import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

import { mainFont } from "./fonts";
import LandingPage from "@/components/signin/landing-page";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getStatus } from "@/services/api/user-server";
import TermsPage from "./terms-page";
import PolicyPage from "./policy-page";

export const metadata: Metadata = {
  title: "Tuktukwan",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let status;
  if (process.env.NODE_ENV === "development") {
    status = {
      userId: "",
      token: "",
      credentialId: "",
    };
  } else {
    const koaSid = cookies().get("koa.sid");
    const koaSidSig = cookies().get("koa.sid.sig");
    status = await getStatus(koaSid, koaSidSig);
  }

  return (
    <html lang="en">
      <body className={mainFont.className}>
        <TermsPage />
        <PolicyPage />
        {status.userId ? (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        ) : (
          <LandingPage
            userId={status.userId}
            credentialId={status.credentialId}
          />
        )}
      </body>
    </html>
  );
}
