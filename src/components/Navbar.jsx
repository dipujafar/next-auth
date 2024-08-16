"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  console.log(session);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Service",
      path: "/service",
    },
  ];
  return (
    <div>
      <ul className="flex justify-center gap-10">
        {navLinks?.map((navLink) => (
          <li key={navLink?.path}>
            <Link href={navLink?.path}>{navLink?.title}</Link>
          </li>
        ))}
        {session.status === "authenticated" ? (
          <li onClick={() => signOut()}>LogOut</li>
        ) : (
          <li>
            <Link href={"/api/auth/signin"}>Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
