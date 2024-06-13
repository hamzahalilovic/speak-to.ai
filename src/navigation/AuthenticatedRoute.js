"use client";

import Link from "next/link";

const AuthenticatedRoute = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/logout">Logout</Link>
      </nav>
      {children}
    </div>
  );
};

export default AuthenticatedRoute;
