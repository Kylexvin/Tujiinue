import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Education from './pages/programs/Education';
import AgriHub from './pages/programs/AgriHub';
import Health from './pages/programs/Health';

// ScrollToTop component to handle scroll position
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if there's a hash link (e.g., /about#team)
      if (location.hash) {
        const elementId = location.hash.slice(1); // Remove the # symbol
        const element = document.getElementById(elementId);
        
        if (element) {
          // Scroll to the specific element
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // Element not found, scroll to top
          window.scrollTo(0, 0);
        }
      } else {
        // No hash - scroll to top instantly
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs/education" element={<Education />} />
          <Route path="/programs/agri-hub" element={<AgriHub />} />
          <Route path="/programs/health" element={<Health />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;