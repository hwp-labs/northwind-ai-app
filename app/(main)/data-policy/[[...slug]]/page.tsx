import { Metadata } from "next";
import { LoginFormWidget } from "@/components/widgets/login-form-widget";

export const metadata: Metadata = {
  title: "Data Policy",
};

export default function DataPolicyPage() {
  return (
    <main className="flex-centered min-h-[80svh]">
      <div className="w-full max-w-md">
        <LoginFormWidget />
      </div>
    </main>
  );
}
