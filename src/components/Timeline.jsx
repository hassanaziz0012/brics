import React from "react";

export default function Timeline() {
    return (
        <div className="flex flex-wrap relative justify-between items-center gap-y-12 isolate">
            <div className="relative">
                <div className="w-12 h-12 p-2 rounded-full bg-accent-800 flex items-center justify-center text-white hover:scale-105 duration-150">
                    2012
                </div>
                <p className="bottom-full my-4">
                    Founded the BRICS construction agency
                </p>
            </div>

            <div className="w-12 h-12 p-2 rounded-full bg-accent-800 flex items-center justify-center text-white ">
                2012
            </div>
            <div className="w-12 h-12 p-2 rounded-full bg-accent-800 flex items-center justify-center text-white">
                2012
            </div>
            <div className="w-12 h-12 p-2 rounded-full bg-accent-800 flex items-center justify-center text-white">
                2012
            </div>
            <div className="w-12 h-12 p-2 rounded-full bg-accent-800 flex items-center justify-center text-white">
                2012
            </div>

            {/* <div className="absolute bg-accent-800 top-0 bottom-0 w-1 -z-10"></div> */}
            <div className="absolute bg-accent-800 h-1 w-full -z-10"></div>
        </div>
    );
}
