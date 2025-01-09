import localFont from "next/font/local";
import '../public/wulkan-display/wulkan-display.css'
import "./globals.css";
import Footer from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
  title: "Pranav Sharma",
  description: "Full Stack Engineer",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
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
