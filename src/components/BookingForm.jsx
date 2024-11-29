import React from "react";
import RadioCardsInput from "./common/forms/RadioCardsInput";
import SelectInput from "./common/forms/SelectInput";
import SubmitBtn from "./common/forms/SubmitBtn";

export default function BookingForm() {
    const budgetOptions = [
        { label: "< $50,000", value: "0-50" },
        { label: "$50,000 - $100,000", value: "50-100" },
        { label: "$100,000 - $500,000", value: "100-500" },
        { label: "$500,000+", value: "500+" },
    ];

    const typeOptions = [
        { label: "Residential" },
        { label: "Commercial" },
        { label: "Renovation" },
        { label: "Other" },
    ];

    return (
        <div className="p-5 bg-background-100 max-w-screen-sm mx-auto shadow-xl opacity-100">
            <h2 className="text-2xl font-header">Lets get practical!</h2>
            <form
                action="#"
                className="flex flex-col"
            >
                    <RadioCardsInput
                        label={"I want to build a..."}
                        fieldName={"projectType-HeroSection"}
                        options={typeOptions}
                    />
                    <SelectInput
                        options={budgetOptions}
                        label={"...for budget"}
                        initialValue={"Please select your budget"}
                    />
                    <div className="self-end mt-6">
                        <SubmitBtn>Calculate</SubmitBtn>
                    </div>
            </form>
        </div>
    );
}
