"use client";

import { sleep } from "@/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface Props extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink = ({ children, href, ...props }: Props) => {
  const router = useRouter();

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(0.5);

    router.push(href);
    
    await sleep(0.5);

    body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
