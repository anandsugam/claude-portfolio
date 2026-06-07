import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Philosophy from "@/components/Philosophy";
import Podcast from "@/components/Podcast";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1">
        <Hero />
        <Work />
        <Podcast />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
