"use client";

import React, { useEffect, useState } from "react";
import { isTemplateLiteralTypeNode } from "typescript";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
}

const UserDelete = () => {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data: User[] = await response.json();
    setUsers(data);
    console.log(data);
  };

  const deleteUser = async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    // router.refresh();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.email}, {user.id}
          <button className="ml-2" onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserDelete;
