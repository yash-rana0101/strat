import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero/Hero";
import ProblemSection from "./components/sections/problem/ProblemSection";
import HowItWorks from "./components/sections/how-it-works/HowItWorks";
import FeatureBento from "./components/sections/features/FeatureBento";
import Stats from "./components/sections/stats/Stats";
import Pricing from "./components/sections/pricing/Pricing";
import FAQ from "./components/sections/faq/FAQ";
import FinalCTA from "./components/sections/cta/FinalCTA";
import Footer from "./components/layout/Footer";
import DarkVeil from "./components/effects/DarkVeil";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-[0.22]">
        <DarkVeil speed={0.15} noiseIntensity={0.01} scanlineIntensity={0.08} scanlineFrequency={1.2} />
      </div>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FeatureBento />
        <Stats />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
