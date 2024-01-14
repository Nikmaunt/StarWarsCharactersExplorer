import '../../global.css'
import {useDispatch, useSelector} from 'react-redux';
import Header from "@/components/ui/Header.tsx";
import ErrorMessage from "@/components/ui/error-message.tsx";
import Filters from '@/components/filters/Filters.tsx';
import {fetchCharacters, fetchMovies} from "@/Redux/thunks/characterThunks.ts";
import {resetCharactersFilters} from '../../Redux/charactersSlice.ts';
import {selectCharactersLoading, selectMovies} from "@/Redux/selectors.ts";
import {useEffect} from "react";
import FilteredCharacterTable from "@/components/filteredCharacterTable.tsx";
import {AppDispatch} from "@/Redux/store.ts";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectCharactersLoading);
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(fetchCharacters());
        dispatch(fetchMovies());
    }, [dispatch]);

    const resetFilters = () => {
        dispatch(resetCharactersFilters());
    };

    return (
        <div className="container">
            <Header/>
            <div className="container mx-auto p-4 md:p-6 bg-lightgray">
                <div className="grid md:grid-cols-[1fr] gap-10 items-start">
                    <div className="flex flex-col md:flex-row md:items-start">
                        {loading === 'rejected' && <ErrorMessage message="Failed to load data"/>}
                        <Filters resetFilters={resetFilters} movies={movies}/>
                        <FilteredCharacterTable/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;