import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import Header from "@/components/ui/Header.tsx";
import {buttonVariants} from "@/components/ui/button.tsx";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table.tsx";
import {} from '@/Redux/charactersSlice.ts';
import {fetchCharacterDetails} from "@/Redux/thunks/characterThunks.ts";
import {selectCharacterDetails, selectCharacterDetailsLoading} from "@/Redux/selectors.ts";
import ErrorMessage from "@/components/ui/error-message.tsx";
import {AppDispatch} from "@/Redux/store.ts";

const CharacterDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {id} = useParams<{ id: string }>()
    const characterDetails = useSelector(selectCharacterDetails);
    const loading = useSelector(selectCharacterDetailsLoading);

    useEffect(() => {
        if (id != null) {
            dispatch(fetchCharacterDetails(id));
        }
    }, [dispatch, id]);

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <Header/>
            {loading === 'rejected' && <ErrorMessage message="Failed to load data"/>}
            <Link to="/" className={buttonVariants({variant: "outline"})}>
                Go Back
            </Link>
            <div className="flex flex-col items-center">
                {loading === "pending" ?
                    <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-center">Loading character name...</h1> :
                    <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-center">{characterDetails?.character.name}</h1>
                }
            </div>
            <Table className="mt-8 w-full rounded-md border">
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={1} className="text-center bg-gray-200 p-2">
                            Species
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading === "pending" ? (
                        <TableRow>
                            <TableCell>Loading species...</TableCell>
                        </TableRow>
                    ) : characterDetails?.species.length === 0 ? (
                        <TableRow>
                            <TableCell>No species information available</TableCell>
                        </TableRow>
                    ) : (
                        characterDetails?.species.map((item: { name: string }, index: number) => (
                            <TableRow key={index} className="hover:bg-grey-lighter">
                                <TableCell>{item.name}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <Table className="mt-8 w-full border">
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={2} className="text-center bg-gray-200 p-2">
                            Movies
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="text-right">RELEASE DATE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='text-center'>
                    {loading === "pending" ? (
                        <TableRow>
                            <TableCell colSpan={2}>Loading movies...</TableCell>
                        </TableRow>
                    ) : characterDetails?.movies.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={2}>No movies information available</TableCell>
                        </TableRow>
                    ) : (
                        characterDetails?.movies.map((item: { title: string; release_date: string }, index: number) => (
                            <TableRow key={index} className="hover:bg-grey-lighter text-left">
                                <TableCell>{item.title}</TableCell>
                                <TableCell className="text-right">{item.release_date}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <Table className="mt-8 w-full border">
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={1} className="text-center bg-gray-200 p-2">
                            Spaceships
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading === "pending" ? (
                        <TableRow>
                            <TableCell>Loading spaceships...</TableCell>
                        </TableRow>
                    ) : characterDetails?.spaceships.length === 0 ? (
                        <TableRow>
                            <TableCell>No spaceships information available</TableCell>
                        </TableRow>
                    ) : (
                        characterDetails?.spaceships.map((item: { name: string }, index: number) => (
                            <TableRow key={index} className="hover:bg-grey-lighter">
                                <TableCell>{item.name}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default CharacterDetails;
