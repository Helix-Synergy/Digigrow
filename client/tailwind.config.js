
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#155EEF", // Rich Royal Blue (Header)
                secondary: "#16A34A", // Vibrant Green (Buttons/Highlights)
                tertiary: "#06B6D4", // Cyan
                accent: "#22C55E", // Green Accent
                dark: "#0F172A", // Navy Footer/Dark Text
                light: "#F9FAFB", // Light Gray Background
                white: "#FFFFFF",
                surface: "#F9FAFB", // Alternate background
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Montserrat', 'sans-serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
