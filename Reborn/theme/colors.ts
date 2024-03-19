
export const palette = {
    // Major Color -------------------
    Red: "#C85A55",

    Yellow: "#FFCF88",
    YellowLight: "#F5E6D3",

    Green: "#85CD6C",

    Blue: "#91A8D2",

    Brown: "#8A7B6F",
    BrownDark: "#403230",

    // Whitish Color -------------------
    White: "#FBFBFB",

    Gray200: "#EEEEEE",
    Gray300: "#DDDCDC",
    Gray400: "#B3B1B0",
    Gray500: "#898989",

    BlackLight: "#191015",
    Black: "#000000",
    
} as const

export const colors = {
    palette,

    transparent: "rgba(0, 0, 0, 0)",

    text: palette.Black,
    textDim: palette.BlackLight,

    background: palette.White,

    tint: palette.Gray400,

}