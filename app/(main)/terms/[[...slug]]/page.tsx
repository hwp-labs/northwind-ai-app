import { Metadata } from "next";
//
import { BlogPageBuilder as _ } from "@/components/atoms/blog-page-builder";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <_.Container h1="Terms & Conditions" time={APP.launchData}>
      <_.H2>1. Agreement to Terms</_.H2>
      By accessing or using <_.Strong>{APP.owner}</_.Strong> AI automation
      services, you agree to the following terms:
      <_.H2>2. Description of Services</_.H2>
      We provide:
      <_.Ul>
        <li>AI-powered workflow automation</li>
        <li>Intelligent AI Agents/Bots</li>
        <li>Business process automation</li>
        <li>Data analysis and AI integrations</li>
        <li>Custom AI deployment solutions</li>
      </_.Ul>
      Services are provided under an annual subscription or one-time contract
      agreement.
      <_.H2>3. Acceptable Use</_.H2>
      You agree not to use our platform to:
      <_.Ul>
        <li>Violate laws or regulations</li>
        <li>Process unlawful or harmful content</li>
        <li>Generate fraudulent outputs</li>
        <li>Infringe intellectual property rights</li>
        <li>Attempt system reverse engineering</li>
      </_.Ul>
      We reserve the right to suspend accounts or terminate contracts upon
      discovery of misuse.
      <_.H2>4. AI Output Disclaimer</_.H2>
      AI-generated outputs:
      <_.Ul>
        <li>May contain errors, and requires human oversight.</li>
        <li>
          Should not be solely relied upon for legal, medical, or financial
          decisions without human oversight.
        </li>
      </_.Ul>
      You are responsible for verifying outputs before implementation.
      <_.H2>5. Intellectual Property</_.H2>
      <_.Ul>
        <li>
          We retain sole ownership of the platform technology, source codes,
          documentation, and customized AI models.
        </li>
        <li>
          Our customers retain sole ownership of their data, which is secured
          and can be exported upon request. Unless otherwise agreed, our
          customers may use generated outputs for business purposes.
        </li>
      </_.Ul>
      <_.H2>6. Data Protection Addendum (DPA)</_.H2>
      If applicable, we will enter into a Data Processing Agreement (DPA) in
      accordance with applicable data protection laws, including the{" "}
      <_.Strong>Nigeria Data Protection Act, 2023</_.Strong>.
      <_.H2>7. Fees and Payment</_.H2>
      <_.Ul>
        <li>
          Fees are billed in advance and non-refundable unless AI automation
          fails to fulfill business requirements within agreed time.
        </li>
        <li>
          Late payments may result in account suspension or software access
          revoked.
        </li>
      </_.Ul>
      <_.H2>8. Limitation of Liability</_.H2>
      <p>To the fullest extent permitted by law:</p>
      <p>
        We are not liable for indirect, incidental, or consequential damages,
        including:
      </p>
      <_.Ul>
        <li>Data loss</li>
        <li>AI output inaccuracies</li>
        <li>Business interruption</li>
      </_.Ul>
      Total liability shall not exceed fees paid in the preceding 12 months.
      <_.H2>9. Service Availability</_.H2>
      <_.Ul>
        <li>
          We aim for high uptime but do not guarantee uninterrupted service.
        </li>
        <li>Maintenance or upgrades may temporarily affect availability.</li>
      </_.Ul>
      <_.H2>10. Confidentiality</_.H2>
      Both parties agree to protect confidential information exchanged during
      the relationship.
      <_.H2>11. Termination</_.H2>
      <p>
        Either party may terminate in accordance with the service agreement.
      </p>
      <p>Upon termination:</p>
      <_.Ul>
        <li>Access will be revoked</li>
        <li>Data handled per agreement terms</li>
      </_.Ul>
      <_.H2>12. Governing Law</_.H2>
      These Terms shall be governed by and construed in accordance with the laws
      of the <_.Strong>Federal Republic of Nigeria</_.Strong>. Any disputes
      shall be subject to the jurisdiction of the courts of Nigeria.
    </_.Container>
  );
}
