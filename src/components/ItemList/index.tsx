import React from 'react'
import useIntersectionObserver from '../../hooks/commons/useIntersectionObserver'
import { useCharacters } from '../../hooks/queries/useCharacters'
import { Character } from '../../types/character'
import CharacterItem from './CharacterItem'

import * as List from './ItemList.style'

type Props = {}

const ItemList = (props: Props) => {
    const { characters, fetchNextPage } = useCharacters({ page: 1, pageSize: 10 })
    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        console.log(`감지결과 : ${isIntersecting}`);
        if (!isIntersecting) return
        fetchNextPage()
    };
    const { setTarget } = useIntersectionObserver({
        onIntersect
    })
    return (
        <List.Base align={'center'} justify={'center'} inline={false}>
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
    )
}

export default ItemList