import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  console.log("ENV_TYPE", process.env.NEXT_PUBLIC_ENV_TYPE)
  return (<><h2>ENV_TYPE: {process.env.NEXT_PUBLIC_ENV_TYPE}-</h2><Component {...pageProps} /></>)
}

export default MyApp
