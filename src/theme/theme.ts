import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// const theme = extendTheme({
//   fonts: {
//     heading: `'Open Sans', sans-serif`,
//     body: `'Raleway', sans-serif`,
//   },
// });

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
