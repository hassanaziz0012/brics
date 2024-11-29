import React from "react";
import Quote from "./Quote";
import Star from "./Star";

export default function TestimonialCard({ imgSrc, text, role, name, shadow = "primary" }) {
    const shadows = {
        "primary": "shadow-primary-25",
        "black": ""
    }

    return (
        <div className={`bg-white p-10 pb-5 ${shadows[shadow]} shadow-xl max-w-96 overflow-hidden group relative before:absolute before:w-8 before:h-8 before:bg-primary-500 before:-top-3 before:-left-3 before:rounded-full`}>
            <div className="flex flex-col justify-between h-full group-hover:scale-110 duration-300 text-black">
                <Quote text={text} />
                
                <div className="mt-6">
                    <div className="flex gap-x-4">
                        <div className="w-12 h-12 rounded-full">
                            <img
                                src={imgSrc}
                                alt={name}
                                className="rounded-full w-full aspect-square object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-primary-500">{name}</p>
                            <p className="text-gray-700 text-sm">{role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
