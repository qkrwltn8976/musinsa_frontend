import { Filter } from "../types/filter";
import { create } from "zustand";
import produce from "immer";
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
    set(
      produce((state) => {
        state.filters[key].isActive = !state.filters[key].isActive;
      })
    ),
}));
