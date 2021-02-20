import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/index.css";
import "./App.css";

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
