import { Rubik } from 'next/font/google';
import Script from "next/script";
import '../styles/globals.css';

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
    return (
    <main className={rubik.className}>
      <Script id="script" src="../assets/scripts.js" strategy='beforeInteractive'></Script>
      <Component {...pageProps} />
      
    </main>
    );
  }