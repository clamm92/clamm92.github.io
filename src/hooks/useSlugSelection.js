import { useSearchParams } from "react-router-dom";

export function useSlugSelection(paramName = "slug") {
  const [searchParams, setSearchParams] = useSearchParams();
  const slug = searchParams.get(paramName);

  const select = (nextSlug) => setSearchParams({ [paramName]: nextSlug });
  const clear = () => setSearchParams({});

  return { slug, select, clear };
}
