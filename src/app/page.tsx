import Navbar from "@/components/Navbar";
import VideoPrefetch from "@/components/VideoPrefetch";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Careers from "@/components/Careers";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoPrefetch />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Careers />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
