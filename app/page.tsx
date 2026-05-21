import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import FeatureBento from "./components/FeatureBento";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import DarkVeil from "./components/DarkVeil";

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
