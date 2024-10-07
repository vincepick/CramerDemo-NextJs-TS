"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

const UsersLink = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-3 items-center">
      {status === "loading" && <div className="gradient__text">Loading...</div>}
      {status === "authenticated" && (
        <div className="flex items-center space-x-3">
          <Link href="/users">
            <button className="cramer__navbar-sign">Users</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UsersLink;
