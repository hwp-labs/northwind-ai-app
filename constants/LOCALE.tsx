import {
  IconMoodSmileFilled,
  IconPigFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import { APP } from "./APP";

export const COPY = {
  prompt: `How can ${APP.name} help automate my business?`,
  promptWithHi: `Hi, how can ${APP.name} help automate my business?`,
  promptWithCool: (
    <>
      We'll reach out shortly to discuss how{" "}
      <span className="text-white">{APP.name}</span> can help automate your
      business. Cool?
    </>
  ),
  automate: `Automate SME virtual workflows and Point-of-Sale (POS) systems with ${APP.name}`,
  automateRichText: (
    <>
      Automate SME virtual workflows and Point-of-Sale (POS) systems with{" "}
      <strong className="font-semibold">{APP.name}</strong>
    </>
  ),
  transform:
    "-transform repetitive business processes into smart, autonomous AI agents.",
  transformRichText: (
    <>
      -transform repetitive business processes into{" "}
      <strong className="font-medium">smart, autonomous AI agents</strong>.
    </>
  ),
  transformRichTextWithLink: (
    <>
      -transform repetitive business processes into smart, autonomous{" "}
      <a
        href="https://agent.ai/"
        target="_blank"
        className="text-brand font-medium underline underline-offset-2"
      >
        AI agents.
      </a>
    </>
  ),
  email: {
    subject: `Welcome to ${APP.name}`,
    welcome: "Welcome aboard, ",
  },
  valueProposition: [
    {
      Icon: IconPigFilled,
      title: "Save Time & Money",
      description: `Instantly reduce operational costs by up to 40% and save hours on repetitive tasks and virtual workflows. 
            AI agents run 24/7, and free up time for you and your team to focus on innovation and leads generation.`,
    },
    {
      Icon: IconMoodSmileFilled,
      title: "Improve Quality of Service",
      description: `Autonomously deliver professional and reliable service.
            AI-powered automation ensures 99% accuracy across internal business processes, learning and adapting as your business grows.`,
    },
    {
      Icon: IconStarFilled,
      title: "Satisfy Your Customers",
      description: `Continuously convert 10x more sales leads. 
          AI agents provide seamless multi-channel integration and scenario-based engagement that exceed customer expectations, build trust and nurtures loyalty.`,
    },
  ],
};

export const ERROR_COPY = {
  duplicateContactEmail: "Hey, contact email already captured 👀",
};
