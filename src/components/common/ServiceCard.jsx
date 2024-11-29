import React from "react";
import PrimaryOutlineButton from "./PrimaryOutlineButton";

export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="p-5 rounded-xl bg-gradient-to-bl from-background-200 to-background-100 min-h-64 flex flex-col justify-between relative overflow-hidden isolate hover:-translate-y-1 duration-300">
            <div>
                <h4 className="text-xl font-header mb-6">{title}</h4>
                <p>{description}</p>
            </div>

            <div className="mt-6">
                <PrimaryOutlineButton>Learn More</PrimaryOutlineButton>
            </div>

            <div className="absolute -right-24 stroke-white fill-white w-64 h-64 -z-10 opacity-75">
                {icon}                
            </div>
        </div>
    );
}
