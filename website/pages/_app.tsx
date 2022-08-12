import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ENV_TYPE} from 'env'

function MyApp({ Component, pageProps }: AppProps) {
  return (<><h2>ENV_TYPE: {ENV_TYPE}</h2><Component {...pageProps} /></>)
}

export default MyApp
