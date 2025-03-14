import { useState, useEffect } from "react";
import useSWR from "swr";
import apiClient, { fetcher } from "../apiClient";
import { SearchPostResponse } from "@/app/interfaces/response/postResponse";

interface SearchParams {
  search?: string;
  userId?: number;
  categoryId?: number;
  limit?: number;
  page?: number;
  sort?: string;
  order?: "ASC" | "DESC";
}

interface UseSearchPostsOptions {
  params?: SearchParams;
  swrOptions?: any;
}

export function useSearchPosts({
  params = {},
  swrOptions = {},
}: UseSearchPostsOptions) {
  const delay = 600;
  const [search, setSearch] = useState(params.search || "");
  const [debouncedQuery, setDebouncedQuery] = useState(params.search || "");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(search), delay);
    return () => clearTimeout(handler);
  }, [search]);

  const queryParams = new URLSearchParams({
    limit: String(params.limit || 10),
    page: String(params.page || 1),
    sort: params.sort || "createdAt",
    order: params.order || "DESC",
  });

  if (debouncedQuery) {
    queryParams.set("search", debouncedQuery);
  }

  if (params.userId) {
    queryParams.set("userId", String(params.userId));
  }

  if (params.categoryId) {
    queryParams.set("categoryId", String(params.categoryId));
  }

  const url = `/post/search?${queryParams.toString()}`;

  const { data, error, isLoading } = useSWR<SearchPostResponse>(
    url,
    fetcher,
    swrOptions,
  );

  return {
    search,
    setSearch,
    data: {
      posts: data?.data || [],
      meta: data?.meta,
    },
    error,
    isLoading,
  };
}


