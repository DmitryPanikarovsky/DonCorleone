"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { CircleX, Search } from "lucide-react";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface SearchInputProps {
    className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const cleanInput = () => {
        setSearchQuery("");
        inputRef.current?.focus();
    };

    const onClickItemSearch = () => {
        setFocused(false);
        setSearchQuery("");
        setProducts([]);
    };

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(
        () => {
            Api.products.search(searchQuery).then((items) => setProducts(items));
        },
        250,
        [searchQuery]
    );

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 right-0 bottom-0 left-0 bg-black/70 transition-all duration-200 invisible opacity-0 z-30",
                    focused && "visible opacity-100"
                )}
            />
            <div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}>
                <Search className="absolute top-1/2 translate-y-[-55%] left-3 h-5 text-gray-400" />
                <input
                    ref={inputRef}
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Найти пиццу..."
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <CircleX
                        color="#ff9742"
                        strokeWidth={1.5}
                        className="absolute top-1/2 translate-y-[-55%] right-3 h-7 text-gray-300 cursor-pointer"
                        onClick={cleanInput}
                    />
                )}
                <div
                    className={cn(
                        "absolute w-full bg-white rounded-2xl top-12 shadow-md transition-all duration-200 invisible opacity-0 z-30 flex flex-col",
                        focused && "visible opacity-100"
                    )}
                >
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            className="px-3 py-2 hover:bg-primary/5 flex gap-2 items-center"
                            href={`/product/${product.id}`}
                            onClick={onClickItemSearch}
                        >
                            <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                            <span>{product.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
