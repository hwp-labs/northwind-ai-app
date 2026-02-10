import { Metadata } from "next";
import { LoginFormWidget } from "@/components/widgets/login-form-widget";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <div className="flex-centered min-h-[80svh]">
      <div className="w-full max-w-md">
        <LoginFormWidget />
      </div>
    </div>
  );
}
