import React from "react";
import { useMemo } from 'react';
import CharacterTable from './CharacterTable';
import {useSelector} from "react-redux";
import {selectCharacterFilters, selectCharacters} from "@/Redux/selectors.ts";
import {filterCharacters} from "@/helpers/characterFiltersHelper.ts";


const FilteredCharacterTable = React.memo(() => {
    const character = useSelector(selectCharacters);
    const filters = useSelector(selectCharacterFilters);

    const filteredCharacters = useMemo(() => {
        return filterCharacters(character, filters);
    }, [character, filters]);

    // @ts-expect-error
    return <CharacterTable characters={filteredCharacters} />;
});

export default FilteredCharacterTable;