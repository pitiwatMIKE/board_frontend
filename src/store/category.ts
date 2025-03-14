import { DropDownItem } from "@/components/Dropdown";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CategoryState {
  categories: DropDownItem[];
  setCategory: (categories: DropDownItem[]) => void;
}

const useCategoryStore = create(
  persist<CategoryState>(
    (set) => ({
      categories: [],
      setCategory: (categories: DropDownItem[]) => {
        set({ categories });
      },
    }),
    {
      name: "category-storage",
    },
  ),
);

export default useCategoryStore;
