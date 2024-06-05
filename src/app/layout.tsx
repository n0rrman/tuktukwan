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
      userId: "!",
      token: "",
      credentialId: "!!",
    };
  } else {
    const koaSid = cookies().get("koa.sid");
    const koaSidSig = cookies().get("koa.sid.sig");
    status = await getStatus(koaSid, koaSidSig);
  }

  return (
    <html lang="en">
      <body className={`{mainFont.className} bg-slate-300`}>
        <TermsPage />
        <PolicyPage />
        {status.userId ? (
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="mx-auto pt-28 max-w-[75rem] p-5 w-full">
              {children}
            </main>
            <Footer />
          </div>
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
