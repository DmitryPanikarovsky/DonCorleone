"use client";

import { cn } from "@/lib/utils";
import { ChangeEvent, FC, useState } from "react";
import { Input } from "../ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filters-checkbox";
import { Title } from "./title";

type Item = FilterCheckboxProps;

interface Props {
    onChange?: (values: string[]) => void;
    searchInputPlaceholder?: string;
    defaultValue?: string[];
    defaultItems: Item[];
    className?: string;
    title: string;
    items: Item[];
    limit: number;
    name?: string;
}

export const CheckboxFiltersGroup: FC<Props> = (props) => {
    const {
        className,
        title,
        items,
        defaultItems,
        limit,
        searchInputPlaceholder,
        // onChange,
        // defaultValue,
        // name,
    } = props;

    const [showAll, setShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);

    return (
        <div className={cn("flex flex-col gap-3 justify-start", className)}>
            <Title text={title} size="xs" className="font-bold" />
            {showAll && (
                <div>
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 rounded-[10px]"
                    />
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
                        // onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>
            <div className="text-primary mt-2">
                <button onClick={() => setShowAll((showAll) => !showAll)}>{showAll ? "Скрыть" : "+ Показать всё"}</button>
            </div>
        </div>
    );
};
