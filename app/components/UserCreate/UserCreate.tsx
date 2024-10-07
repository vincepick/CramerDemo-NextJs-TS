"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./UserCreate.css";

const UserCreate: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [hashedPassword, setPassword] = useState<string>("");
  const router = useRouter();

  const createUser = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, hashedPassword }),
    });
    if (response.ok) {
      setName("");
      setEmail("");
      setPassword("");
      router.refresh();
    } else {
      console.error("Failed to create user");
    }
  };

  return (
    <div className="form-container">
      <h2 className="gradient-text">Create New User</h2>
      <form className="user-form" onSubmit={createUser}>
        <div className="form-group">
          <label htmlFor="name" className="gradient-text">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="gradient-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="gradient-text">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={hashedPassword}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserCreate;
