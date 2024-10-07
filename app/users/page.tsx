import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import UserDelete from "../components/UserDelete/UserDelete";
import UserCreate from "../components/UserCreate/UserCreate";
import LoginButton from "../components/LoginButton/LoginButton";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="gradient__bg">
      {/* <h1>User Management Table</h1> */}
      {/* <Link href="/users/new" className="btn">
        New User
      </Link> */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* <UserTable sortOrder={sortOrder} /> */}
        <UserDelete />
        <UserCreate />
      </Suspense>
      {/* <UserDelete /> */}
    </div>
  );
};

export default UsersPage;
