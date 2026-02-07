'use client'

import { supabase } from "@/lib/supabase/client"

export default function LoginPage() {
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
  }

  return <button onClick={signIn}>Sign in with GitHub</button>
}
