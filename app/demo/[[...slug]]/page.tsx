import { Metadata } from "next";
import { Header } from "@/components/organisms/header";

export const metadata: Metadata = {
  title: "Book a demo",
};

export default function DemoPage() {
  return (
    <>
      <Header />
    </>
  );
}
