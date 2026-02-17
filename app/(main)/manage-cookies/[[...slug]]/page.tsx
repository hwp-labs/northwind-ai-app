import { Metadata } from "next";
//
import { BlogPageBuilder as _ } from "@/components/atoms/blog-page-builder";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: "Manage Cookies",
};

export default function ManageCookiesPage() {
  return (
    <_.Container h1="Manage Cookies">
      <_.H2>Your Privacy Controls</_.H2>
      At <_.Strong>{APP.name}</_.Strong>, we use cookies and similar
      technologies to improve performance, security, and analytics for our AI
      automation platform.
      <_.H2>Cookie Categories</_.H2>
      Essential cookies required for:
      <_.Ul>
        <li>User authentication</li>
        <li>Session management</li>
        <li>Platform security</li>
      </_.Ul>
      Cannot be disabled.
      <_.H2>Performance & Analytics</_.H2>
      Helps us understand:
      <_.Ul>
        <li>Platform usage</li>
        <li>Error tracking</li>
        <li>Feature performance</li>
      </_.Ul>
      <_.H2>Functional Cookies</_.H2>
      Enable:
      <_.Ul>
        <li>Saved preferences</li>
        <li>Language settings</li>
        <li>UI customization</li>
      </_.Ul>
      <_.H2>Marketing Cookies (If Applicable)</_.H2>
      Used to:
      <_.Ul>
        <li>Measure campaign effectiveness</li>
        <li>Deliver relevant business advertising</li>
      </_.Ul>
      <_.H2>Manage Preferences</_.H2>
      You may:
      <_.Ul classNames="[&>li]:underline [&>li]:underline-offset-2 text-brand">
        <li>Accept All Cookies</li>
        <li>Reject Non-Essential Cookies</li>
        <li>Customize Settings</li>
      </_.Ul>
      <_.H2>Browser Controls</_.H2>
      <p>You can also manage cookies via your browser settings.</p>
      <p className="mt-4">
        Note that disabling certain cookies may limit functionality.
      </p>
    </_.Container>
  );
}
