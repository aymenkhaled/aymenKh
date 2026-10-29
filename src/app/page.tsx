import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { Guarantee } from "@/components/Guarantee";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Services />
        <Process />
        <TechStack />
        <Guarantee />
        <Booking />
      </main>
      <Footer />
    </>
  );
}


