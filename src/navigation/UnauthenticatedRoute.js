"use client";

import Home from "@/pages/home";
import Link from "next/link";

const UnauthenticatedRoute = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/home">
          <Home />
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default UnauthenticatedRoute;
