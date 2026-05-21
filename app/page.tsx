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

export default function Home() {
  return (
    <>
      <Ticker />
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
