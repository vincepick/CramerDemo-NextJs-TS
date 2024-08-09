import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">User</Link>
    </div>
  );
};

export default NavBar;
