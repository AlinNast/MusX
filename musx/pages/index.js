import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MusX Score</title>
        <meta name="description" content="Database of Score Sheets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title}, ${styles.gradientContainer}`}>
          Welcome to MusX
        </h1>

        <p className={` ${styles.gradientContainer}`}>
          Our mission is to create a big FREE database for music scores and tabs
        </p>

        <Link href="scores/score-list/">
          <div className={styles.card}>
            <h2>Library &rarr;</h2>
            <p>Take a look at our big database of music and pick your song.</p>
          </div>
        </Link>

        <Link href='temp/post-music'>
          <div className={styles.card}>
            <h2>Share music &rarr;</h2>
            <p>Help us in our mission to create a free database of music and share your scores with us.</p>
          </div>
        </Link>

        <Link href='/temp/donation'>
          <div className={styles.card}>
            <h2>Donate to the cause &rarr;</h2>
            <p>Help us achieve our mission and donate for our development team.</p>
          </div>
        </Link>

      </main>
    </div>
  )
}
