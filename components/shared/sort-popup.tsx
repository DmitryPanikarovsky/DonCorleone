import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import { FC } from "react";

interface SortPopupProps {
    className?: string;
}

export const SortPopup: FC<SortPopupProps> = ({ className }) => {
    return (
        <div className={cn("inline-flex items-center gap-2 bg-gray-100 px-5 h-[52px] rounded-2xl", className)}>
            <ArrowUpDown size={16} />
            <b>Сортировка по:</b>
            <b className="text-primary cursor-pointer">популярное</b>
        </div>
    );
};