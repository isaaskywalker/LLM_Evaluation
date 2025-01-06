module.exports = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            success: 'var(--color-success)',
            danger: 'var(--color-danger)',
            warning: 'var(--color-warning)',
            info: 'var(--color-info)',
            background: 'var(--color-background)',
            'secondary-background': 'var(--color-secondary-background)',
            label: 'var(--color-label)',
            'secondary-label': 'var(--color-secondary-label)',
            'tertiary-label': 'var(--color-tertiary-label)',
          },
        },
      },
      plugins: [],
    }
