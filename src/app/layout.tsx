import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

import { mainFont } from "./fonts";
import LandingPage from "@/components/signin/landing-page";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getStatus } from "@/services/api/user";

export const metadata: Metadata = {
  title: "Tuktukwan",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const koaSid = cookies().get("koa.sid");
  const koaSidSig = cookies().get("koa.sid.sig");
  const status = await getStatus(koaSid, koaSidSig);
  // const status = {
  //   userId: "",
  //   token: "",
  //   credentialId: "asd",
  // };

  return (
    <html lang="en">
      <body className={mainFont.className}>
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
