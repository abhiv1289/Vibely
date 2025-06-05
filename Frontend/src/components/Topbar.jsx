import React from "react";
import { Link } from "react-router-dom";

import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
  const isAdmin = false;
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">🎸 Vibely</div>

      <div className="flex items-center gap-4">
        {isAdmin && <Link to={"/admin"}>Admin Dashboard</Link>}

        <SignedIn>
          <SignOutButton className="text-white" />
        </SignedIn>

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>
      </div>
    </div>
  );
};

export default Topbar;
