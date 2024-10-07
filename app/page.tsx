import Image from "next/image";
import Link from "next/link";
import {
  WhatCramer,
  Features,
  Possibility,
  Blog,
  Footer,
  Header,
} from "./containers";
// import What
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Navbar } from "./components";
import UserDelete from "./components/UserDelete/UserDelete";
import UserCreate from "./components/UserCreate/UserCreate";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="gradient__bg">
      <main>
        {/* <h1 className="text-4xl font-bold">
          Hello {session && <span>{session.user!.name}</span>}
        </h1> */}

        {/* <Navbar /> */}
        <Header />
        {/* <Link href="/users" className="text-blue-500 underline">
          Users
        </Link> */}

        {/* <ProductCard /> */}
        <WhatCramer />
        <Features />
        <Footer />
        {/* <Possibility /> */}
        {/* <UserDelete />
        <UserCreate /> */}
      </main>
    </div>
  );
}

