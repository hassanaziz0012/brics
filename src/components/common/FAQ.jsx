import React, { useRef, useState } from "react";

export default function FAQ() {
    const [active, setActive] = useState(true);

    const questions = [
        {
            question:
                "What types of construction projects do you specialize in?",
            answer: "We specialize in residential construction, commercial spaces, renovation and remodeling, and sustainable building solutions tailored to our clients' needs.",
        },
        {
            question: "How long does it take to complete a project?",
            answer: "The timeline varies depending on the project's scope and complexity. For smaller renovations, it can take a few weeks, while larger projects like home builds typically take several months.",
        },
        {
            question: "Do you offer free consultations?",
            answer: "Yes, we offer a complimentary consultation to discuss your project requirements and provide an initial estimate.",
        },
        {
            question: "Can you help with the design phase of my project?",
            answer: "Absolutely! Our team includes experienced designers who can work with you to create a custom design that aligns with your vision and budget.",
        },
        {
            question: "Are your building materials environmentally friendly?",
            answer: "Yes, we prioritize sustainable and eco-friendly materials wherever possible to minimize environmental impact and promote energy efficiency.",
        },
        {
            question: "Do you handle permits and approvals?",
            answer: "Yes, we manage all necessary permits and approvals as part of our comprehensive project management service.",
        },
        {
            question: "What is your pricing structure?",
            answer: "Our pricing is project-specific and depends on factors like size, complexity, materials, and timeline. We provide detailed estimates during the planning phase.",
        },
        {
            question:
                "Can I make changes to the design after the project has started?",
            answer: "Yes, we understand that changes may arise during the project. We'll work with you to accommodate modifications, though they may impact the timeline and cost.",
        },
        {
            question: "Do you provide warranties for your work?",
            answer: "Yes, we stand by the quality of our work and offer warranties on all projects to ensure your peace of mind.",
        },
        {
            question: "How can I track the progress of my project?",
            answer: "We provide regular updates and use a client portal where you can monitor the progress, view photos, and communicate with our team.",
        },
    ];

    function toggleAccordion(e) {
        console.log(e);
        const panel = e.target.nextElementSibling;
        if (active === true) {
            panel.classList.toggle("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
            setActive(!active);
        } else {
            panel.classList.toggle("active");
            panel.style.maxHeight = "0px";
            setActive(!active);
        }
    }

    return (
        <section>
            <div className="max-w-screen-xl mx-auto my-20 px-10">
                <h2 className="text-4xl font-header mb-6">
                    Frequently Asked Questions (F.A.Q)
                </h2>

                {questions.map((q, i) => (
                    <div className="bg-background-100" key={i}>
                        <button
                            onClick={toggleAccordion}
                            className="text-xl w-full text-left font-header p-3 sm:p-5 duration-300 hover:cursor-pointer hover:bg-primary-50"
                        >
                            {q.question}
                        </button>

                        <div
                            className="max-h-0 px-5 overflow-hidden duration-300"
                        >
                            <p className="pb-5">
                                {q.answer}
                            </p>
                        </div>
                    </div>
                ))}
                
                <div className="mt-6">
                    Don't see your question here? <a href="#" className="text-primary-500">Reach out to us directly!</a>
                </div>

            </div>
        </section>
    );
}
