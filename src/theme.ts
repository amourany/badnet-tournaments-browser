import {createTheme, em} from "@mantine/core";

export const theme = createTheme({
    breakpoints: {
        xs: em('360'),
        sm: em('600'),
        md: em('900'),
        lg: em('1200'),
        xl: em('1800'),
    },
});
