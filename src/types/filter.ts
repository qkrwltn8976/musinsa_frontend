import { Character } from "./character";
export interface Filter {
  name: string;
  isActive: boolean;
  filterFn?: (character: Character) => boolean;
}
