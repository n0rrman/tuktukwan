import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import { getStatus } from "@/services/api/user";
import CreateAccountPage from "@/app/create-account-page";
import LandingPage from "@/app/landing-page";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import { SessionProvider } from "@/context/session-provider";
import { cookies } from "next/headers";

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

// export async function getServerSideProps(context: any) {
// return { props: { cookie } };
// }

export default async function RootLayout({
  children,
}: // req,
// cookie,
Readonly<{
  children: React.ReactNode;
  // req: Request;
  // cookie: string;
}>) {
  // console.log();
  const koaSid = cookies().get("koa.sid");
  const koaSidSig = cookies().get("koa.sid.sig");

  console.log(koaSid);
  console.log(koaSidSig);
  // const x = useSession();
  // console.log("cookie:", cookie);

  // let status: ;
  let status = {
    credential_id: "22",
    token: "",
    user_id: "22",
  };
  if (koaSid && koaSidSig) {
    status = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`,
      {
        method: "GET",
        headers: {
          Cookie: `${koaSid.name}=${koaSid.value};${koaSidSig.name}=${koaSidSig.value};`,
        },
      }
    ).then((res) => res.json());
  }
  // const status = await getStatus();
  // console.log("credential", status.credential_id);
  // console.log("token", status.token);
  // console.log("user_id", status.user_id);

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
