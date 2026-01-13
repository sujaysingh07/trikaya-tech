type AnimatedUnderlineLinkProps = {
    href: string;
    className?: string; // color comes from here
    children: React.ReactNode;
};

export function AnimatedUnderlineLink({
    href,
    className = "text-primary-color",
    children,
}: AnimatedUnderlineLinkProps) {
    return (
        <a
            href={href}
            className={`group inline-flex items-center gap-1 text-sm font-medium ${className}`}
        >
            <span
                className="
          relative
          after:absolute after:left-0 after:-bottom-0.5
          after:h-[1.5px] after:w-full
          after:origin-left after:scale-x-0
          after:bg-current
          after:transition-transform after:duration-300
          group-hover:after:scale-x-100
        "
            >
                {children}
            </span>
        </a>
    );
}
