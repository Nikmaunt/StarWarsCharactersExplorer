import React from "react";
import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';

interface Movie {
    url: string;
    title: string;
}

interface MovieSelectProps {
    filters: {
        movie: string | null;
        name: string | null;
        gender: string | null;
        minMass: string | null;
        maxMass: string | null;
    };
    movies: Movie[]; // Provide the correct type for movies
    onMovieChange: (value: string) => void;
    movieTitle: string;
}

const MovieSelect: React.FC<MovieSelectProps> = React.memo(({ filters, movies, onMovieChange, movieTitle }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (movies.length > 0) {
            setLoading(false);
        }
    }, [movies]);

    return (
        <div className="space-y-2 m-2 text-center">
            <Label htmlFor="movie">Movies</Label>
            <Select
                value={filters.movie ?? (loading ? 'Loading movies' : 'Select a movie')}
                onValueChange={onMovieChange}
                disabled={!movies.length || loading}
            >
                <SelectTrigger className="w-full">
                    <SelectValue>
                        {loading ? 'Loading list of movies' : (filters.movie !== null ? movieTitle : 'Select a movie')}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {movies.map((movie) => (
                        <SelectItem key={movie.url} value={movie.url}>
                            {movie.title}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
});

export default MovieSelect;
