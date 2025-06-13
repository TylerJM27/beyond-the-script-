/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cream: "#eae7dc",
                tan: "#d8c3a5",
                salmon: "#e98074",
                "salmon-dark": "#e85a4f",
            },
            fontFamily: {
                italiana: ["Italiana", "serif"],
            },
            backgroundImage: {
                portlandSky:
                    "url('./src/app/assets/images/portland-skyline.jpg)",
            },
        },
    },
    plugins: [],
};
