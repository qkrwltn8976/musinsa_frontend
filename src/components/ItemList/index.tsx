import React from 'react'
import { useCharacters } from '../../hooks/queries/useCharacters'
import { Character } from '../../types/character'
import CharacterItem from './CharacterItem'

import * as List from './ItemList.style'

type Props = {}

const ItemList = (props: Props) => {
    const { data } = useCharacters({ page: 1, pageSize: 10 })
    console.log(data)
    return (
        <List.Base align={'center'} justify={'center'} inline={false}>
            {data?.data.map((character: Character) => (
                <CharacterItem character={character} />
            ))}

        </List.Base>
    )
}

export default ItemList