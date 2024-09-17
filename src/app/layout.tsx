import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosProvider from "@/providers/AosProvider";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Welcome to Tekbayt | Bringing the future to you!",
  description:
    "We speed up your business growth by building amazing & unique brands for your business and products with the best customer you can think of.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden scroll-smooth`}>
        <Script
          src="https://app.termly.io/embed.min.js"
          data-auto-block="off"
          data-website-uuid="64f1c6c8-c436-430f-8b35-0af17e24610a"
          defer={true}
        ></Script>
        <AosProvider>
          <div className="flex flex-col min-h-screen scrollbar-hide">
            <Header />
            <main className="mb-auto pt-20 mx-auto w-full 2xl:max-w-7xl">
              {children}
            </main>
            <Footer />
          </div>
        </AosProvider>

        <Script
          src="//code.tidio.co/lhe5zo68obxwm9dhsmhl7q22dcauwyin.js"
          async
        ></Script>
      </body>
    </html>
  );
}
