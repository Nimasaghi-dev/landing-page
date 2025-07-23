import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Price from './components/Price'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import DarkMode from './components/DarkMode'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-7xl mx-auto pt-20 px6">
        <HeroSection />
        <div id="features">
          <FeatureSection />
        </div>
        <div id="workflow">
          <WorkFlow />
        </div>
        <div id="pricing">
          <Price />
        </div>
        <div id="testimonials">
          <Testimonial />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App