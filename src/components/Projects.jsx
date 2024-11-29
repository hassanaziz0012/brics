import React from "react";
import Project from "./common/Project";

export default function Projects() {
    const projects = [
        {
            title: "Modern Family Home",
            type: "Residential",
            description: "A contemporary family home designed with open spaces, sustainable materials, and energy-efficient features.",
            imgSrc: "./images/project-1.jpg",
            location: "Berlin, Germany",
            size: "3,500 sq ft",
            duration: "8 months",
            highlight: "Achieved 30% reduction in energy costs.",
        },
        {
            title: "Skyline Office Tower",
            type: "Commercial ",
            description: "A high-rise office building with state-of-the-art facilities, coworking spaces, and a rooftop lounge.",
            imgSrc: "./images/project-2.jpg",
            location: "Hamburg, Germany",
            size: "50,000 sq ft",
            duration: "14 months",
            highlight: "LEED Gold-certified sustainable design.",
        },
        {
            title: "Historic Townhouse Renovation",
            type: "Renovation",
            description: "Restored a 19th-century townhouse, blending classic architecture with modern amenities.",
            imgSrc: "./images/project-3.jpg",
            location: "Munich, Germany",
            size: "2,200 sq ft",
            duration: "6 months",
            highlight: "Preserved original wooden beams and added smart home features.",
        },
        {
            title: "Eco-Friendly Apartment Complex",
            type: "Residential",
            description: "A green living community featuring solar panels, rainwater harvesting systems, and EV charging stations.",
            imgSrc: "./images/project-4.jpg",
            location: "Frankfurt, Germany",
            size: "25,000 sq ft (50 units)",
            duration: "12 months",
            highlight: "Reduced carbon footprint by 40%.",
        },
        {
            title: "Urban Retail Hub",
            type: "Commercial",
            description: "A bustling retail center with modern storefronts, vibrant interiors, and optimized layouts for foot traffic.",
            imgSrc: "./images/project-5.jpg",
            location: "Cologne, Germany",
            size: "15,000 sq ft",
            duration: "10 months",
            highlight: "Increased tenant sales by 20% post-launch.",
        },
        {
            title: "Suburban Villa Retreat",
            type: "Residential",
            description: "A luxurious villa with spacious living areas, a private pool, and a stunning view of the countryside.",
            imgSrc: "./images/project-6.jpg",
            location: "Stuttgart, Germany",
            size: "4,000 sq ft",
            duration: "9 months",
            highlight: "Designed for ultimate relaxation with integrated smart home features.",
        },
    ];

    return (
        <section className="mt-20">
            <div className="max-w-screen-lg mx-auto px-10">
                <h2 className="font-header text-4xl">
                    Our Work Speaks For Itself
                </h2>
            </div>

            <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-y-0">
                {projects.map((proj, i) => (
                    <div key={i} className="col-span-12 lg:col-span-6 xl:col-span-4">
                        <Project {...proj} />
                    </div>
                ))}
            </div>
        </section>
    );
}
