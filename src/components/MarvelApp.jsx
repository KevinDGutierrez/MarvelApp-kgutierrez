import { useCharacters } from "../hooks/useCharacters";
import { ContainerCharacters } from "./ContainerCharacters";
import { SearchCharacter } from "./SearchCharacters";

export const MarvelApp = () => {
    const { characters, formtaImageuRL, searchCharacter, nextPage, previousPage } = useCharacters();

    return (
        <>
            <SearchCharacter searchCharacter={searchCharacter} />
            <ContainerCharacters 
                characters={characters} 
                formtaImageuRL={formtaImageuRL} 
                nextPage={nextPage} 
                previousPage={previousPage} 
            />
        </>
    );
}
