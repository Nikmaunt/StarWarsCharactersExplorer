export interface CharactersState {
    data: any[];
    loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
    character: any | null;
    characterLoading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    characterError: string | null;
    filters: {
        movie: string | null;
        name: string | null;
        gender: string | null;
        minMass: string | null;
        maxMass: string | null;
    };
    movies: any[];
    moviesError: string | null;
}