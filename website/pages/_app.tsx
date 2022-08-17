import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import "firebase-api";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("ENV_TYPE", process.env.NEXT_PUBLIC_ENV_TYPE);
  return (
    <>
      <Component {...pageProps} />
      <article>
        <h3>ENV_TYPE: -{process.env.NEXT_PUBLIC_ENV_TYPE}-</h3>
      </article>
    </>
  );
}

export default MyApp;
