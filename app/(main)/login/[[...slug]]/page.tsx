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