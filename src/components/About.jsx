import React from "react";
import StatisticCard from "./common/StatisticCard";
import Timeline from "./Timeline";
import Badge from "./common/Badge";
import BookingForm from "./BookingForm";

export default function About() {
    return (
        <section className="max-w-screen-lg mx-auto px-10">
            <div className="mt-10 lg:-mt-40 relative">
                <BookingForm />
            </div>
            <div className="my-40 flex flex-col sm:flex-row gap-8">
                <div className="basis-0 grow">
                    <h2 className="text-4xl font-header mb-12 leading-normal">
                        Your Trusted Partner in{" "}
                        <span className="text-primary-500">Construction</span>{" "}
                        and{" "}
                        <span className="text-primary-500">Real Estate</span>
                    </h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos accusantium, exercitationem dolore quisquam alias
                        beatae!
                    </p>
                    <p className="mb-4">
                        Ipsum, itaque doloribus! Molestias, praesentium
                        inventore distinctio, dolores quas sint enim quasi
                        molestiae quae optio rerum dicta, accusamus cumque quia
                        explicabo reiciendis illum architecto voluptatem atque
                        beatae! Accusantium dolorum placeat quis consequuntur
                        obcaecati nihil rem!
                    </p>

                    <Badge />
                </div>

                <div className="grid grid-cols-12 basis-0 grow gap-4">
                    <div className="col-span-12 lg:col-span-6">
                        <StatisticCard
                            value={"25+"}
                            label={"Years of experience"}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <StatisticCard
                            value={"100+"}
                            label={"Projects completed"}
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <StatisticCard
                            value={"$10B+"}
                            label={"Value created"}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="my-12">
                <Timeline />
            </div> */}
        </section>
    );
}
