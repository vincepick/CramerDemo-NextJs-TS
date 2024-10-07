"use client";

import "./UserDelete.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

const UserDelete = () => {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data: User[] = await response.json();
    setUsers(data);
  };

  const deleteUser = async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-delete-container">
      <h2 className="gradient-text">Manage Users</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
              <span className="user-id">ID: {user.id}</span>
            </div>
            <button
              className="delete-button ml-2"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDelete;
