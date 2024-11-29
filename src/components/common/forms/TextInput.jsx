import React from "react";

export default function TextInput({ fieldName, label, type, size }) {
    const renderInputElem = () => {
        return size === "textarea" ? (
            <textarea name={fieldName} id={fieldName} className="w-full border p-1 focus:outline focus:outline-1 focus:outline-primary-500" rows={4}></textarea>
        ) : (
            <input
                type={type || "text"}
                className="w-full border p-1 focus:outline focus:outline-1 focus:outline-primary-500"
                name={fieldName}
                id={fieldName}
            />
        );
    };

    return (
        <div className="flex flex-col items-start my-6">
            <label className="font-header" htmlFor={fieldName}>
                {label}
            </label>
            {renderInputElem()}
        </div>
    );
}
