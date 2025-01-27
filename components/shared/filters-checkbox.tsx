import { cn } from "@/lib/utils"
import { FC, ReactNode } from "react"
import { Checkbox } from "../ui/checkbox"

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
    className?: string;
}

export const FilterCheckbox: FC<FilterCheckboxProps> = (
    { text, value, endAdornment, onCheckedChange, checked, name, className }
) => {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${name}-${String(value)}`}
            />
            <label htmlFor={`checkbox-${name}-${String(value)}`} className="leading-none cursor-pointer flex-1">
                {text}
            </label>
            {endAdornment}
        </div>
    );
};
