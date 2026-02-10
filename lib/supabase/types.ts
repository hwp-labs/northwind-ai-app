import { Session, User, WeakPassword } from "@supabase/supabase-js";

export interface SupabaseAuthResponse {
  user: User | null;
  session: Session | null;
  weakPassword?: WeakPassword | null;
};

export interface ApiResponse<T> {
  data: T | null;
  error: string | undefined;
}