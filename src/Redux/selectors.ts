import { RootState } from '@/Redux/store.ts';

export const selectCharacters = (state: RootState) => state.characters.data;
export const selectCharactersLoading = (state: RootState) => state.characters.loading;
export const selectCharactersError = (state: RootState) => state.characters.error;
export const selectCharacterFilters = (state: RootState) => state.characters.filters;
export const selectMovies = (state: RootState) => state.characters.movies;
export const selectCharacterDetails = (state: RootState) => state.characters.character;
export const selectCharacterDetailsLoading = (state: RootState) => state.characters.characterLoading;
export const selectCharacterDetailsError = (state: RootState) => state.characters.characterError;
export const selectMoviesError = (state: RootState) => state.characters.moviesError;