import NextNprogress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

// pairing font 1
import "@fontsource/amatic-sc";
import "@fontsource/amatic-sc/700.css";

import "@fontsource/josefin-sans";
import "@fontsource/josefin-sans/500.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";
// end

// pairing font 2
import "@fontsource/great-vibes";
import "@fontsource/raleway";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
// end
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <NextNprogress />
        <Toaster />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
