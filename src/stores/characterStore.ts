import { create } from "zustand";
import produce from "immer";
import { Character } from "../types/character";

type CharacterState = {
  characters: Character[];
};

type CharacterAction = {
  setCharacters: (characters: Character[]) => void;
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
  })
);
