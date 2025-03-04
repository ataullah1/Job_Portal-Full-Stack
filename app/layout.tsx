import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/HOC/ClientProvider";
import NextTopLoader from "nextjs-toploader";
import { Nav, Footer, ScrollToTop } from "@/paths";

const font = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenJob Portal",
  description:
    "Find the best job opportunities across various industries on GenJob Portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={font.className}>
          <NextTopLoader
            color="#2563eb"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px rgba(59, 129, 243, 0.5), 0 0 5px rgba(59, 129, 243, 0.5)"
          />
          <Nav />
          {children}
          <ScrollToTop />
          <Footer />
        </body>
      </html>
    </ClientProvider>
  );
}
