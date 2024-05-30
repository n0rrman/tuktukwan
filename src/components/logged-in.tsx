"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
}

export default async function LoggedIn() {
  const [user, setUser] = useState<User>({ id: "" });

  useEffect(() => {
    fetch("https://tuktukwan.henriknorrman.com/api/auth/status").then((res) =>
      res.json().then((data) => {
        setUser(data);
      })
    );
  }, []);

  if (user.id == "") {
    return <div>Not logged in</div>;
  } else {
    return <div>{user.id} logged in</div>;
  }
}
