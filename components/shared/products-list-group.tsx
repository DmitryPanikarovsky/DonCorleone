import { cn } from '@/lib/utils'
import { Title } from "./title";
import { ProductCard } from './product-card'
import { FC } from 'react'

interface ProductsListGroupProps {
    className?: string;
    listClassName?: string;
    categoryId: number;
    items: any[];
    title: string;
}

export const ProductsListGroup: FC<ProductsListGroupProps> = ({ className, listClassName, categoryId, items, title }) => {
    return (
        <div className={className}>
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
