"use client";

import { getAllCredentials } from "@/services/api/user-client";
import { useState, useEffect } from "react";
// remove user verified + created at..

interface Option {
  id: number;
  auth_id: string;
  auth_username: string;
  auth_provider: string;
  auth_picture: string;
}

export default function AuthOptions() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        await getAllCredentials().then((data) => {
          console.log(data);
          setOptions(data);
          setLoading(false);
        });
      } catch (err: unknown) {
        console.log("whoopsie??");
      }
    })();
  }, [options]);

  const renderedOptions = options.map((option: Option) => {
    return (
      <div key={option.id}>
        <div>id: {option.auth_id}</div>
        <div>username: {option.auth_username}</div>
        <div>provider: {option.auth_provider}</div>
        <div>picture: {option.auth_picture}</div>
      </div>
    );
  });

  return (
    <div>
      <h2>options:</h2>
      <p>{loading && "loading"}</p>
      <div>{renderedOptions}</div>
    </div>
  );
}
