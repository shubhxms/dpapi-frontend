import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import { useSigner } from 'wagmi';
import { useRouter } from 'next/router'


export default function Home() {

  // signer
  const signer = useSigner()
  const address = signer?.data?._address

  // router object
  const router = useRouter()

  if (address){
    router.push(`/${address}`)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <div className={styles.code}>
        <div className={styles.card}>
          <ul>
            <h3>features</h3>
            <li>personal api</li>
            <li>fetch data programatically</li>
            <li>free to use</li>
          </ul>
          </div>
          <div className={styles.card}>
          
          <ul>
            <h3>coming soon</h3>
            <li>encryption</li>
            <li>decentralized storage</li>
            <li>grant access to external apps</li>
          </ul>

        </div>

        <div className={styles.card}>
          
          <ul>
            <h3>made by shubham</h3>
            <li>hmu on twitter - <a href='https://twitter.com/shubhxms'>@shubhxms</a></li>
            <li>part of buildspace n&w s2</li>
          </ul>
          
        </div>

        </div>
      </main>
    </>
  )
}
