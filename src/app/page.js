import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-grain font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <FAQ />
      <Footer />
    </main>
  );
}
