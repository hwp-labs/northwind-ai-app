'use client'

import { supabase } from '@/lib/supabase/actions/client'

export default function LoginPage() {
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
  }

  return <button onClick={signIn}>Sign in with GitHub</button>
}
