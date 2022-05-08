module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontSize: {
            xs: ".6875rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
            "8xl": "6rem",
            "9xl": "8rem",
        },
        screens: {
            xs: { max: "639px" },
            // => @media (max-width: 320px) { ... }

            sm: { min: "640px", max: "767px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: { min: "768px", max: "1023px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: { min: "1024px", max: "1279px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: { min: "1280px", max: "1535px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            xxl: { min: "1536px" },
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
