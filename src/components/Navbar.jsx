import React from "react";
import WhiteButton from "./common/WhiteButton";
import PrimaryButton from "./common/PrimaryButton";

export default function Navbar() {
    return (
        <nav className="flex items-center sticky top-0 bg-black justify-between py-6 px-8 z-10">
            <div className="md:min-w-[270px]">
                <WhiteButton className={"flex gap-x-2"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M120-240v-80h720v80zm0-200v-80h720v80zm0-200v-80h720v80z" />
                    </svg>
                    <span className="relative -top-[1px]">
                        Menu
                    </span>
                </WhiteButton>
            </div>

            <div>
                <a href="#" className="uppercase text-2xl text-white font-header hover:text-primary-300 duration-300">
                    Brics 
                </a>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-white hover:text-primary-300 duration-300">About Us</a>
                <a href="#" className="text-white hover:text-primary-300 duration-300">Contact</a>
                <PrimaryButton>Hire Us</PrimaryButton>
            </div>
        </nav>
    );
}
