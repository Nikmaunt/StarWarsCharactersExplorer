import React from "react";
import {Label} from '@/components/ui/label.tsx';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group.tsx';
import {useState} from "react";
import {isDisabled} from "@/helpers/constansts.tsx";

interface GenderRadioGroupProps {
    filters: {
        gender: string | null;
    };
    onGenderChange: (value: string) => void;
}

const GenderRadioGroup: React.FC<GenderRadioGroupProps> = React.memo(({ filters, onGenderChange }) => {
    const [value, setValue] = useState<string>(filters.gender ?? '');
        const onClickChange = (value: string) => {
            setValue(value)
            onGenderChange(value)
        }
        return (
            <fieldset className="space-y-2 ml-1 m-2 text-center">
                <legend className="font-semibold mb-2 text-sm">Gender</legend>
                <RadioGroup
                    value={filters.gender !== null ? value : ''}
                    className="flex flex-col gap-2"
                    onValueChange={onClickChange}
                    disabled={isDisabled() && !value}
                    defaultValue={value}
                >
                    <Label className="flex items-center gap-2 font-normal">
                        <RadioGroupItem value="male"/>
                        Male
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                        <RadioGroupItem value="female"/>
                        Female
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                        <RadioGroupItem value="other"/>
                        Other
                    </Label>
                </RadioGroup>
            </fieldset>
        )
    })
;

export default GenderRadioGroup;
