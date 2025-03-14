"use client";
import { Category } from "@/interfaces/category";
import { fetcher } from "@/services/apiClient";
import useCategoryStore from "@/store/category";
import { useEffect } from "react";
import useSWR from "swr";

export default function InitMasterData({
  children,
}: {
  children: React.ReactNode;
}) {
  const { categories, setCategory } = useCategoryStore();

  const { data } = useSWR<Category[]>(
    categories.length > 0 ? null : `/category`,
    fetcher,
  );

  useEffect(() => {
    if (data && categories.length === 0) {
      setCategory(data);
    }
  }, [data, categories, setCategory]);

  return <>{children}</>;
}
