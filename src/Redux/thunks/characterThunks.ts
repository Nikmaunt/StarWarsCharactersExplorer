import { createAsyncThunk } from '@reduxjs/toolkit';
import api from "@/api/api.ts";

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
    try {
        const response = await api.get('people/');
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching characters');
    }
});

export const fetchMovies = createAsyncThunk('characters/fetchMovies', async () => {
    try {
        const response = await api.get('films/');
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching movies');
    }
});

export const fetchCharacterDetails = createAsyncThunk(
    'characters/fetchCharacterDetails',
    async (id: string) => {
        try {
            const response = await api.get(`people/${id}/`);
            const speciesData = await Promise.all(
                response.data.species.map((species: string) => api.get(species))
            );
            const speciesDetails = speciesData.map((species: any) => species.data);

            const speciesWithDetails = await Promise.all(
                speciesDetails.map(async (species: any) => {
                    const speciesDetailsResponse = await api.get(species.url);
                    return speciesDetailsResponse.data;
                })
            );

            const moviesData = await Promise.all(
                response.data.films.map((film: string) => api.get(film))
            );
            const moviesDetails = moviesData.map((movie: any) => movie.data);

            const spaceshipsData = await Promise.all(
                response.data.starships.map((spaceship: string) => api.get(spaceship))
            );
            const spaceshipsDetails = spaceshipsData.map((ship: any) => ship.data);

            return {
                character: response.data,
                species: speciesWithDetails,
                movies: moviesDetails,
                spaceships: spaceshipsDetails,
            };
        } catch (error) {
            throw new Error('Error fetching character details');
        }
    }
);
