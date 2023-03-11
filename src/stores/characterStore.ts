import { create } from "zustand";
import produce from "immer";
import { Character } from "../types/character";

type CharacterState = {
  characters: Character[];
};

type CharacterAction = {
  setCharacters: (characters: Character[]) => void;
  deleteCharacter: (index: number) => void;
};

export const useCharacterStore = create<CharacterState & CharacterAction>(
  (set) => ({
    characters: [],
    setCharacters: (characters: Character[]) =>
      set(
        produce((state) => {
          state.characters = characters;
        })
      ),
    deleteCharacter: (index: number) =>
      set((state) => ({
        characters: state.characters.filter(
          (_: Character, key: number) => key !== index
        ),
      })),
  })
);
