'use client'
import '../public/wulkan-display/wulkan-display.css'
import "./globals.css";
import Footer from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import Lenis from "lenis";
import Head from 'next/head';


export default function RootLayout({ children }) {
  
  useEffect(()=>{
    // Initialize Lenis
    const lenis = new Lenis({
      duration:2,
    });
    
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    return(()=>{
      lenis.destroy()
    })
      },[])
  
  return (
    <html lang="en">
      <Head>
        <title>Pranav Sharma</title>
        <meta name='description' content='Full Stack Engineer' />
        </Head>
      <body>
        <Suspense fallback={<Loading/>}>
        <Navbar/>
        {children}
        <Footer/>
        </Suspense>
      </body>
    </html>
  );
}
