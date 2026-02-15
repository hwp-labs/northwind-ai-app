import { PiggyBankIcon, SmileIcon, StarIcon } from "lucide-react";
import { APP } from "./APP";

export const NAIRA = "₦";
export const DOLLAR = "$";
//
export const ZERO = "0";
export const EMPTY_STR = "";
export const HYPHENS = "---";
export const NOT_APPLICABLE = "N/A";
export const UNKNOWN = "Unknown";
//
export const CUR_DATE = new Date().toISOString().slice(0, 10);
export const FILE_SIZE = 1024 * 1024 * 20; // 20MB
export const IMAGE_FILE_SIZE = 1024 * 1024 * 5; // 5MB
export const IMAGE_MIME_TYPE = ["image/jpeg", "image/png"];
//
export const COPY = {
  prompt: `How can ${APP.name} help automate my business?`,
  automate: `Automate your SME's virtual workflows and Point-of-Sale (POS) systems with ${APP.name}`,
  transform:
    "-transform repetitive business processes into smart, autonomous AI agents.",
  email: {
    subject: `Welcome to ${APP.name}`,
    welcome: "Welcome aboard, ",
  },
};

export const VALUE_PROPOSITION = [
  {
    Icon: PiggyBankIcon,
    title: "Save Time & Money",
    description: `Instantly reduce operational costs by up to 40% and save hours on repetitive tasks and virtual workflows. 
            AI agents run 24/7, and free up time for you and your team to focus on innovation and leads generation.`,
  },
  {
    Icon: SmileIcon,
    title: "Improve Quality of Service",
    description: `Autonomously deliver professional and reliable service.
            AI-powered automation ensures 99% accuracy across internal business processes, learning and adapting as your business grows.`,
  },
  {
    Icon: StarIcon,
    title: "Satisfy Your Customers",
    description: `Continuously convert 10x more sales leads. 
          AI agents provide seamless multi-channel integration and scenario-based engagement that exceed customer expectations, build trust and nurtures loyalty.`,
  },
];

export const ERROR = {
  duplicateContactEmail: "Hey, contact email already captured 👀",
};

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
