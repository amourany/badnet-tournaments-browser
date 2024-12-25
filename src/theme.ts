import {createTheme, em, MantineColorsTuple} from "@mantine/core";

// const paleBlue: MantineColorsTuple = [
//     '#ecf4ff',
//     '#dce4f5',
//     '#b9c7e2',
//     '#94a8d0',
//     '#748dc0',
//     '#5f7cb7',
//     '#5474b4',
//     '#44639f',
//     '#3a5890',
//     '#2c4b80'
// ];

const deepBlue: MantineColorsTuple = [
    "#e5f3ff",
    "#cde2ff",
    "#9ac2ff",
    "#64a0ff",
    "#3884fe",
    "#1d72fe",
    "#0969ff",
    "#0058e4",
    "#004ecd",
    "#0043b5"
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
        custom: deepBlue,
    }
});
