import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui";
import { Title } from "./title";

interface ProductCardProps {
    className?: string;
    imageUrl: string;
    price: number;
    name: string;
    id: number;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
    const { className, imageUrl, price, name, id } = props;

    return (
        <div className={cn("w-[260px]", className)}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[250px]">
                    <img className="w-[215px] h-[205px] pl-2" src={imageUrl} alt={name} />
                </div>
            </Link>
            <Title text={name} size="sm" className="mb-3 mt-3 font-bold" />
            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                    <b>от {price} ₽</b>
                </span>
                <Button variant="secondary" className="text-base font-bold flex gap-1">
                    <Plus size={20} />
                    Добавить
                </Button>
            </div>
        </div>
    );
};
