"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserCreate: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [hashedPassword, setPassword] = useState<string>("");
  const router = useRouter();

  const createUser = async (event: React.FormEvent) => {
    event.preventDefault();
    // console.log({ username, hashedPassword });
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, hashedPassword }),
    });
    router.refresh();
  };

  return (
    <form onSubmit={createUser}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
