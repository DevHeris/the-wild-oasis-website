import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body className="antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
