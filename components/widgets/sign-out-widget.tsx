"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
//
import { Button } from "../shadcn/ui/button";
import { Spinner } from "../shadcn/ui/spinner";
import { useToast } from "@/hooks/use-toast";
import { signOutAction } from "@/lib/supabase/services/auth/actions/authActions";
import { PATH } from "@/constants/PATH";

export const SignOutWidget = () => {
  const toast = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignout = async () => {
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
  //
  return (
    <Button onClick={handleSignout} disabled={loading}>
      {loading && <Spinner />}
      Sign out
    </Button>
  );
};
