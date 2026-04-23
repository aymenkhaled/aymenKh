import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Process />
        <TechStack />
        <Testimonials />
        <Guarantee />
        <Booking />
      </main>
      <Footer />
    </>
  );
}


