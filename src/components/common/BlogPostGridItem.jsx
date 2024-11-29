import React from "react";

export default function BlogPostGridItem({
    imgSrc,
    title,
    description,
    date,
    size,
}) {
    const sizes = {
        small: {
            colspan: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3",
            rowspan: "row-span-1",
            headerSize: "text-2xl",
        },
        portrait: {
            colspan: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3",
            rowspan: "row-span-2",
            headerSize: "text-xl sm:text-4xl",
        },
        mid: {
            colspan: "col-span-12 lg:col-span-6",
            rowspan: "row-span-1",
            headerSize: "text-xl sm:text-4xl",
        },
        large: {
            colspan: "col-span-12 lg:col-span-9",
            rowspan: "row-span-1",
            headerSize: "text-xl sm:text-4xl",
        },
    };

    return (
        <div
            className={`relative group overflow-hidden hover:cursor-pointer ${sizes[size]["colspan"]} ${sizes[size]["rowspan"]}`}
        >
            <img src={imgSrc} alt={title} className="object-cover h-full group-hover:scale-110 duration-500" />

            <div className="absolute top-0 right-0 bg-primary-200 px-2 py-1 text-white">
                <p className="text-sm">{date}</p>
            </div>

            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 lg:p-10 bg-gradient-to-t from-gray-800 text-white to-transparent">
                <h3
                    className={`font-header group-hover:text-primary-500 duration-300 ${sizes[size]["headerSize"]}`}
                >
                    {title}
                </h3>
                {size !== "small" ? <p className="mt-4 hidden sm:block">{description}</p> : ""}
            </div>
        </div>
    );
}
