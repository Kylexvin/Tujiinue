import Hero from '../sections/Hero';
import Pillars from '../sections/Pillars';
import AboutSnippet from '../sections/AboutSnippet';
import ImpactNumbers from '../sections/ImpactNumbers';
import ProgramsPreview from '../sections/ProgramsPreview';
import PresidentQuote from '../sections/PresidentQuote';
import Partners from '../sections/Partners';
import GraphicSection from '../sections/GraphicSection'; // Add this import
import '../styles/components/Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Pillars />
      <AboutSnippet />
      <GraphicSection /> {/* Add this new graphic section */}
      <ImpactNumbers />
      <ProgramsPreview />
      <PresidentQuote />
      <Partners />
    </div>
  );
}

export default Home;