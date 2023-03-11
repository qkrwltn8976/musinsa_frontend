import React from 'react'
import CharacterItem from './CharacterItem'

import * as List from './ItemList.style'

type Props = {}

const ItemList = (props: Props) => {
    return (
        <List.Base align={'center'} justify={'center'} inline={false}>
            <CharacterItem />
        </List.Base>
    )
}

export default ItemList