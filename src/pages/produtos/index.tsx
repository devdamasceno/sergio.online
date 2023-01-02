import Head from "next/head";
import { WhatsappLogo } from "phosphor-react";
import { Header } from "../../components/Header";

import styles from './styles.module.scss';



export default function Produtos() {
  return (
    <>
      <Head>
        <title> Produtos | Sérgio Damasceno</title>
      </Head>

      <div>
        <Header />
      </div>

      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.descriptionMain}>
            <h1>Teste nossas soluções</h1>
            <h2>GRATUITAMENTE</h2>
            <div className={styles.hash}/>
            <p>Com produtos que proporcionam resultados imediatos e benefícios comprovados, estamos aqui para tornar sua vida melhor.</p>


            <div className={styles.buttonContainer}>
              <a className={styles.buttonMainPrimary} href="/comercial">Saiba mais</a>
              <a className={styles.buttonMainSecondary} href="https://wa.me/5532991287531?text=Ol%C3%A1%21%21+Fale+conosco+%C3%A9+veja+como+conectar+a+sua+empresa+á+clientes+%3B%29">Fale conosco </a>
            </div>

          </div>

          <div className={styles.imgMain}>
            <img />
          </div>

        </div>

      </div>

    </>

  )
}