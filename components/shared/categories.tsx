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
        <div className={cn("inline-flex gap-1 p-1", className)}>
            {categories.map((cat, index) => (
                <li
                    className={cn(
                        "flex items-center font-bold h-10 rounded-2xl px-5 cursor-pointer transition-all duration-200 border border-black",
                        category === index && "text-primary border border-orange-500"
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
