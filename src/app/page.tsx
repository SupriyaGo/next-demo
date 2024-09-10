import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturesCourses from "@/components/FeaturesCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import UpcomingWebiners from "@/components/UpcomingWebiners";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <FeaturesCourses />
      <WhyChooseUs />
      <Testimonials/>
      <UpcomingWebiners/>
    </main>
  );
}
