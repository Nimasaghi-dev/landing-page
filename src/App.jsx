import {useState} from 'react'
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
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white' } `}>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonial />
        <Footer />
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  )
}

export default App