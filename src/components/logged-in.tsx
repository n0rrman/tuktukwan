"use client";

import { useEffect, useState } from "react";

export default function LoggedIn() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tuktukwan.henriknorrman.com/api/auth/status").then((res) =>
      res.json().then((data) => {
        console.log("data:", data);
        setUser(data.user);
        setLoading(false);
      })
    );
  }, []);

  if (loading) {
    console.log("loading:", user);
    return <div>Loading...</div>;
  } else {
    if (user == "offline") {
      console.log("not logged in:", user);
      return <div>Not logged in</div>;
    } else {
      console.log("logged in:", user);
      return <div>{user} logged in</div>;
    }
  }
}
