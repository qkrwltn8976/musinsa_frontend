import React from "react";
import { useSearchParams } from "react-router-dom";
import useIntersectionObserver from "../../hooks/commons/useIntersectionObserver";
import { useCharacters } from "../../hooks/queries/useCharacters";
import { Character } from "../../types/character";
import Loading from "../commons/Loading";
import CharacterItem from "./CharacterItem";

import * as List from "./ItemList.style";

type Props = {};

const ItemList = (props: Props) => {
  const [searchParams] = useSearchParams();

  const { characters, fetchNextPage, isLoading, isFetching } = useCharacters({
    page: parseInt(searchParams.get("page") ?? '1', 10) as number,
    pageSize: 10,
  });
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (!isIntersecting) return;
    fetchNextPage();
  };
  const { setTarget } = useIntersectionObserver({
    onIntersect,
  });
  return (
    <List.Base align={"center"} justify={"center"} inline={false}>
      {isLoading || isFetching ? <Loading /> : null}
      {characters.map((character: Character, index: number) => (
        <CharacterItem
          character={character}
          index={index}
          key={`character-item-${index}`}
          isLast={index === characters.length - 1}
          setTarget={setTarget}
        />
      ))}
    </List.Base>
  );
};

export default ItemList;
