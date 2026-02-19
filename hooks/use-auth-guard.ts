import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
//
import { useToast } from "./use-toast";
import { getAuthUserAction } from "@/lib/supabase/services/auth/actions/getAuthUserAction";
import { signOutAction } from "@/lib/supabase/services/auth/actions/authActions";
import { PATH } from "@/constants/PATH";

export function useAuthGuard() {
  const router = useRouter();
  const toast = useToast();

  const [user, setUser] = useState<User | undefined>();
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = user?.email ? true : false;
  const ready = !fetching && !loading;

  const fetchAuthUser = async () => {
    setFetching(true);

    const { data, error } = await getAuthUserAction();
    if (error) toast.error(error);
    if (data) setUser(data);

    setFetching(false);
  };

  const handleSignIn = () => {
    router.replace(PATH.login);
  };

  const handleSignOut = async () => {
    if (confirm("Exit application?")) {
      setLoading(true);
      const { error } = await signOutAction();

      if (error) {
        toast.error(error);
        setLoading(false);
        return;
      }

      router.replace(PATH.login);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthUser();
  }, []);

  return {
    user,
    fetching,
    loading,
    auth,
    ready,
    handleSignIn,
    handleSignOut,
  };
}
