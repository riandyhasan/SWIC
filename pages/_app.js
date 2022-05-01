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
      purple: "#FABA8A"
    },
    secondary: {
      blue: "#3A45B1",
      red: "#CB0E05",
      yellow: "#FFD600",
      gray: "#D8D7D7",
      purple: "#A07F9B"
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
