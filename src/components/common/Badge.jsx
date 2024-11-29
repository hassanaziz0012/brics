import React from "react";

export default function Badge() {
    return (
        <div className="inline-block">
            <div className="flex gap-x-4 items-center my-4 py-2 px-4 bg-primary-500 text-white shadow-lg">
                <div className="fill-white">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"
                        />
                    </svg>
                </div>

                <p>Rated 4.8 out of 500+ reviews</p>
            </div>
        </div>
    );
}
