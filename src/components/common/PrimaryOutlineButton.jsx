import React from "react";

export default function PrimaryOutlineButton({ children }) {
    return (
        <button className="text-primary-500 bg-white py-2 px-6 border-primary-500 border hover:bg-primary-500 hover:text-white duration-300">
            {children}
        </button>
    );
}
