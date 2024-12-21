import {createTheme, em, MantineColorsTuple} from "@mantine/core";

const myColor: MantineColorsTuple = [
    '#ecf4ff',
    '#dce4f5',
    '#b9c7e2',
    '#94a8d0',
    '#748dc0',
    '#5f7cb7',
    '#5474b4',
    '#44639f',
    '#3a5890',
    '#2c4b80'
];


export const theme = createTheme({
    breakpoints: {
        xs: em('360'),
        sm: em('600'),
        md: em('900'),
        lg: em('1200'),
        xl: em('1800'),
    },
    colors: {
        custom: myColor,
    }
});
