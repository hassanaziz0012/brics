import React from "react";

export default function FooterSocialIcon({ url, children }) {
    return (
        <a
            className="rounded-full w-12 h-12 flex items-center justify-center bg-primary-500 duration-300 hover:bg-primary-800 stroke-white"
            href={url || "#"}
        >
            {children}
        </a>
    );
}
