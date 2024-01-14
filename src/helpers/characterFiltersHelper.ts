interface Character {
    films: string[];
    name: string;
    gender: string;
    mass: string;
}
export const filterCharacters = (characters: Character[], filters: {
    movie?: string | null;
    name?: string | null;
    gender?: string | null;
    minMass?: string | null;
    maxMass?: string | null;
}): Character[] => {
    return characters.filter((character) => {
        const movieFilter = filters.movie ? character.films.includes(filters.movie) : true;
        const nameFilter = filters.name ? character.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
        const genderFilter = filters.gender ? character.gender === filters.gender : true;
        const minMassFilter = filters.minMass ? parseFloat(character.mass) >= parseFloat(filters.minMass) : true;
        const maxMassFilter = filters.maxMass ? parseFloat(character.mass) <= parseFloat(filters.maxMass) : true;

        return movieFilter && nameFilter && genderFilter && minMassFilter && maxMassFilter;
    });
};
