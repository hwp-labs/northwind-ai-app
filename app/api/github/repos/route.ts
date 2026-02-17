import { GithubReposResponse } from '@/lib/github/repos/interface';
import { APP } from "@/constants/APP";

export async function GET() {
  const url = `https://api.github.com/repos/${APP.repositoryName}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return Response.json(
        { error: "Repository not found" },
        { status: res.status },
      );
    }

    const data = await res.json() as GithubReposResponse;
    return Response.json({ data: { stargazers_count: data.stargazers_count } });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
