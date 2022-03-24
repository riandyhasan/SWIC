import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Coolvetica",
    body: "Inter, sans-serif",
  },
  colors: {
    primary: {
      blue: "#1C1D60",
      red: "#EB222A",
    },
    secondary: {
      blue: "3A45B1",
      yellow: "#FFD600",
      gray: "#D8D7D7",
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
