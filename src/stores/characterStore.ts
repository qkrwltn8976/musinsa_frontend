import { create } from "zustand";
import produce from "immer";
import { Character } from "../types/character";

type CharacterState = {
  characters: Character[];
  filteredCharacters: Character[];
};

type CharacterAction = {
  setCharacters: (characters: Character[]) => void;
  deleteCharacter: (index: number) => void;
  setFilteredCharacters: (characters: Character[]) => void;
  resetCharacters: () => void;
};

export const useCharacterStore = create<CharacterState & CharacterAction>(
  (set) => ({
    characters: [],
    filteredCharacters: [],
    setCharacters: (characters: Character[]) =>
      set(
        produce((state) => {
          state.characters = characters;
        })
      ),
    deleteCharacter: (index: number) =>
      set((state) => ({
        filteredCharacters: state.filteredCharacters.filter(
          (_: Character, key: number) => key !== index
        ),
      })),
    setFilteredCharacters: (characters: Character[]) =>
      set(
        produce((state) => {
          state.filteredCharacters = characters;
        })
      ),
    resetCharacters: () =>
      set(
        produce((state) => {
          state.filteredCharacters = state.characters;
        })
      ),
  })
);
