"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

const LoginButton = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-3 items-center">
      {status === "loading" && <div className="gradient__text">Loading...</div>}
      {status === "authenticated" && (
        <div className="flex items-center space-x-3">
          <h1 className="text-white">Hi {session.user!.name}</h1>
          <Link href="/api/auth/signout">
            <button className="cramer__navbar-sign">Sign Out</button>
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">
          <button className="cramer__navbar-sign">Login</button>
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
