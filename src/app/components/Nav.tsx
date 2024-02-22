import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const isLoggedIn = cookies().get("Authorization");

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
