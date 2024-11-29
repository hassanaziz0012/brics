import React from "react";

export default function RadioCardsInput({ label, fieldName, options }) {
    return (
        <div className="my-6">
            <p className="font-header">{label}</p>
            <div className="flex flex-wrap gap-6">
                {options.map((op, i) => (
                    <div className="py-6 relative" key={i}>
                        <input
                            type="radio"
                            name={fieldName}
                            id={`${fieldName}-${i}`}
                            value={op.label}
                            // checked={i === 0 ? true : false}
                            className="hidden peer"
                        />
                        <label
                            htmlFor={`${fieldName}-${i}`}
                            className="p-5 font-header bg-white duration-300 hover:bg-primary-25 hover:cursor-pointer peer-checked:bg-primary-500 peer-checked:text-white"
                        >
                            {op.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
