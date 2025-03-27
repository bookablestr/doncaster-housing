import type { Metadata } from "next";
import { Quicksand, Nunito, Tangerine, Raleway } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Doncaster Housing",
  description:
    "A platform that connects renters with property owners inDoncaster, offering a variety of housing options to suit different needs and budgets. With an easy-to-use interface, transparent listings, and reliable customer support, we make the renting process simple and hassle-free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${nunito.variable} ${tangerine.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
