import React from "react";
import TestimonialCard from "./common/TestimonialCard";
import PrimaryOutlineButton from "./common/PrimaryOutlineButton";
import PrimaryButton from "./common/PrimaryButton";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Müller",
            role: "Homeowner",
            text: "Working with this team was a dream come true. They built our home exactly as we imagined it, with great attention to detail.",
            imgSrc: "./images/person.jpg"
        },
        {
            name: "Thomas Richter",
            role: "Property Developer",
            text: "Their professionalism and commitment to sustainable solutions made our project a resounding success.",
            imgSrc: "./images/person-2.jpg"
        },
        {
            name: "Emily Hoffmann",
            role: "Small Business Owner",
            text: "The commercial space they designed is not only functional but also attracts more customers thanks to its modern layout.",
            imgSrc: "./images/person-3.jpg"
        },
        {
            name: "Markus Becker",
            role: "Real Estate Investor",
            text: "This team knows how to deliver on time without compromising quality. My portfolio has never looked better!",
            imgSrc: "./images/person.jpg"
        },
        {
            name: "Julia Wagner",
            role: "Interior Designer",
            text: "Collaborating with them was effortless. They respected my vision while bringing their expertise to the table.",
            imgSrc: "./images/person-2.jpg"
        },
        {
            name: "Daniel Weber",
            role: "Renovation Client",
            text: "They transformed our old townhouse into a modern masterpiece while preserving its original charm.",
            imgSrc: "./images/person-3.jpg"
        },
        {
            name: "Anna Schäfer",
            role: "Entrepreneur",
            text: "The office they created for my startup is inspiring and perfectly suits our needs. My team loves it!",
            imgSrc: "./images/person.jpg"
        },
        {
            name: "Peter Koch",
            role: "Eco-Community Member",
            text: "Our sustainable apartment complex is everything we hoped for. We’re proud to live in a green-friendly space.",
            imgSrc: "./images/person-2.jpg"
        },
        {
            name: "Laura Schmidt",
            role: "Retail Store Manager",
            text: "The retail hub they built has revitalized our business. Customers constantly compliment the vibrant design!",
            imgSrc: "./images/person-3.jpg"
        },
    ];

    return (
        <section className="pt-20 bg-testimonials relative isolate">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-background-100 opacity-95 -z-10"></div>

            <div className="max-w-screen-xl mx-auto px-10">
                <h2 className="text-lg mb-4 font-header">
                    Real People, Real Results
                </h2>
                <h2 className="text-4xl font-header">What Our Clients Say</h2>

                <div className="flex flex-wrap gap-6 my-10">
                    {testimonials.map((t, i) => (
                        <TestimonialCard {...t} key={i} />
                    ))}
                </div>
            </div>

            <div className="bg-background-200 py-20 mt-20">
                <div className="max-w-screen-xl mx-auto px-10">
                    <h2 className="text-4xl font-header">Ready to join our happy clients?</h2>
                    
                    <div className="flex flex-wrap gap-6 mt-10">
                        <PrimaryButton>Get Started Today</PrimaryButton>
                        <PrimaryOutlineButton>Explore more projects</PrimaryOutlineButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
