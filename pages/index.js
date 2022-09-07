import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Amplify from 'aws-amplify';
import config from './aws-exports';
import App from '../components/App';
Amplify.configure(config);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nuber</title>
        <meta name="description" content="Uber clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Link href="/signin">
            <h1>SignIn</h1>
          </Link>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
