import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    paddingBottom: 0,
                }
            }
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#c00000',
        },
        secondary: {
            main: '#000000',
        },
        background: {
            paper: '#f7eedf',
        },
    },
});

theme.typography.h2 = {
    fontSize: '1.5rem',
    fontFamily: ['Vollkorn SC', 'sans-serif'].join(','),
    [theme.breakpoints.up('md')]: {
        fontSize: '3.75rem',
    },
};

theme.typography.h3 = {
    fontSize: '1.25rem',
    fontFamily: ['Vollkorn SC', 'sans-serif'].join(','),
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};

theme.typography.body2 = {
    fontSize: '.75rem',
    fontStyle: 'italic',
    fontFamily: ['Vollkorn', 'sans-serif'].join(','),
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};

export default theme;
