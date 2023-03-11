import { Filter } from "../types/filter";
import { create } from "zustand";

type FilterState = {
  filters: Filter[];
};

type FilterAction = {
  toggleFilter: (index: number) => void;
};

export const useFilterStore = create<FilterState & FilterAction>((set) => ({
  filters: [
    {
      name: "생존인물만",
      isActive: false,
    },
    {
      name: "여자",
      isActive: false,
    },
    {
      name: "tvSeries 없음",
      isActive: false,
    },
    {
      name: "초기화",
      isActive: false,
    },
  ],
  toggleFilter: (key) =>
    set((state) => ({
      filters: state.filters.map((filter, index) =>
        index === key
          ? {
              ...filter,
              isActive: !filter.isActive,
            }
          : filter
      ),
    })),
}));
