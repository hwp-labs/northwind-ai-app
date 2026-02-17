"use client";

import useSWR from "swr";
import { APP } from "@/constants/APP";
import Script from "next/script";

type Data = {
  data?: { stargazers_count: number };
  error?: string;
};

export const GithubStarsWidget = () => {
  // const { isLoading, data: res } = useSWR<Data>(
  //   "/api/github/repos",
  //   (url: string) => fetch(url).then((res) => res.json()),
  //   { revalidateOnFocus: false },
  // );

  return (
    <div>
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
      />
    </div>
  );
};
