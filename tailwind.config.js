module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                ovo: ['Ovo', 'sans-serif'],
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(300px, 1fr) )'
            }
        },
    },
    plugins: [],
}