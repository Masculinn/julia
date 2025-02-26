import { Link } from "@heroui/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Spinner } from "@heroui/spinner";
import { Chip } from "@heroui/react";

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
      <footer className="w-full flex items-center justify-between py-3 px-4">
        <p className="text-xs tracking-tighter text-foreground-500">
          Powered by{" "}
          <Link
            className="text-xs bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent"
            color="foreground"
            target="_blank"
            rel="noopener noreferrer"
            href="https://burakdev.com/motion-provider"
          >
            Motion Provider
          </Link>
          .
        </p>
        <div className="flex gap-2 items-center justify-center">
          <Chip
            variant="light"
            color="default"
            className="text-xs gap-2 text-foreground-500"
            startContent={<Spinner color="primary" size="sm" />}
          >
            Application initializing
          </Chip>
        </div>
      </footer>
    </div>
  );
}
