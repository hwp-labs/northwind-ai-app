import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
//
import { momentUtil } from "@/utils/moment-util";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <main className="debug_ mx-auto max-w-xl px-6 pb-16 lg:px-0">
      <section className="debug_ mb-4 border-b pb-4">
        <h1 className="debug_ inline-block">
          <Link
            href={PATH.home}
            title="Back"
            className="debug_ flex-row-cs gap-2.5 font-[Raleway] text-2xl font-semibold text-white"
          >
            <ChevronLeftIcon />
            Terms & Conditions
          </Link>
        </h1>
      </section>
      <section className="text-muted-foreground text-sm">
        <strong className="font-semibold">Last Updated:</strong>{" "}
        <time dateTime={APP.launchData}>
          {momentUtil.lastUpdated(APP.launchData)}
        </time>
      </section>
      <article className="text-sm leading-6">
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          1. Agreement to Terms
        </h2>
        <p className="">
          By accessing or using{" "}
          <strong className="font-semibold underline underline-offset-2">
            {APP.owner}
          </strong>{" "}
          AI automation services, you agree to the following terms:
        </p>
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          2. Description of Services
        </h2>
        We provide:
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>AI-powered workflow automation</li>
          <li>Intelligent AI Agents/Bots</li>
          <li>Business process automation</li>
          <li>Data analysis and AI integrations</li>
          <li>Custom AI deployment solutions</li>
        </ul>
        Services are provided under an annual subscription or one-time contract
        agreement.
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          3. Acceptable Use
        </h2>
        You agree not to use our platform to:
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>Violate laws or regulations</li>
          <li>Process unlawful or harmful content</li>
          <li>Generate fraudulent outputs</li>
          <li>Infringe intellectual property rights</li>
          <li>Attempt system reverse engineering</li>
        </ul>
        We reserve the right to suspend accounts or terminate contracts upon
        discovery of misuse.
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          4. AI Output Disclaimer
        </h2>
        AI-generated outputs:
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>May contain errors, and requires human oversight.</li>
          <li>
            Should not be solely relied upon for legal, medical, or financial
            decisions without human oversight.
          </li>
        </ul>
        You are responsible for verifying outputs before implementation.
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          5. Intellectual Property
        </h2>
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>
            We retain sole ownership of the platform technology, source codes,
            documentation, and customized AI models.
          </li>
          <li>
            Our customers retain sole ownership of their data, which is secured
            and can be exported upon request. Unless otherwise agreed, our
            customers may use generated outputs for business purposes.
          </li>
        </ul>
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          6. Data Protection Addendum (DPA)
        </h2>
        If applicable, we will enter into a Data Processing Agreement (DPA) in
        accordance with applicable data protection laws, including the{" "}
        <strong className="font-semibold underline underline-offset-2">
          Nigeria Data Protection Act, 2023
        </strong>
        .
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          7. Fees and Payment
        </h2>
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>
            Fees are billed in advance and non-refundable unless AI automation
            fails to fulfill business requirements within agreed time.
          </li>
          <li>
            Late payments may result in account suspension or software access
            revoked.
          </li>
        </ul>
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          8. Limitation of Liability
        </h2>
        <p>To the fullest extent permitted by law:</p>
        <p>
          We are not liable for indirect, incidental, or consequential damages,
          including:
        </p>
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>Data loss</li>
          <li>AI output inaccuracies</li>
          <li>Business interruption</li>
        </ul>
        Total liability shall not exceed fees paid in the preceding 12 months.
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          9. Service Availability
        </h2>
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>
            We aim for high uptime but do not guarantee uninterrupted service.
          </li>
          <li>Maintenance or upgrades may temporarily affect availability.</li>
        </ul>
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          10. Confidentiality
        </h2>
        Both parties agree to protect confidential information exchanged during
        the relationship.
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          11. Termination
        </h2>
        <p>
          Either party may terminate in accordance with the service agreement.
        </p>
        <p>Upon termination:</p>
        <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
          <li>Access will be revoked</li>
          <li>Data handled per agreement terms</li>
        </ul>
        <h2 className="mt-6 mb-4 scroll-m-20 text-xl font-semibold tracking-tight lg:text-xl">
          12. Governing Law
        </h2>
        These Terms shall be governed by and construed in accordance with the
        laws of the{" "}
        <strong className="font-semibold underline underline-offset-2">
          Federal Republic of Nigeria
        </strong>
        . Any disputes shall be subject to the jurisdiction of the courts of
        Nigeria.
      </article>
    </main>
  );
}
