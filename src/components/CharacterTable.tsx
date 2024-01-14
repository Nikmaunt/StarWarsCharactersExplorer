import React from "react";
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {isDisabled} from "@/helpers/constansts.tsx";
interface Character {
    url: string;
    name: string;
    birth_year: string;
}

interface CharacterTableProps {
    characters: Character[];
}
const CharacterTable: React.FC<CharacterTableProps> = React.memo(({ characters }) => {

    return (
        <div className="w-full mt-12">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead colSpan={2} className="text-center bg-gray-200 p-2">
                                Characters List
                            </TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead style={{ width: '60%' }}>
                                Name
                            </TableHead>
                            <TableHead style={{ width: '40%' }}>
                                Birth year
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isDisabled() && !characters.length ? (
                            <TableRow>
                                <TableCell colSpan={2} className="text-center">
                                    Loading data...
                                </TableCell>
                            </TableRow>
                        ) : (
                            characters.map((character) => (
                                <TableRow key={character.url} className="hover:bg-gray-100 text-left ">
                                    <TableCell>
                                        <Link to={`/character/${character.url.split('/').reverse()[1]}`}>
                                            {character.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {character.birth_year}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
});

export default CharacterTable;
