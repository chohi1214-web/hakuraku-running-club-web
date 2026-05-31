import ActivitiesSection from "@/components/ActivitiesSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import GoodsSection from "@/components/GoodsSection";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import MarqueeBand from "@/components/MarqueeBand";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import RamenSection from "@/components/RamenSection";
import SatisfactionSection from "@/components/SatisfactionSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBand />
        <ActivitiesSection />
        {/* <MapSection /> */}
        {/* <RamenSection /> */}
        <GoodsSection />
        <MarqueeBand />
        <InstagramSection />
        <TestimonialsSection />
        <SatisfactionSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
