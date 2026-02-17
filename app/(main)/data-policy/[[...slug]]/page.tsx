import { Metadata } from "next";
//
import { BlogPageBuilder as _ } from "@/components/atoms/blog-page-builder";
import { APP } from "@/constants/APP";
import { COPY } from "@/constants/LOCALE";

export const metadata: Metadata = {
  title: "Data Policy",
};

export default function DataPolicyPage() {
  return (
    <_.Container h1="Data Policy" time={APP.launchData}>
      <_.H2>1. Introduction</_.H2>
      <p>
        Welcome to <_.Strong>{APP.name}</_.Strong> ("Company", "we", "our", or
        "us"), an AI automation web service provider. {COPY.whatWeDo}
      </p>
      <p className="mt-4">
        This Data Policy explains how we collect, use, process, and protect
        information when you:
      </p>
      <_.Ul>
        <li>Visit our website</li>
        <li>Request a demo</li>
        <li>Use our AI automation apps and web services</li>
      </_.Ul>
      By using our services, you agree to this Data Policy.
      <_.H2>2. Information We Collect</_.H2>
      <_.H3>A. Automatically Collected Information</_.H3>
      <_.Ul>
        <li>IP address</li>
        <li>Browser cookies</li>
        <li>Geolocation data</li>
        <li>Device information</li>
        <li>And, activity logs</li>
      </_.Ul>
      <_.H3>B. Information You Provide</_.H3>
      <_.Ul>
        <li>Name</li>
        <li>Email</li>
        <li>Telephone</li>
        <li>Business name</li>
        <li>Business location</li>
        <li>Industry</li>
        <li>And, data submitted through web forms and APIs</li>
      </_.Ul>
      <_.H3>C. Customer Data (processed on your behalf)</_.H3>
      As an AI automation provider, we may process data that our customers
      upload or connect to our systems (“Customer Data”), which may include:
      <_.Ul>
        <li>Business operational data</li>
        <li>CRM data</li>
        <li>Support tickets</li>
        <li>Documents</li>
        <li>Communications</li>
        <li>API-integrated third-party data</li>
      </_.Ul>
      We act as a data processor for this data and process it strictly according
      to customer instructions.
      <_.H2>3. How We Use Information</_.H2>
      We use information to:
      <_.Ul>
        <li>Provide and maintain AI automation services</li>
        <li>Train, deploy, and improve automation workflows</li>
        <li>Respond to inquiries and support requests</li>
        <li>Manage accounts and billing</li>
        <li>Improve platform performance</li>
        <li>Detect fraud or misuse</li>
        <li>Comply with legal obligations</li>
      </_.Ul>
      We do not use Customer Data to train public AI models unless explicitly
      agreed in writing.
      <_.H2>4. AI & Automated Processing Disclosure</_.H2>
      Our services may use:
      <_.Ul>
        <li>Machine learning models</li>
        <li>Large language models</li>
        <li>Predictive automation systems</li>
        <li>Intelligent decision workflows</li>
      </_.Ul>
      Automated processing may generate outputs based on input data. Customers
      are responsible for reviewing outputs before operational deployment.
      <_.H2>5. Legal Basis for Processing (If Applicable)</_.H2>
      For users in Nigeria, we rely on:
      <_.Ul>
        <li>Contract performance</li>
        <li>Legitimate business interests</li>
        <li>Legal obligations</li>
        <li>Consent (where required)</li>
      </_.Ul>
      <_.H2>6. Data Sharing</_.H2>
      <p>We DO NOT sell personal data.</p>
      <p className="mt-4">We may share data with:</p>
      <_.Ul>
        <li>Cloud hosting providers</li>
        <li>Infrastructure providers</li>
        <li>Payment processors</li>
        <li>Analytics tools</li>
        <li>And, legal authorities (with a Signed Warrant)</li>
      </_.Ul>
      All service providers are bound by confidentiality and data protection
      agreements.
      <_.H2>7. Data Retention</_.H2>
      We retain:
      <_.Ul>
        <li>Account data while your account is active</li>
        <li>Customer Data according to contractual agreements</li>
        <li>Logs and system records for security and compliance purposes</li>
      </_.Ul>
      Upon termination, Customer Data will be deleted or returned as specified
      in your service agreement.
      <_.H2>8. Data Security</_.H2>
      We implement:
      <_.Ul>
        <li>Encryption in transit (TLS)</li>
        <li>Secure cloud infrastructure</li>
        <li>Role-based access controls</li>
        <li>Regular security monitoring</li>
        <li>Audit logging</li>
      </_.Ul>
      <_.H2>9. International Data Transfers</_.H2>
      If data is transferred internationally, we use appropriate safeguards such
      as:
      <_.Ul>
        <li>Standard Contractual Clauses</li>
        <li>Adequacy decisions</li>
        <li>Contractual protections</li>
      </_.Ul>
      <_.H2>10. Your Rights</_.H2>
      Depending on your location, you may have rights to:
      <_.Ul>
        <li>Access your data</li>
        <li>Correct inaccuracies</li>
        <li>Request deletion</li>
        <li>Restrict processing</li>
        <li>Object to processing</li>
        <li>Withdraw consent</li>
      </_.Ul>
      <_.H2>11. Third-Party Integrations</_.H2>
      Our platform may integrate with third-party tools (e.g., CRMs, messaging
      platforms, payment systems). We are not responsible for third-party
      privacy practices.
      <_.H2>12. Changes to This Policy</_.H2>
      We may update this policy periodically. Updates will be posted with a
      revised date.
    </_.Container>
  );
}
