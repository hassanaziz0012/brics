import React from "react";
import BlogPostGridItem from "./common/BlogPostGridItem";

export default function Blog() {
    const posts = [
        {
            imgSrc: "./images/post-1.jpg",
            title: "Top 5 Sustainable Building Practices in 2024",
            description:
                "Discover the latest trends in eco-friendly construction that are shaping the industry.",
            size: "large",
            date: "2d ago",
        },
        {
            imgSrc: "./images/post-2.jpg",
            title: "How to Plan Your Dream Home Construction",
            description:
                "A step-by-step guide to turning your vision into reality, from blueprints to keys.",
            size: "portrait",
            date: "3d ago",
        },
        {
            imgSrc: "./images/post-3.jpg",
            title: "The Future of Smart Homes",
            description:
                "Explore how technology is transforming residential spaces into intelligent, connected environments.",
            size: "small",
            date: "1w ago",
        },
        {
            imgSrc: "./images/post-4.jpg",
            title: "Renovation vs. New Construction: Which is Right for You?",
            description:
                "Weigh the pros and cons of renovating an existing space versus starting fresh with new construction.",
            size: "small",
            date: "6hr ago",
        },
        {
            imgSrc: "./images/post-5.jpg",
            title: "7 Design Tips for Commercial Spaces That Work",
            description:
                "Learn how to create functional and attractive designs for businesses that drive results.",
            size: "small",
            date: "6d ago",
        },
        {
            imgSrc: "./images/post-6.jpg",
            title: "A Look Inside a Modern Villa Build",
            description:
                "Step through the process and challenges of constructing a luxurious villa.",
            size: "small",
            date: "1m ago",
        },
        {
            imgSrc: "./images/post-7.jpg",
            title: "Why Sustainable Construction is the Future",
            description:
                "Dive into the benefits of green building for the environment and your wallet.",
            size: "small",
            date: "2m ago",
        },
        {
            imgSrc: "./images/post-8.jpg",
            title: "Budget-Friendly Renovation Ideas for Your Home",
            description:
                "Tips and tricks for upgrading your home without breaking the bank.",
            size: "small",
            date: "3w ago",
        },
        {
            imgSrc: "./images/post-9.jpg",
            title: "Trends in Commercial Real Estate Development",
            description:
                "What’s new in the world of office buildings, retail hubs, and mixed-use spaces.",
            size: "small",
            date: "3d ago",
        },
    ];

    return (
        <section className="my-20">
            <div className="max-w-screen-xl mx-auto px-10">
                <h2 className="font-header text-4xl">
                    Latest Insights in Construction and Real Estate
                </h2>

                <div className="grid grid-cols-12 gap-6 mt-20">
                    {posts.map((p, i) => (
                        <BlogPostGridItem {...p} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
