import React from "react";
import PrimaryOutlineButton from "./PrimaryOutlineButton";
import Quote from "./Quote";

export default function Project({ title, description, type, imgSrc, location, size, duration, highlight}) {
    return (
        <div className="relative overflow-hidden group isolate h-full sm:px-10 lg:px-0">
            <img
                src={imgSrc}
                alt=""
                className="object-cover w-full lg:h-full"
            />

            <div className="lg:absolute duration-300 lg:opacity-0 group-hover:opacity-90 top-full group-hover:top-0 bottom-0 right-0 left-0 bg-white p-5 2xl:p-10 flex flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between">
                        <h2 className="text-2xl font-header mb-4">
                            {title}
                        </h2>
                        <div className="px-2 text-sm rounded-full bg-primary-25 border border-primary-500 inline-block">
                            {type}
                        </div>
                    </div>

                    <p>
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 lg:opacity-0 group-hover:opacity-100 duration-300 delay-300">
                        <div className="flex items-center gap-x-2">
                            <div className="w-6 h-6">
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"
                                    />
                                </svg>
                            </div>
                            <span>{location}</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-6 h-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                >
                                    <path d="m46-160 138-276q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l173 497h-85L666-632q-8-23-25-35.5T601-680t-40.5 13-25.5 36l-86 287q-9 28-32.5 46T363-280q-27 0-50-14.5T280-335l-27-66-118 241zm194-400q-50 0-85-35.5T120-680q0-50 35-85t85-35 85 35 35 85q0 49-35 84.5T240-560m0-80q17 0 28.5-11.5T280-680t-11.5-28.5T240-720t-28.5 11.5T200-680t11.5 28.5T240-640m0-40" />
                                </svg>
                            </div>
                            <span>{size}</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="w-6 h-6">
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.49998 0.849976C7.22383 0.849976 6.99998 1.07383 6.99998 1.34998V3.52234C6.99998 3.79848 7.22383 4.02234 7.49998 4.02234C7.77612 4.02234 7.99998 3.79848 7.99998 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.49998 13.15C4.37957 13.15 1.84998 10.6204 1.84998 7.49998C1.84998 6.10612 2.35407 4.83128 3.19049 3.8459C3.36919 3.63538 3.34339 3.31985 3.13286 3.14115C2.92234 2.96245 2.60681 2.98825 2.42811 3.19877C1.44405 4.35808 0.849976 5.86029 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976ZM6.74049 8.08072L4.22363 4.57237C4.15231 4.47295 4.16346 4.33652 4.24998 4.25C4.33649 4.16348 4.47293 4.15233 4.57234 4.22365L8.08069 6.74051C8.56227 7.08599 8.61906 7.78091 8.19998 8.2C7.78089 8.61909 7.08597 8.56229 6.74049 8.08072Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <span>{duration}</span>
                        </div>
                    </div>

                    <Quote text={highlight} className={"lg:opacity-0 group-hover:opacity-100 duration-300 delay-300"} />
                </div>

                <div className="lg:opacity-0 group-hover:opacity-100 duration-300 delay-300">
                    <PrimaryOutlineButton>Read Case Study</PrimaryOutlineButton>
                </div>
            </div>
        </div>
    );
}
