"use client";

import { useState } from "react";
import Script from "next/script";
import useSWR from "swr";
import { FaGithub } from "react-icons/fa6";
//
import { Skeleton } from "../shadcn/ui/skeleton";
import { APP } from "@/constants/APP";

type Data = {
  data?: { stargazers_count: number };
  error?: string;
};

export const GithubStarsWidget = () => {
  const { isLoading, data: res } = useSWR<Data>(
    "/api/github/repos",
    (url: string) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false },
  );
  const stargazers_count = res?.data?.stargazers_count || 0;
  //
  return (
    <div className="_flex-row-cs">
      {isLoading ? (
        <Skeleton className="border-outline h-6 w-12 rounded-lg border bg-white/5" />
      ) : (
        <a
          href={APP.repositoryUrl}
          title="View Source"
          className="flex-row-cc border-outline debug_ gap-2.5 rounded-lg border py-0.5 pr-2.5 pl-1.5 text-white"
        >
          <FaGithub />
          <span className="font-[Raleway] text-sm font-medium">
            {stargazers_count}
          </span>
        </a>
      )}
    </div>
  );
};

export const GithubStarsWidgetV2 = () => {
  const [loaded, setLoaded] = useState(false);
  //
  return (
    <div className={loaded ? "visible" : "invisible"}>
      <a
        href={APP.repositoryUrl}
        data-icon="octicon-mark-github"
        data-size="large"
        data-show-count="true"
        aria-label="GitHub Star"
        className="github-button"
      >
        Star
      </a>
      <Script
        src="https://buttons.github.io/buttons.js"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
