"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { FC } from "react";
interface CategoriesProps {
    className?: string;
}

const categories = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Комбо" },
    { id: 3, name: "Закуски" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Кофе" },
    { id: 6, name: "Напитки" },
    { id: 7, name: "Десерты" },
];

export const Categories: FC<CategoriesProps> = ({ className }) => {
    const activeCategoryId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn("inline-flex gap-1 p-1 bg-gray-100 rounded-2xl ", className)}>
            {categories.map(({ name, id }) => (
                <a
                    className={cn(
                        "flex items-center font-bold h-10 rounded-2xl px-5 cursor-pointer transition-all duration-100",
                        activeCategoryId === id && "text-primary bg-white shadow-md"
                    )}
                    key={id}
                    href={`/#${name}`}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
