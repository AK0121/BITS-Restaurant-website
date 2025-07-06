import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageTransition from "@/components/shared/PageTransition";
import { TransitionProvider } from "@/components/shared/TransitionProvider";
import { Poppins, Montserrat} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Vijay Restaurant",
  description: "One of the best restaurant in BITS",
  icons: {
    icon : "/favicon.png"
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.variable} ${montserrat.className} overflow-x-hidden`}>
        <TransitionProvider>
          <PageTransition />
          <Navbar />
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
