import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User, ShoppingCart, ArrowRight } from "lucide-react";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cn("border-b border-gray-200", className)}>
            <Container className="flex items-center justify-between py-8">
                <div className="flex gap-3 items-start">
                    <Image className="mt-1" src="/logo.png" width={44} height={44} alt="logo" />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Don Corle`Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">вкуснее уже некуда</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16} />
                        Войти
                    </Button>
                    <div>
                        <Button className="group relative">
                            <b>520 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-2" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                                <b>3</b>
                            </div>
                            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
