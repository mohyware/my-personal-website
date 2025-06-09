/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    primary: '#FFFFFF',
                    dark: '#121212',
                    textLight: '#5C5C5C',
                    textDark: '#FFFFFF',
                    secondary: '#4B5563',
                },
            },
        },
    },
    plugins: [],
}


