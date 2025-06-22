import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageTransition from "@/components/shared/PageTransition";
import { TransitionProvider } from "@/components/shared/TransitionProvider";
import { montserrat } from "@/lib/font";

export const metadata = {
  title: "Vijay Restaurant",
  description: "One of the best restaurant in BITS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${montserrat.className} overflow-x-hidden`}>
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
