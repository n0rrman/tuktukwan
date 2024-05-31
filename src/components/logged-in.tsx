"use client";

import { useEffect, useState } from "react";

interface User {
  user_id: string;
  token: string;
  credential_id: string;
}

export default function LoggedIn() {
  const [user, setUser] = useState<User>({
    user_id: "",
    token: "",
    credential_id: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tuktukwan.henriknorrman.com/api/auth/status").then((res) => {
      res.json().then((data) => {
        setUser(data);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    if (!user.credential_id) {
      return <div>Not logged in</div>;
    } else {
      return <div>User id: {user.credential_id}</div>;
    }
  }
}
