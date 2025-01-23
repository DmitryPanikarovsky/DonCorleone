"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface CategoriesProps {
    className?: string;
}

const categories = ["Пиццы", "Комбо", "Закуски", "Коктейли", "Кофе", "Напитки", "Десерты"];

export const Categories: FC<CategoriesProps> = ({ className }) => {

    const [category, setCategory] = useState<number>(0);

    return (
        <div className={cn("inline-flex gap-1 bg-gray-100 p-1 rounded-2xl", className)}>
            {categories.map((cat, index) => (
                <li
                    className={cn(
                        "flex items-center font-bold h-10 rounded-2xl px-5 cursor-pointer",
                        category === index && "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    key={index}
                    onClick={() => setCategory(index)}
                >
                    {cat}
                </li>
            ))}
        </div>
    );
};
