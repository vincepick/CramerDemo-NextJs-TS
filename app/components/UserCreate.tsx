"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserCreate: React.FC = () => {
  const [email, setUsername] = useState<string>("");
  const [hashedPassword, setPassword] = useState<string>("");

  const createUser = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ email, hashedPassword });
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, hashedPassword }),
    });
  };

  return (
    <form onSubmit={createUser}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={hashedPassword}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserCreate;
