/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'seven-green': '#4CAF50', // Verde
                'seven-white': '#FFFFFF', // Branco
                'seven-gray': '#F7F7F7', // Cinza claro para fundos
            },
        },
    },
    plugins: [],
}