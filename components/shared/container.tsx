import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface ContainerProps {
    className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children }) => {
    return <div className={cn("mx-auto max-w-[1280px] bg-grey", className)}>{children}</div>;
};
