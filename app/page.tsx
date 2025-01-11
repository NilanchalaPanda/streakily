import Faqs from "@/components/landingPage/Faqs";
import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Hero from "@/components/landingPage/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Faqs />
      <Footer />
    </main>
  );
}
