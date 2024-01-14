import { createSlice,  PayloadAction } from '@reduxjs/toolkit';
import {fetchCharacterDetails, fetchCharacters, fetchMovies} from "@/Redux/thunks/characterThunks.ts";
import {CharactersState} from "@/types/characters.ts";

const initialState: CharactersState = {
    data: [],
    loading: 'idle',
    character: null,
    characterLoading: 'idle',
    characterError: null,
    error: null,
    filters: {
        movie: null,
        name: null,
        gender: null,
        minMass: null,
        maxMass: null,
    },
    movies: [],
    moviesError: null,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        resetCharactersFilters: (state) => {
            state.filters = {
                movie: null,
                name: null,
                gender: null,
                minMass: null,
                maxMass: null,
            };
        },
        setMovieFilter: (state, action: PayloadAction<string | null>) => {
            state.filters.movie = action.payload;
        },
        setNameFilter: (state, action: PayloadAction<string | null>) => {
            state.filters.name = action.payload;
        },
        setGenderFilter: (state, action: PayloadAction<string | null>) => {
            state.filters.gender = action.payload;
        },
        setMinMassFilter: (state, action: PayloadAction<string | null>) => {
            state.filters.minMass = action.payload;
        },
        setMaxMassFilter: (state, action: PayloadAction<string | null>) => {
            state.filters.maxMass = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.error.message || 'Error fetching characters';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.moviesError = action.error.message || 'Error fetching movies';
            })
            .addCase(fetchCharacterDetails.pending, (state) => {
                state.characterLoading = 'pending';
                state.characterError = null;
            })
            .addCase(fetchCharacterDetails.fulfilled, (state, action) => {
                state.characterLoading = 'fulfilled';
                state.character = action.payload;
            })
            .addCase(fetchCharacterDetails.rejected, (state, action) => {
                state.characterLoading = 'rejected';
                state.characterError = action.error.message || 'Error fetching character details';
            });
    },
});

export const {
    resetCharactersFilters,
    setMovieFilter,
    setNameFilter,
    setGenderFilter,
    setMinMassFilter,
    setMaxMassFilter,
} = charactersSlice.actions;

export default charactersSlice.reducer;
