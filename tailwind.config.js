/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            "sans": "Lato", // default
            "header": "Oswald",
            "body": "Lato",
            "accent": "Raleway"
        },
        extend: {
            backgroundImage: {
                "hero": "url('./images/hero.jpg')",
                "testimonials": "url('./images/project-4.jpg')"
            },
            colors: {
                "primary": {
                    25: "#EED2D3",
                    50: "#D3888A",
                    100: "#CD797C",
                    200: "#C86A6D",
                    300: "#C25B5F",
                    400: "#BD4C50",
                    500: "#A63D40",
                    600: "#A43D40",
                    700: "#95373A",
                    800: "#863234",
                    900: "#772C2F"
                },
                "secondary": {
                    100: "#7A7C79",
                    200: "#70716F",
                    300: "#666765",
                    400: "#5C5D5B",
                    500: "#50514F",
                    600: "#474847",
                    700: "#3D3E3D",
                    800: "#333432",
                    900: "#292928",
                },
                "accent": {
                    50: "#FFEEC2",
                    100: "#FFE8AD",
                    200: "#FFE299",
                    300: "#FFDC85",
                    400: "#FFD770",
                    500: "#FFCF56",
                    600: "#FFCB47",
                    700: "#FFC533",
                    800: "#FFBF1F",
                    900: "#FFBA0A",
                },
                "background": {
                    100: "#F7F6F3",
                    200: "#EFEDE7",
                    300: "#E7E3DA",
                    400: "#DEDACE",
                    500: "#D6D1C2",
                    600: "#CEC8B6",
                    700: "#C6BFA9",
                    800: "#BEB69D",
                    900: "#B6AC91",
                },
                "white": "#FFFFFF",
                "black": "#090B0C"
            },
        },
    },
    plugins: [],
};
