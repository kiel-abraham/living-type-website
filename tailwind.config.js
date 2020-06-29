// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            }
        },
        extend: {
            colors: {
                'lt-black': '#1a1a1a'
            }
        }
    },
    purge: {
        enabled: false // purging via gatsby-config. This just stops a warning message
    },
    variants: {},
    plugins: []
};