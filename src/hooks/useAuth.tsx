import { signIn, signOut, useSession } from "next-auth/react";

export const useAuth = () => {
  const { status } = useSession();
  const isLogedIn = status === "authenticated";

  return { signIn, signOut, isLogedIn };
};
