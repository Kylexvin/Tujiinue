import AboutHero from '../sections/AboutHero';
import OurStory from '../sections/OurStory';
import VisionMission from '../sections/VisionMission';
import CoreValues from '../sections/CoreValues';
import LeadershipMessage from '../sections/LeadershipMessage';
import TeamPreview from '../sections/TeamPreview';
import '../styles/components/About.css';

function About() {
  return (
    <div className="about">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <LeadershipMessage />
      <TeamPreview />
    </div>
  );
}

export default About;