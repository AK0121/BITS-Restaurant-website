import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { montserrat} from "@/lib/font";

export const metadata = {
  title: "Vijay Restaurant",
  description: "One of the best restaurant in BITS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`antialiased ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
