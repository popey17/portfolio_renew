import { Manrope } from "next/font/google";
import "./globals.css";
import style from "@/app/assets/scss/style.module.scss";
import "@/app/assets/scss/base/_base.scss";


const mamrope = Manrope({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata = {
  title: "Aung Myat Kyaw",
  description: "Aung Myat Kyaw's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mamrope.className} ${style.app}`}>{children}</body>
    </html>
  );
}
