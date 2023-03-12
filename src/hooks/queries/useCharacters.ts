import { characterKeys } from "./../../constants/queryKeys.constant";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../apis/character";
import { RequestParam } from "../../types/character";
import { useCharacterStore } from "../../stores/characterStore";
// const useGetTodos = () => useQuery<Todo[]>(todoKeys.all, () => getTodos());

const useCharacters = (param: RequestParam) => {
  const { filteredCharacters, setCharacters, setFilteredCharacters } =
    useCharacterStore();
  useQuery(characterKeys.all(), () => getCharacters(param), {
    onSuccess: ({ data }) => {
      setCharacters(data);
      setFilteredCharacters(data);
    },
  });
  return { characters: filteredCharacters };
};

export { useCharacters };
