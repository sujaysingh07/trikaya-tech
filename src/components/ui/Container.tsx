import React from "react";
import clsx from "clsx";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div
            className={clsx(
                "mx-auto w-full max-w-[1440px] px-5 lg:px-8",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
