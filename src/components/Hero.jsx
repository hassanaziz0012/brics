import React from "react";
import Navbar from "./Navbar";
import PrimaryButton from "./common/PrimaryButton";
import BookingForm from "./BookingForm";

export default function Hero() {
    return (
        <section className="isolate bg-hero bg-cover bg-no-repeat bg-center xl:bg-cover relative">
            <div className="p-10 lg:p-20 lg:py-40 text-white text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-header mb-6">
                    Building Dreams, One Brick at a Time
                </h1>
                <p className="hidden sm:block text-xl">
                    Creating spaces where people thrive.
                </p>

                {/* <div className="mt-12 text-black text-left relative top-1/2 left-0 right-0">
                    <div className="flex justify-center">
                        <BookingForm />
                    </div>
                </div> */}

                <div className="flex justify-center fill-white items-end mt-12 animate-bounce duration-300 ease-in-out pb-10">
                    Scroll to learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487z" />
                    </svg>
                </div>
            </div>

            <div className="-z-10 absolute top-0 bottom-0 left-0 right-0 bg-primary-500 opacity-50"></div>
        </section>
    );
}
