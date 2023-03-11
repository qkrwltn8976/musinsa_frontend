import React from 'react'
import { useCharacters } from '../../hooks/queries/useCharacters'
import { Character } from '../../types/character'
import CharacterItem from './CharacterItem'

import * as List from './ItemList.style'

type Props = {}

const ItemList = (props: Props) => {
    const { characters } = useCharacters({ page: 1, pageSize: 100 })
    console.log(characters)
    return (
        <List.Base align={'center'} justify={'center'} inline={false}>
            {characters.map((character: Character, index: number) => (
                <CharacterItem character={character} index={index} key={`character-item-${index}`} />
            ))}
        </List.Base>
    )
}

export default ItemList