import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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