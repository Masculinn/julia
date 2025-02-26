import "@/styles/globals.css";
import { store } from "@/redux";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/system";
import { fontSans, fontMono } from "@/config/fonts";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </Provider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
