import {
  type LucideIcon,
  HouseIcon,
  ReceiptIcon,
  FolderOpenIcon,
  UsersIcon,
  SettingsIcon,
  LogOutIcon,
  ChartCandlestickIcon,
} from "lucide-react";
// 
import { PATH } from "./PATH";

interface MenuParams {
  label: string;
  path: string;
  Icon?: LucideIcon;
}

export const MENU = [
  { label: "Home", path: PATH.home },
  { label: "Book a demo", path: PATH.demo },
] as const satisfies MenuParams[];

export const DASHBOARD_MENU = {
  primary: [
    // {
    //   label: "Dashboard",
    //   path: PATH.dashboard,
    //   Icon: HouseIcon,
    // },
    // {
    //   label: "Transactions",
    //   path: PATH.transactions,
    //   Icon: ReceiptIcon,
    // },
    // {
    //   label: "Ledgers",
    //   path: PATH.ledgers,
    //   Icon: FolderOpenIcon,
    // },
    // {
    //   label: "Contacts",
    //   path: PATH.contacts,
    //   Icon: UsersIcon,
    // },
  ],
  secondary: [
    // {
    //   label: "Reports",
    //   path: PATH.reports,
    //   Icon: ChartCandlestickIcon,
    // },
    // {
    //   label: "Settings",
    //   path: PATH.settings,
    //   Icon: SettingsIcon,
    // },
    // {
    //   label: "Sign out",
    //   path: PATH.login,
    //   Icon: LogOutIcon,
    // },
  ],
};
