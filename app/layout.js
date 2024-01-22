import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dronology Innovations",
  description: "Aerial excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main_body">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
