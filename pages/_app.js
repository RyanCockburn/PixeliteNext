import { Analytics } from '@vercel/analytics/react';
import { Rubik } from 'next/font/google';
import Script from "next/script";
import { useEffect, useLayoutEffect } from 'react';
import '../styles/globals.css';

const rubik = Rubik({
  weight: ['variable'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {

    useEffect(() => {
      document.body.style.overflowY = 'visible';
      console.log(document.body.style.overflowY)
    })
    
    return (
    <main className={rubik.className}>
     <Script id="script" src="../assets/scripts.js" strategy='beforeInteractive'></Script>
      <Component {...pageProps} />
      <Analytics mode="production"/>
    </main>
    );
  }