import { characterKeys } from "./../../constants/queryKeys.constant";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../../apis/character";
import { RequestParam } from "../../types/character";
import { useCharacterStore } from "../../stores/characterStore";

const useCharacters = (param: RequestParam) => {
  console.log(param);
  const { filteredCharacters, setCharacters, setFilteredCharacters } =
    useCharacterStore();
  const { fetchNextPage, isLoading, isFetching } = useInfiniteQuery({
    queryKey: characterKeys.all(),
    queryFn: async ({ pageParam = param.page }) => {
      const { data } = await getCharacters({ pageSize: 10, page: pageParam });
      return {
        data,
        nextPage: pageParam,
      };
    },
    getNextPageParam: (lastPage, aa) => {
      return lastPage.data?.length ? lastPage.nextPage + 1 : undefined;
    },
    onSuccess: ({ pages }) => {
      console.log("success");
      const data = pages.map((page) => page.data).flat();
      setCharacters(data);
      setFilteredCharacters(data);
    },
  });
  return {
    characters: filteredCharacters,
    fetchNextPage,
    isLoading,
    isFetching,
  };
};

export { useCharacters };
