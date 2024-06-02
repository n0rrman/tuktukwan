// "use client";

// import { getStatus } from "@/services/api/user";
// import { createContext, useEffect, useState } from "react";

// interface SessionProviderProps {
//   children: React.ReactNode;
// }

// const SessionContext = createContext("");

// export const SessionProvider = ({ children }: SessionProviderProps) => {
//   const [loginStatus, setLoginStatus] = useState("offline");

//   useEffect(() => {
//     getStatus().then((status) => {
//       setLoginStatus(status.credential_id);
//     });
//   }, []);

//   return (
//     <SessionContext.Provider value={loginStatus}>
//       {children}
//     </SessionContext.Provider>
//   );
// };
