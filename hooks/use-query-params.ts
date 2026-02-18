import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Query = Record<string, unknown>;
type QueryOptions = {
  replace?: boolean;
  scroll?: boolean;
};

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const get = (query: Query) => {
    const obj: Record<string, string> = {};

    Object.entries(query).forEach(([key, fallbackValue]) => {
      obj[key] = searchParams.get(key) || String(fallbackValue);
    });

    return obj;
  };

  const add = (query: Query, options?: QueryOptions) => {
    Object.entries(query).forEach(([key, value]) =>
      params.set(key, String(value)),
    );

    const href = `${pathname}?${params.toString()}`;
    const { scroll = true, replace = false } = options || {};
    replace ? router.replace(href, { scroll }) : router.push(href, { scroll });
  };

  const remove = (query: string | string[], options?: QueryOptions) => {
    if (Array.isArray(query)) {
      query.forEach((key) => params.delete(key));
    } else {
      params.delete(query);
    }

    const href = `${pathname}?${params.toString()}`;
    const { scroll = true, replace = false } = options || {};
    replace ? router.replace(href, { scroll }) : router.push(href, { scroll });
  };

  return { get, add, remove };
}
