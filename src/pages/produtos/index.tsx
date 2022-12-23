import Head from "next/head";
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
        <p>Produtos</p>
      </div>
      
    </>

  )
}