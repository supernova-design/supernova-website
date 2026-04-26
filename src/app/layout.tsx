import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supernova Design | Interaction Design Studio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased background-grid`}>
        {children}

        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="108dbd3a-00b6-440b-9227-74ab9a39d9bf"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
