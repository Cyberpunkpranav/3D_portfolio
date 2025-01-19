import '../public/wulkan-display/wulkan-display.css'
import "./globals.css";
import Footer from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Suspense } from "react";
import Loading from "./loading";
import LenisProvider from './components/hooks/lenis';
import Cursor from './components/cursor/cursor';

export const metadata = {
  title:"Pranav Sharma",
  description:'Full Stack Engineer'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ cursor: 'url(/icons/circle.png),auto'}} className="page-container">
        <Cursor/>
        <Suspense fallback={<Loading/>}>
        <Navbar/>
        <LenisProvider>{children}</LenisProvider>
        <Footer/>
        </Suspense>
      </body>
    </html>
  );
}
