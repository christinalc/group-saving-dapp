import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Group Saving dApp</title>
        <meta name="description" content="Decentralized group saving based on the concept of ROSCAs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button className="button is-link">Connect Wallet</button>
      </main>

      <footer className={styles.footer}>
        <p>Built by Christina Chen</p>
      </footer>
    </div>
  )
}
