import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatisticsSection from './components/StatisticsSection'
import BridgeSection from './components/BridgeSection'
import SwarmSection from './components/SwarmSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <StatisticsSection />
        <BridgeSection />
        <SwarmSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
