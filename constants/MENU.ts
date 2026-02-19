import { type LucideIcon } from "lucide-react";
import { PATH, PROTECTED_PATH } from "./PATH";
interface MenuParams {
  label: string;
  path: string;
  Icon?: LucideIcon;
}

export const MENU = [
  { label: "Home", path: PATH.home },
  { label: "Get Started", path: PATH.getStarted },
] as const satisfies MenuParams[];

export const DASHBOARD_MENU = [
  { label: "Dashboard", path: PROTECTED_PATH.dashboard },
  { label: "Visitors", path: PROTECTED_PATH.visitors },
  { label: "Contacts", path: PROTECTED_PATH.contacts },
  { label: "Industries", path: PROTECTED_PATH.industries },
] as const satisfies MenuParams[];
