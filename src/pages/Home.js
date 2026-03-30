import Hero from '../sections/Hero';
import Pillars from '../sections/Pillars';
import AboutSnippet from '../sections/AboutSnippet';
import ImpactNumbers from '../sections/ImpactNumbers';
import ProgramsPreview from '../sections/ProgramsPreview';
import PhotoGallery from '../sections/PhotoGallery';
import PresidentQuote from '../sections/PresidentQuote';
import Partners from '../sections/Partners';
import '../styles/components/Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Pillars />
      <AboutSnippet />
      <ImpactNumbers />
      <ProgramsPreview />
      <PhotoGallery />
      <PresidentQuote />
      <Partners />
    </div>
  );
}

export default Home;