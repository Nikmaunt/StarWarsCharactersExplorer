import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    setGenderFilter,
    setMaxMassFilter,
    setMinMassFilter,
    setMovieFilter,
    setNameFilter
} from "@/Redux/charactersSlice.ts";
import MovieSelect from './MovieSelect';
import NameInput from './NameInput';
import GenderRadioGroup from './GenderRadioGroup';
import MassInputs from './MassInputs';
import {fetchMovies} from "@/Redux/thunks/characterThunks.ts";
import {TableHead} from "@/components/ui/table.tsx";
import {selectCharacterFilters, selectMovies} from "@/Redux/selectors.ts";
import {AppDispatch} from "@/Redux/store.ts";
interface Movie {
    url: string;
    title: string;
    // Add other properties if needed
}
interface FiltersProps {
    resetFilters: () => void;
    movies: Movie[];
}

const Filters: React.FC<FiltersProps> = ({resetFilters}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [movieTitle, setMovieTitle] = useState<string>('');
    const filters = useSelector(selectCharacterFilters);
    const movies = useSelector(selectMovies);

    useEffect(() => {
        if (!movies.length) {
            dispatch(fetchMovies());
        }
    }, [dispatch, movies]);

    const handleMovieChange = useCallback((value: string) => {
        const selectedMovie = movies.find(movie => movie.url === value);
        const movieTitle = selectedMovie ? selectedMovie.title : '';
        setMovieTitle(movieTitle)
        dispatch(setMovieFilter(value || null));
    }, [dispatch, movies]);

    return (
        <div className="border bg-lightgray rounded-lg mr-3 mt-12 flex-grow mb-4 md:mb-0 p-0">
            <div className='rounded-s border'>
                <TableHead className="flex items-center bg-gray-200 p-2">
                    <span className="flex-grow text-center">Filter</span>
                </TableHead>
            </div>
            <MovieSelect
                filters={filters}
                movies={movies}
                onMovieChange={handleMovieChange}
                movieTitle={movieTitle}
            />
            <NameInput
                value={filters.name || ''}
                onNameChange={(value) => dispatch(setNameFilter(value))}
            />
            <GenderRadioGroup
                filters={filters}
                onGenderChange={(value) => dispatch(setGenderFilter(value === "other" ? "n/a" : value))}
            />
            <MassInputs
                minMass={filters.minMass}
                maxMass={filters.maxMass}
                onMinMassChange={(value) => dispatch(setMinMassFilter(value))}
                onMaxMassChange={(value) => dispatch(setMaxMassFilter(value))}
            />
            <div className="flex justify-center mb-3 mt-4">
                <button
                    className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition-colors duration-200"
                    onClick={resetFilters}
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default Filters;
