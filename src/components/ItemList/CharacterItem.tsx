import React from 'react'
import * as Item from './ItemList.style'

type Props = {}

const CharacterItem = (props: Props) => {
    return (
        <Item.ItemBox>
            <Item.InfoWrapper inline={false} justify={'start'} align={'center'}>
                <Item.Name>이름</Item.Name>
                <Item.Address>주소</Item.Address>
            </Item.InfoWrapper>
            <Item.InfoWrapper inline={false} justify={'space-between'} align={'center'}>
                <Item.DetailWrapper inline={false} justify={'start'} align={'baseline'}>
                    <Item.Title>타이틀</Item.Title>
                    books / tvSeriess
                </Item.DetailWrapper>

                <Item.DeleteButton>삭제</Item.DeleteButton>
            </Item.InfoWrapper>

        </Item.ItemBox>
    )
}

export default CharacterItem