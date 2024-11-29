import React from "react";

export default function WhiteButton({ className, children }) {
    return (
        <button className={`bg-white py-3 px-6 rounded-full text-black hover:bg-black hover:stroke-white hover:fill-white hover:text-white duration-300 ${className}`}>
            {children}
        </button>
    );
}
