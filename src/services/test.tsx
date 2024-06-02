"use client";

// import { getStatus, revalidate } from "./api/user";

// export const Test1 = () => {
//   return (
//     <button
//       onClick={async () => {
//         console.log(process.env.NEXT_PUBLIC_HOST_URL);

//         const status = await fetch(
//           `${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`
//         ).then((res) => res.json());
//         // const status = {
//         //   credential_id: "22",
//         //   token: "",
//         //   user_id: "22",
//         // };
//         console.log("credential", status.credential_id);
//         console.log("token", status.token);
//         console.log("user_id", status.user_id);
//       }}
//     >
//       status
//     </button>
//   );
// };

// export const Test2 = () => {
//   return <button onClick={() => revalidate()}>revalidate</button>;
// };
// export const Test3 = () => {
//   return (
//     <button
//       onClick={async () => {
//         console.log(process.env.NEXT_PUBLIC_HOST_URL);

//         const status = await fetch(
//           `${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`,
//           { cache: "no-store" }
//         ).then((res) => res.json());
//         // const status = {
//         //   credential_id: "22",
//         //   token: "",
//         //   user_id: "22",
//         // };
//         console.log("credential", status.credential_id);
//         console.log("token", status.token);
//         console.log("user_id", status.user_id);
//       }}
//     >
//       status-nocache
//     </button>
//   );
// };
