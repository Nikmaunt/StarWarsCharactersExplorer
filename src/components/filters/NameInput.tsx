import React from "react";
import {Label} from '@/components/ui/label.tsx';
import {Input} from '@/components/ui/input.tsx';
import {isDisabled} from "@/helpers/constansts.tsx";

interface NameInputProps {
    value: string;
    onNameChange: (value: string) => void;
}

const NameInput: React.FC<NameInputProps> = React.memo(({ value, onNameChange }) => {
        return (
            <div className="space-y-2 ml-1 m-2 text-center">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    disabled={isDisabled() && !value}
                    placeholder="Enter character name"
                    value={value}
                    onChange={(e) => onNameChange(e.target.value)}
                />
            </div>
        )
    })
;

export default NameInput;
