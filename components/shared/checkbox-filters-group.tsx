"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Input } from "../ui";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
    name?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({
    className,
    title,
    items,
    defaultItems,
    limit,
    searchInputPlaceholder,
    // onChange,
    // defaultValue,
    // name,
}) => {
    const [showAll, setShowAll] = useState<boolean>(false);

    const list = showAll ? items : defaultItems?.slice(0, limit);

    return (
        <div className={cn("flex flex-col gap-3", className)}>
            <Title text={title} size="xs" className="font-bold" />
            {showAll && (
                <div>
                    <Input placeholder={searchInputPlaceholder} className="bg-gray-50 rounded-[10px]" />
                </div>
            )}
            <div className="flex flex-col gap-4 max-h-96 pr-3 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        className="select-none"
                        key={index}
                        text={item.text}
                        value={item.value}
                        // endAdornment={item.endAdornment}
                        // checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>
            {items.length > limit && (
                <div>
                    <button onClick={() => setShowAll((showAll) => !showAll)} className="text-primary mt-2">
                        {showAll ? "Скрыть" : "+ Показать всё"}
                    </button>
                </div>
            )}
        </div>
    );
};
