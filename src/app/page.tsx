import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ServiceAreas />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
