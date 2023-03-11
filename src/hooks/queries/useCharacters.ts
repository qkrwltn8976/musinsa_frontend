import { characterKeys } from "./../../constants/queryKeys.constant";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../apis/character";
import { RequestParam } from "../../types/character";
// const useGetTodos = () => useQuery<Todo[]>(todoKeys.all, () => getTodos());

const useCharacters = (param: RequestParam) =>
  useQuery(characterKeys.all(), () => getCharacters(param));

export { useCharacters };
