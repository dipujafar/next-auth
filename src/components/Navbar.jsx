"use client";
import { useSession } from "next-auth/react";
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
    {
      title: "Login",
      path: "/api/auth/signin",
    },
  ];
  return (
    <div>
      <ul className="flex justify-center gap-10">
        {navLinks?.map((navLink) => (
          <li key={navLink?.path}>
            {navLink?.path === "/login" ? (
              session?.status === "authenticated" ? (
                <Link href={navLink?.path}>Logout</Link>
              ) : (
                <Link href={navLink?.path}>{navLink?.title}</Link>
              )
            ) : (
              <Link href={navLink?.path}>{navLink?.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
