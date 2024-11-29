import React from "react";

export default function PrimaryButton({ type, children }) {
    return (
        <button type={type || "button"} className="py-2 px-6 bg-primary-500 text-white duration-300 hover:bg-primary-400 active:bg-primary-300 hover:-translate-y-1">
            {children}
        </button>
    );
}
