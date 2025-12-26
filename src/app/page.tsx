import HeroSection from '@/components/home/HeroSection';
import PopularModels from '@/components/home/PopularModels';
import Testimonials from '@/components/home/Testimonials';
import AboutUs from '@/components/home/AboutUs';
export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularModels />
      <Testimonials />
      <AboutUs />
    </>
  );
}
