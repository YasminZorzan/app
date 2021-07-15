module.exports = {
    prefix: '',
    purge: {
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        glow: {
            styles: { // Defaults to these values
                default: baseColor =>
                    `0 1px 3px 0 rgba(${baseColor}, 0.4), 0 1px 2px 0 rgba(${baseColor}, 0.24)`,
                md: baseColor =>
                    `0 4px 6px -1px rgba(${baseColor}, 0.4), 0 2px 4px -1px rgba(${baseColor}, 0.24)`,
                lg: baseColor =>
                    `0 10px 15px -3px rgba(${baseColor}, 0.4), 0 4px 6px -2px rgba(${baseColor}, 0.20)`,
                xl: baseColor =>
                    `0 20px 25px -5px rgba(${baseColor}, 0.4), 0 10px 10px -5px rgba(${baseColor}, 0.16)`,
                "2xl": baseColor => `0 25px 50px -12px rgba(${baseColor}, 1)`,
                outline: baseColor => `0 0 0 3px rgba(${baseColor}, 0.5)`,
                none: "none"
            }
        },
        extend: {
            colors: {
                blue: {
                    light: '#8DFFFD',
                    'american-express': '#016FD0'
                },
                gray: '#898989',
                normalGray: '#C9C9C9',
                softGray: '#747474',
                mediumGray: '#4A4A4A',
                darkGray: '#707070',
                floatGray: '#AFAFAF',
                hardGray: '#383838',
                disabledGray: '#8D8D8D',
                disabledLightGray: '#EDEDED',
                strongGray: '#2E2E2E',
                lemonGreen: '#00FD14',
                alertRed: '#DB0000',
                warningYellow: '#FFE500',
                lightGray: '#F4F4F4'
            },
            fontFamily: {
                rajdhani: ['Rajdhani', 'Helvetica', 'Arial', 'sans-serif'],
                robotoMono: ['Roboto Mono', 'Helvetica', 'Arial', 'sans-serif'],
            },
            borderWidth: {
                '5': '5px',
            },
            fontSize: {
                'tiny': '.625rem',
            }
        },
    },
    variants: {
        extend: {
            padding: ['first', 'last']
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('tailwindcss-glow')(),
    ],
};