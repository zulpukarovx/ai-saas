import Header from "@/components/Header";
import Features from "@/section/Features";
import Hero from "@/section/Hero";
import Pricing from "@/section/Pricing";
import Testimonials from "@/section/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  );
}
