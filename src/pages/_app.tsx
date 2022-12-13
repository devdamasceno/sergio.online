import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  console.log('“Eu não estaria onde estou se eu não tivesse falhado – e muito. O bom e o ruim fazem parte da equação do sucesso” ')

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
