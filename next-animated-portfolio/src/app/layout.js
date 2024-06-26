import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import PortfolioPage from "./portfolio/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
          <div className="h-24">
          <Navbar/>
          </div>
        </div>
        <div className="h-[cacl(100vh- 6rem)]">{children}</div>
        
        </body>
    </html>
  );
}
