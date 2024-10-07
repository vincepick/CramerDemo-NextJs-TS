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

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))]">
//       <main className="text-[rgb(var(--foreground-rgb))]">
//         <h1 className="text-4xl font-bold">
//           Hello {session && <span>{session.user!.name}</span>}
//         </h1>
//         <div className="gradient__bg">
//           <Header />
//         </div>
//         <Link href="/users" className="text-blue-500 underline">
//           Users
//         </Link>
//         <ProductCard />
//         <WhatCramer />
//         <Features />
//         <Possibility />
//         <UserDelete />
//         <UserCreate />
//         <Blog />
//         <Footer />
//       </main>
//     </div>
//   );
// }

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <div className="App black-background">
//       <main>
//         <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//         <div className="gradient__bg">
//           {/* <Navbar /> */}
//           <Header />
//         </div>
//         <Link href="/users">Users</Link>
//         <ProductCard />
//         <WhatCramer />
//         <Features />
//         <Possibility />
//         <UserDelete />
//         <UserCreate />
//         {/* <CTA /> */}
//         <Blog />
//         {/* <Footer /> */}
//         <Footer />
//       </main>
//     </div>
//   );
// }
