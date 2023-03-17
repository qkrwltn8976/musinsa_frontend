import React, { useCallback } from "react";
import { useCharacterStore } from "../../stores/characterStore";
import { Character } from "../../types/character";
import * as Item from "./ItemList.style";
import CloseIcon from "../../assets/img/close.svg";
type Props = {
    character: Character;
    index: number;
    isLast: boolean;
    setTarget?: React.Dispatch<
        React.SetStateAction<HTMLElement | null | undefined>
    >;
};

const CharacterItem = ({ character, index, isLast, setTarget }: Props) => {
    const { deleteCharacter } = useCharacterStore();
    const handleClickDeleteButton = useCallback(() => {
        deleteCharacter(index);
    }, [index]);

    return (
        <Item.ItemBox
            inline={false}
            justify={"center"}
            align={"center"}
            ref={setTarget}
        >
            <Item.InfoWrapper inline={false} justify={"start"} align={"center"}>
                <Item.Name>{character.name}</Item.Name>
                <Item.Address>{character.aliases.join(", ")}</Item.Address>
            </Item.InfoWrapper>
            <Item.InfoWrapper
                inline={false}
                justify={"space-between"}
                align={"center"}
            >
                <Item.DetailWrapper inline={false} justify={"start"} align={"baseline"}>
                    <Item.Title>{character.titles.join(", ")}</Item.Title>
                    books {character.books.length} / tvSeries{" "}
                    {character.tvSeries[0].length === 0 ? 0 : character.tvSeries.length}
                </Item.DetailWrapper>

                <Item.DeleteButton onClick={handleClickDeleteButton}>
                    <img src={CloseIcon} alt="close-button" />
                </Item.DeleteButton>
            </Item.InfoWrapper>
        </Item.ItemBox>
    );
};

export default CharacterItem;
