import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { PopularFavorites } from '@/components/sections/PopularFavorites';
import { About } from '@/components/sections/About';
import { Menu } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { VisitUs } from '@/components/sections/VisitUs';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <PopularFavorites />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <WhyChooseUs />
        <VisitUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
