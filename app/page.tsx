import { Metadata } from "next";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Mission } from "./components/mission";
import { Programs } from "./components/our-programs";
import { SDGSection } from "./components/sdg-section";
import { PageNavbar } from "./components/navbar";
import { FloatingThemeToggle } from "@/components/floating-theme-toggle";

export const metadata: Metadata = {
  title: "LevelUP",
  description: "Create your own luck",
};

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="lg:px-48 md:px-36 px-4 pt-24">
        <PageNavbar />
        <Hero />
        <Mission />
        <Programs />
        <SDGSection />
        <CTA />
      </div>
      <Footer />
      {/* Floating theme toggle button */}
      <FloatingThemeToggle />
    </div>
  );
}
