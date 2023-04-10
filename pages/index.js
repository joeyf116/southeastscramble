import CenteredHero from "@components/CenteredHero";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <main>
        <CenteredHero title={"Southeast Scramble"} />
      </main>

      <Footer />
    </div>
  );
}
