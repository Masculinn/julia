import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Noto_Sans } from "next/font/google";

export const fontSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
