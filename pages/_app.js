import { Analytics } from '@vercel/analytics/react';
import { Rubik } from 'next/font/google';
import Script from "next/script";
import { useEffect } from 'react';
import '../styles/globals.css';

const rubik = Rubik({
  weight: ['variable'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {

    useEffect(() => {
      document.body.style.overflowY = 'visible';
    })
    return (
    <main className={rubik.className}>
     <Script id="script" src="../assets/scripts.js" strategy='beforeInteractive'></Script>
      <Component {...pageProps} />
      <Analytics mode="production"/>
    </main>
    );
  }