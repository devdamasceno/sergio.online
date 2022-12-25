import Head from "next/head";
import { Header } from "../../components/Header";

import styles from './styles.module.scss';

import imgMain from '../../assets/imgMain.svg';
import emoji from '../../assets/emoji.svg';

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
            <h2>Teste nossos produtos gratuitamente <img className={styles.imgEmoji} src={emoji.src} /></h2>
            <p>Com produtos que proporcionam resultados imediatos e benefícios comprovados, estamos aqui para tornar sua vida melhor.</p>

          </div>

          <div className={styles.imgMain}>
            <img src={imgMain.src} />
          </div>

        </div>

      </div>

    </>

  )
}