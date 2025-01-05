import localFont from "next/font/local";

import "./globals.css";
import Footer from "./components/footer/footer";


export const metadata = {
  title: "Pranav Sharma",
  description: "Full Stack Engineer",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
