import { useRouter, useSearchParams, usePathname } from "next/navigation";

type QueryType = Record<string, unknown>;

interface QueryArgs {
  _: QueryType | QueryType[];
  replace?: boolean;
  scroll?: boolean;
}

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const get = (key: string, fallback: unknown) =>
    searchParams.get(key) || fallback;

  const add = ({ _: query, scroll = true, replace }: QueryArgs) => {
    const params = new URLSearchParams(searchParams.toString());

    if (Array.isArray(query)) {
      query.forEach((item) => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        params.set(key, String(value));
      });
    } else {
      const key = Object.keys(query)[0];
      const value = Object.values(query)[0];
      params.set(key, String(value));
    }

    const href = `${pathname}?${params.toString()}`;
    replace ? router.replace(href, { scroll }) : router.push(href, { scroll });
  };

  const remove = ({ _: query, scroll = true, replace }: QueryArgs) => {
    const params = new URLSearchParams(searchParams.toString());

    if (Array.isArray(query)) {
      query.forEach((item) => {
        const key = Object.keys(item)[0];
        const value = Object.values(item)[0];
        params.delete(key, String(value));
      });
    } else {
      const key = Object.keys(query)[0];
      const value = Object.values(query)[0];
      params.delete(key, String(value));
    }

    const href = `${pathname}?${params.toString()}`;
    replace ? router.replace(href, { scroll }) : router.push(href, { scroll });
  };

  return { get, add, remove };
}
