import React from "react";
import ServiceCard from "./common/ServiceCard";

export default function Services() {
    const services = [
        {
            title: "Residential Construction",
            description:
                "We build homes designed to last, tailored to your family needs.",
            icon: (
                <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                    />
                </svg>
            ),
        },
        {
            title: "Commercial Spaces",
            description:
                "Functional, stylish, and sustainable spaces for your business.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                </svg>
            ),
        },
        {
            title: "Renovation and Remodeling",
            description:
                "Transform your existing space with innovative solutions.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                >
                    <path d="M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h480v440q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80zM240-560h480v-200h-40v160h-80v-160h-40v80h-80v-80H320q-33 0-56.5 23.5T240-680zm0 160h480v-80H240zm0 0v-80z" />
                </svg>
            ),
        },
        {
            title: "Sustainable Building Solutions",
            description: "Eco-friendly construction for a greener tomorrow.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                >
                    <path d="m80-80 80-400h640l80 400zm40-720v-80h120v80zm58 640h262v-80H194zm67-427-57-56 85-85 57 56zm-35 267h230v-80H226zm270-360q-83 0-141.5-58.5T280-880h80q0 50 35 85t85 35 85-35 35-85h80q0 83-58.5 141.5T480-680m-40 160v-120h80v120zm80 360h262l-16-80H520zm0-160h230l-16-80H520zm195-267-84-85 56-56 85 84zm5-213v-80h120v80z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="my-40 max-w-screen-lg mx-auto px-10">
            <h2 className="font-header text-4xl mb-4">
                Our Expertise, Your Vision
            </h2>
            <h3 className="text-lg">
                Comprehensive solutions tailored to your construction and real
                estate needs.
            </h3>

            <div className="my-10 flex flex-wrap gap-12">
                {services.map((service, i) => (
                    <div key={i} className="w-96 lg:grow">
                        <ServiceCard title={service.title} {...service} />
                    </div>
                ))}
            </div>
        </section>
    );
}
