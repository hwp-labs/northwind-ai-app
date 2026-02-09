// 'use client'

// import { supabase } from "@/lib/supabase/client"

// export default function LoginPage() {
//   const signIn = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: 'github'
//     })
//   }

//   return <button onClick={signIn}>Sign in with GitHub</button>
// }


import { Metadata } from "next";
import { LoginFormWidget } from "@/components/widgets/login-form-widget";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-2xl flex-centered min-h-[80vh]">
      <LoginFormWidget />
    </div>
  );
}