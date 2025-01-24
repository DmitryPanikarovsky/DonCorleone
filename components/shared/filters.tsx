import { FC } from "react";
import { Button, Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface FiltersProps {
    className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="font-bold" />
            <div className="flex flex-col gap-3 py-6">
                <FilterCheckbox text="Можно собирать" value="1" className="select-none" />
                <FilterCheckbox text="Новинки" value="2" className="select-none" />
            </div>
            <div className="flex flex-col gap-3 py-6 border-y border-y-gray-200">
                <Title text="Цена от и до:" size="xs" className="font-bold" />
                <div className="flex gap-3">
                    <Input type="number" placeholder="0" min={0} max={2000} className="rounded-[10px]" />
                    <Input type="number" placeholder="1952" min={100} max={2000} className="rounded-[10px]" />
                </div>
                <RangeSlider min={0} max={1952} step={10} value={[0, 1952]} className="mt-4" />
            </div>
            <CheckboxFiltersGroup
                className="py-6"
                searchInputPlaceholder="Поиск..."
                title="Ингредиенты:"
                limit={5}
                defaultItems={[
                    {
                        text: "Сырный соус",
                        value: "3",
                    },
                    {
                        text: "Моцарелла",
                        value: "4",
                    },
                    {
                        text: "Чеснок",
                        value: "5",
                    },
                    {
                        text: "Солёные огурчики",
                        value: "6",
                    },
                    {
                        text: "Красный лук",
                        value: "7",
                    },
                    {
                        text: "Томаты",
                        value: "8",
                    },
                ]}
                items={[
                    {
                        text: "Сырный соус",
                        value: "3",
                    },
                    {
                        text: "Моцарелла",
                        value: "4",
                    },
                    {
                        text: "Чеснок",
                        value: "5",
                    },
                    {
                        text: "Солёные огурчики",
                        value: "6",
                    },
                    {
                        text: "Красный лук",
                        value: "7",
                    },
                    {
                        text: "Томаты",
                        value: "8",
                    },
                    {
                        text: "Сырный соус",
                        value: "9",
                    },
                    {
                        text: "Моцарелла",
                        value: "10",
                    },
                    {
                        text: "Чеснок",
                        value: "11",
                    },
                    {
                        text: "Солёные огурчики",
                        value: "12",
                    },
                    {
                        text: "Красный лук",
                        value: "13",
                    },
                    {
                        text: "Томаты",
                        value: "14",
                    },
                ]}
            />
            <div className="flex flex-col gap-3 py-6">
                <Title text="Тип теста:" size="xs" className="font-bold" />
                <FilterCheckbox text="Традиционное" value="15" className="select-none" />
                <FilterCheckbox text="Тонкое" value="16" className="select-none" />
            </div>
            <Button className='w-full mt-2 font-bold'>Применить</Button>
        </div>
    );
};
