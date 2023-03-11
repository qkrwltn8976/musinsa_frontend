import React, { useCallback } from 'react'
import { useCharacterStore } from '../../stores/characterStore'
import { Character } from '../../types/character'
import * as Item from './ItemList.style'

type Props = {
    character: Character;
    index: number;
}

const CharacterItem = ({ character, index }: Props) => {
    const { deleteCharacter } = useCharacterStore()
    const handleClickDeleteButton = useCallback(() => {
        deleteCharacter(index)
    }, [index])

    return (
        <Item.ItemBox inline={false} justify={'center'} align={'center'}>
            <Item.InfoWrapper inline={false} justify={'start'} align={'center'}>
                <Item.Name>{character.name}</Item.Name>
                <Item.Address>{character.aliases}</Item.Address>
            </Item.InfoWrapper>
            <Item.InfoWrapper inline={false} justify={'space-between'} align={'center'}>
                <Item.DetailWrapper inline={false} justify={'start'} align={'baseline'}>
                    <Item.Title>{character.titles}</Item.Title>
                    books {character.books.length} / tvSeries {character.tvSeries.length}
                </Item.DetailWrapper>

                <Item.DeleteButton onClick={handleClickDeleteButton}>x</Item.DeleteButton>
            </Item.InfoWrapper>

        </Item.ItemBox>
    )
}

export default CharacterItem