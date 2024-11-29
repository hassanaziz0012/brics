import React from "react";
import FooterLink from "./common/FooterLink";
import FooterSocialIcon from "./common/FooterSocialIcon";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-screen-xl mx-auto px-10">
                <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-2xl font-header">BRICS</h6>

                        <div className="flex gap-6 mt-6 flex-wrap">
                            <FooterSocialIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </FooterSocialIcon>
                            <FooterSocialIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-twitter-x"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </FooterSocialIcon>
                            <FooterSocialIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    class="bi bi-instagram"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </FooterSocialIcon>
                        </div>

                        <div className="mt-8 flex fill-white items-center gap-x-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
                                />
                            </svg>

                            <p>support@brics.com</p>
                        </div>
                        <div className="mt-2 flex stroke-white items-center gap-x-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.25 6.75C2.25 15.0343 8.96573 21.75 17.25 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V18.1284C21.75 17.6121 21.3987 17.1622 20.8979 17.037L16.4747 15.9312C16.0355 15.8214 15.5734 15.9855 15.3018 16.3476L14.3316 17.6412C14.05 18.0166 13.563 18.1827 13.1223 18.0212C9.81539 16.8098 7.19015 14.1846 5.97876 10.8777C5.81734 10.437 5.98336 9.94998 6.3588 9.6684L7.65242 8.69818C8.01453 8.4266 8.17861 7.96445 8.06883 7.52533L6.96304 3.10215C6.83783 2.60133 6.38785 2.25 5.87163 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V6.75Z"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <p>+1 (123) 456-7890</p>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
                        <h6 className="font-header mb-6">Company</h6>

                        <div className="flex flex-col items-start gap-y-2">
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Our Team</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Contact</FooterLink>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
                        <h6 className="font-header mb-6">Services</h6>

                        <div className="flex flex-col items-start gap-y-2">
                            <FooterLink>Residential Construction</FooterLink>
                            <FooterLink>Commercial Spaces</FooterLink>
                            <FooterLink>Renovation & Remodeling</FooterLink>
                            <FooterLink>Sustainable Building</FooterLink>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
                        <h6 className="font-header mb-6">Resources</h6>

                        <div className="flex flex-col items-start gap-y-2">
                            <FooterLink>Blog</FooterLink>
                            <FooterLink>Case Studies</FooterLink>
                            <FooterLink>FAQs</FooterLink>
                            <FooterLink>Download Brochure</FooterLink>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-10 border-gray-800 pt-10 flex flex-wrap gap-6 items-center justify-between">
                    <div className="flex gap-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
                        </svg>
                        <p>2024 Hassandev, All Rights Reserved</p>
                    </div>

                    <div className="flex gap-x-6">
                        <FooterLink>Terms and Conditions</FooterLink>
                        <FooterLink>Privacy Policy</FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
