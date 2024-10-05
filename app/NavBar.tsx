"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex space-x-3">
      <Link href="/" className="mr-5 gradient__text">
        Cramer Fish Sciences
      </Link>
      <Link href="/" className="gradient__text">
        Home
      </Link>
      <Link href="/users" className="gradient__text">
        User Management
      </Link>
      {status === "loading" && <div className="gradient__text">Loading...</div>}
      {status === "authenticated" && (
        <div>
          <span className="gradient__text">{session.user!.name}</span>
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

export default NavBar;
