import { Link } from "@heroui/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 h-screen overflow-hidden relative ">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <p className="text-xs tracking-tighter text-foreground-500">
          Copyright &copy; 2025{" "}
          <Link
            className="text-xs bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent"
            href="https://tailwindui.com"
          >
            Burak Bilen.
          </Link>{" "}
          All rights strictly reserved. Powered by{" "}
          <Link
            className="text-xs bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent"
            color="foreground"
            href="https://tailwindui.com"
          >
            Motion Provider
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
