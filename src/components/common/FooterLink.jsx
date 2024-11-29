import React from "react";

export default function FooterLink({ children, url }) {
    return (
        <a
            className="inline-block hover:text-primary-500 duration-300 relative before:absolute before:bottom-0 before:h-[1px] before:duration-300 before:w-0 hover:before:w-full before:bg-primary-500"
            href={url || "#"}
        >
            {children}
        </a>
    );
}
