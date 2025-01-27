"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard } from "./product-card";
import { Title } from "./title";

interface ProductsListGroupProps {
    className?: string;
    listClassName?: string;
    categoryId: number;
    items: any[];
    title: string;
}

export const ProductsListGroup: FC<ProductsListGroupProps> = ({
    className,
    listClassName,
    categoryId,
    items,
    title,
}) => {
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.8,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title, categoryId);
        }
    }, [intersection?.isIntersecting]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold" />
            <div className={cn("grid grid-cols-3 gap-[50px] mt-10", listClassName)}>
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};
