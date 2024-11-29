import React from "react";
import TestimonialCard from "./common/TestimonialCard";
import TextInput from "./common/forms/TextInput";
import SelectInput from "./common/forms/SelectInput";
import RadioCardsInput from "./common/forms/RadioCardsInput";
import SubmitBtn from "./common/forms/SubmitBtn";
import PrimaryOutlineButton from "./common/PrimaryOutlineButton";
import Badge from "./common/Badge";

export default function CTAForm() {
    const featuredTestimonial = {
        name: "Daniel Weber",
        role: "Renovation Client",
        text: "They transformed our old townhouse into a modern masterpiece while preserving its original charm.",
        imgSrc: "./images/person-3.jpg",
    };

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
        <section className="py-20 bg-[url('./images/blueprint.jpg')] bg-cover text-white relative isolate">
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-primary-700 opacity-85 -z-10"></div>

            <div className="max-w-screen-xl mx-auto px-10 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                    <h2 className="font-header text-4xl mb-4">
                        Let's build something extraordinary together!
                    </h2>
                    <p>
                        Whether it’s your dream home or the perfect commercial
                        space, our experts are here to help.
                    </p>

                    <div className="my-6">
                        <TestimonialCard {...featuredTestimonial} shadow="black" />
                    </div>

                    <Badge />
                </div>

                <div className="col-span-12 md:col-span-6 bg-background-200 text-black p-5">
                    <form action="#">
                        <h3 className="font-header text-2xl">
                            Tell us your project
                        </h3>
                        <TextInput fieldName={"name"} label={"Name"} />
                        <TextInput
                            fieldName={"email"}
                            label={"Email"}
                            type={"email"}
                        />
                        <SelectInput
                            options={budgetOptions}
                            label={"Project Budget"}
                            initialValue={"Please select your budget"}
                        />
                        <RadioCardsInput
                            label={"Please select your project type"}
                            fieldName={"projectType"}
                            options={typeOptions}
                        />
                        <TextInput
                            fieldName={"remarks"}
                            label={"Additional Remarks"}
                            size={"textarea"}
                        />
                        <SubmitBtn>Submit</SubmitBtn>
                    </form>
                </div>
            </div>
        </section>
    );
}
