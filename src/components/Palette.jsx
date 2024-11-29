import React from "react";

export default function Palette() {
    return (
        <div className="flex flex-wrap justify-center gap-6 m-12">
            <div className="grow w-full text-center text-2xl mt-8">
                <h1>Primary</h1>
            </div>
            <div className="w-16 h-16 rounded bg-primary-100"></div>
            <div className="w-16 h-16 rounded bg-primary-200"></div>
            <div className="w-16 h-16 rounded bg-primary-300"></div>
            <div className="w-16 h-16 rounded bg-primary-400"></div>
            <div className="w-16 h-16 rounded bg-primary-500"></div>
            <div className="w-16 h-16 rounded bg-primary-600"></div>
            <div className="w-16 h-16 rounded bg-primary-700"></div>
            <div className="w-16 h-16 rounded bg-primary-800"></div>
            <div className="w-16 h-16 rounded bg-primary-900"></div>

            <div className="grow w-full text-center text-2xl mt-8">
                <h1>Secondary</h1>
            </div>
            <div className="w-16 h-16 rounded bg-secondary-100"></div>
            <div className="w-16 h-16 rounded bg-secondary-200"></div>
            <div className="w-16 h-16 rounded bg-secondary-300"></div>
            <div className="w-16 h-16 rounded bg-secondary-400"></div>
            <div className="w-16 h-16 rounded bg-secondary-500"></div>
            <div className="w-16 h-16 rounded bg-secondary-600"></div>
            <div className="w-16 h-16 rounded bg-secondary-700"></div>
            <div className="w-16 h-16 rounded bg-secondary-800"></div>
            <div className="w-16 h-16 rounded bg-secondary-900"></div>

            <div className="grow w-full text-center text-2xl mt-8">
                <h1>Accent</h1>
            </div>
            <div className="w-16 h-16 rounded bg-accent-100"></div>
            <div className="w-16 h-16 rounded bg-accent-200"></div>
            <div className="w-16 h-16 rounded bg-accent-300"></div>
            <div className="w-16 h-16 rounded bg-accent-400"></div>
            <div className="w-16 h-16 rounded bg-accent-500"></div>
            <div className="w-16 h-16 rounded bg-accent-600"></div>
            <div className="w-16 h-16 rounded bg-accent-700"></div>
            <div className="w-16 h-16 rounded bg-accent-800"></div>
            <div className="w-16 h-16 rounded bg-accent-900"></div>

            <div className="grow w-full text-center text-2xl mt-8">
                <h1>Background</h1>
            </div>
            <div className="w-16 h-16 rounded bg-background-100"></div>
            <div className="w-16 h-16 rounded bg-background-200"></div>
            <div className="w-16 h-16 rounded bg-background-300"></div>
            <div className="w-16 h-16 rounded bg-background-400"></div>
            <div className="w-16 h-16 rounded bg-background-500"></div>
            <div className="w-16 h-16 rounded bg-background-600"></div>
            <div className="w-16 h-16 rounded bg-background-700"></div>
            <div className="w-16 h-16 rounded bg-background-800"></div>
            <div className="w-16 h-16 rounded bg-background-900"></div>

            <div className="grow w-full text-center text-2xl mt-8">
                <h1>Font Families</h1>
            </div>

            <div className="flex flex-col gap-y-6">
                <p className="text-center font-header"><span className="text-xl font-bold">Oswald:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos repellendus sequi asperiores? Eius, perferendis.</p>
                <p className="text-center font-body"><span className="text-xl font-bold">Lato:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos repellendus sequi asperiores? Eius, perferendis.</p>
                <p className="text-center font-accent"><span className="text-xl font-bold">Raleway:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dignissimos repellendus sequi asperiores? Eius, perferendis.</p>
            </div>

        </div>
    );
}
