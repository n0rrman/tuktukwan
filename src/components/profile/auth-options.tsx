"use client";

// remove user verified + created at..

interface Option {
  id: number;
  auth_id: string;
  auth_username: string;
  auth_provider: string;
  auth_picture: string;
}

import { getAllCredentials } from "@/services/api/user-client";

export default async function AuthOptions() {
  const options = await getAllCredentials();

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
      <h2>options</h2>
      <div>{renderedOptions}</div>
    </div>
  );
}