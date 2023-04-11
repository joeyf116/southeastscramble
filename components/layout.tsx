import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">{children}</main>
      <Footer />
    </>
  );
}
