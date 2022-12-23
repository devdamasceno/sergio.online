import Head from "next/head";
import { Header } from "../../components/Header";

import { User } from "phosphor-react";


export default function Produtos() {
  return (
    <>
      <Head>
        <title> Produtos | Sérgio Damasceno</title>
      </Head>
      <div>
        <Header />
      </div>
      <p>Produtos</p>
    </>

  )
}