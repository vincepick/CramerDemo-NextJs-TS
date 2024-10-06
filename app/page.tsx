import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import UserDelete from "./components/UserDelete";
import UserCreate from "./components/UserCreate";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      {/* <ProductCard /> */}
      <UserDelete />
      <UserCreate />
    </main>
  );
}
