import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-neutral-900 pt-28 lg:pt-40">
        {children}
      </main>
      <Footer />
    </>
  );
}
