import { useSignIn } from "@clerk/clerk-react";
import React from "react";
import { Button } from "../components/ui/button";

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };

  if (!isLoaded) return null;
  return (
    <Button
      onClick={signInWithGoogle}
      variant={"secondary"}
      className="w-full text-white border-zinc-200 h-1 p-4 cursor-pointer"
    >
      Continue with Google
    </Button>
  );
};

export default SignInOAuthButtons;
