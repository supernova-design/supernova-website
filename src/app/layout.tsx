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
          data-website-id="9e209644-0ceb-4e9d-83e0-e9907f553fa7"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
