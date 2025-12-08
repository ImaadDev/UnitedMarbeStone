import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Gallery from "@/components/Home/Gallery";
import Blogs from "@/components/Home/Blogs";
import Contact from "@/components/Home/Contact";
import CTASection from "@/components/Home/CTA";

export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Services/>
   <Gallery/>
    <Blogs/>
    <Contact/>
    <CTASection/>
   </>
  );
}
