/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FFFFFF',
                dark: '#121212',
                textLight: '#6B7280',
                textDark: '#9CA3AF',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}


