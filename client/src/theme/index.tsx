import { createMuiTheme } from '@material-ui/core';

const config = {
    color: {
        primary: '#17202A',
        secondary: '#2C3E50',
        textPrimary: '#17202A',
        textSecondary: '#2C3E50',
        lightGray: '#EAECEE',
        darkblue: '#39464e',
        white: '#ffffff',
        orange: '#f05a22',
        gray: '#808080',
        text: '#82af05',
    },
    line: {
        color: '#cccccc',
    },
    border: {
        style: '1px solid #cccccc',
        radian: '5px',
    },
    scalingFactor: 1,
};

const normalizeFontSize = (px: number, reverse = false): string => {
    let factor: number;
    if (reverse) {
        factor = 1 / config.scalingFactor;
    } else {
        factor = config.scalingFactor;
    }

    return 0.0625 * px * factor + 'rem';
};

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto_Condensed',
        allVariants: {
            lineHeight: 1.1,
        },
        h1: {
            fontWeight: 300,
            fontSize: normalizeFontSize(96),
            letterSpacing: -1.5 * config.scalingFactor,
        },
        h2: {
            fontWeight: 500,
            fontSize: normalizeFontSize(64),
            letterSpacing: -0.5 * config.scalingFactor,
        },
        h3: {
            fontWeight: 400,
            fontSize: normalizeFontSize(48),
        },
        h4: {
            fontWeight: 400,
            fontSize: normalizeFontSize(34),
            letterSpacing: 0.25 * config.scalingFactor,
        },
        h5: {
            fontWeight: 500,
            fontSize: normalizeFontSize(24),
            letterSpacing: 0.15 * config.scalingFactor,
            lineHeight: 0.8,
        },
        h6: {
            fontWeight: 500,
            fontSize: normalizeFontSize(20),
            letterSpacing: 0.15 * config.scalingFactor,
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: normalizeFontSize(16),
            letterSpacing: 0.15 * config.scalingFactor,
            lineHeight: 1.3,
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: normalizeFontSize(14),
            letterSpacing: 0.1 * config.scalingFactor,
        },
        body1: {
            fontWeight: 400,
            fontSize: normalizeFontSize(16),
            letterSpacing: 0.5 * config.scalingFactor,
        },
        body2: {
            fontWeight: 400,
            fontSize: normalizeFontSize(14),
            letterSpacing: 0.25 * config.scalingFactor,
        },
        button: {
            fontWeight: 500,
            fontSize: normalizeFontSize(14),
            letterSpacing: 1 * config.scalingFactor,
        },
        caption: {
            fontWeight: 400,
            fontSize: normalizeFontSize(12),
            letterSpacing: 0.4 * config.scalingFactor,
        },
        overline: {
            fontWeight: 400,
            fontSize: normalizeFontSize(12),
            letterSpacing: 1.5 * config.scalingFactor,
        },
    },
    palette: {
        primary: {
            main: config.color.primary,
            contrastText: config.color.darkblue,
        },
        secondary: {
            main: '#fff',
            contrastText: config.color.text,
        },
        text: {
            primary: config.color.textPrimary,
            secondary:'#fff'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 5,
            },
            contained: {
                boxShadow: 'none',
                margin: 5,
            },
            containedSecondary: {
                border: config.border.style,
            },
            textSizeSmall: {
                fontSize: normalizeFontSize(12),
            },
            containedSizeSmall: {
                fontSize: normalizeFontSize(12),
            },
            outlinedSizeSmall: {
                fontSize: normalizeFontSize(12),
            },
        },
        MuiChip: {
            root: {
                fontSize: normalizeFontSize(14),
            },
        },
    },
});

export default theme;
