import React from "react";
import PrimaryButton from "./common/PrimaryButton";

export default function ExpertsBanner() {
    return (
        <section className="p-10 my-20 text-white bg-black">
            <div className="mx-auto max-w-screen-lg">
                <h4 className="text-lg font-header mb-2">
                    Not sure what you need?
                </h4>
                <h2 className="text-4xl font-header mb-6">
                    Talk to an <span className="text-primary-500">Expert </span>
                </h2>
                <p>
                    Let us guide you and help you pick the best plan for your needs. Our support team is available 24/7 and just a call away.
                </p>

                <div className="mt-10">
                    <PrimaryButton>Get In Touch</PrimaryButton>
                </div>
            </div>
        </section>
    );
}
