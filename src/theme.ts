import { createTheme } from "@mui/material";

const theme = createTheme({
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
    typography: {
        fontFamily: [
            'Vollkorn SC',
            'sans-serif'
        ].join(','),
    }
});

export default theme;