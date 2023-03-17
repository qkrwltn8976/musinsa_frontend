import { Filter } from "../types/filter";
import { create } from "zustand";
import produce from "immer";
import { Character } from "../types/character";
type FilterState = {
  filters: Filter[];
};

type FilterAction = {
  toggleFilter: (index: number) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterState & FilterAction>((set) => ({
  filters: [
    {
      name: "생존인물만",
      isActive: false,
      filterFn: (character: Character) => !character.died,
    },
    {
      name: "여자",
      isActive: false,
      filterFn: (character: Character) => character.gender === "Female",
    },
    {
      name: "tvSeries 없음",
      isActive: false,
      filterFn: (character: Character) => !character.tvSeries[0],
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
  resetFilters: () =>
    set((state) => ({
      filters: state.filters.map((filter, index) => ({
        ...filter,
        isActive: false,
      })),
    })),
}));
