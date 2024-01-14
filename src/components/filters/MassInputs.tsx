import React from "react";
import {Label} from '@/components/ui/label.tsx';
import {Input} from '@/components/ui/input.tsx';
import {isDisabled} from "@/helpers/constansts.tsx";
interface MassInputsProps {
    minMass: string | null;
    maxMass: string | null;
    onMinMassChange: (value: string) => void;
    onMaxMassChange: (value: string) => void;
}

const MassInputs: React.FC<MassInputsProps> = React.memo(({ minMass, maxMass, onMinMassChange, onMaxMassChange }) => {
        return (
            <div className="space-y-2 ml-1 m-2 text-center">
                <Label className="font-semibold mb-2 text-sm" htmlFor="mass">
                    Mass
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Input
                        id="min-mass"
                        placeholder="Min mass"
                        value={minMass || ''}
                        disabled={isDisabled()&& !minMass}
                        onChange={(e) => onMinMassChange(e.target.value)}
                    />
                    <Input
                        id="max-mass"
                        placeholder="Max mass"
                        value={maxMass || ''}
                        disabled={isDisabled() && !maxMass}
                        onChange={(e) => onMaxMassChange(e.target.value)}
                    />
                </div>
            </div>
        )
    }
)

export default MassInputs;
