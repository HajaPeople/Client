import { useSession } from "next-auth/react";

interface UserType {
  name: string;
  image: string;
}

export const useUser = () => {
  const { data: session } = useSession();
  const user = session?.user as UserType | undefined;

  return user;
};
