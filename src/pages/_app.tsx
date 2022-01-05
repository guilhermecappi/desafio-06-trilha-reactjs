import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import '../styles/swiper.css'
import { ContinentContextProvider } from '../context/ContinentContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentContextProvider>
        <Component {...pageProps} />
      </ContinentContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
