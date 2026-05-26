import Navbar from './Navbar'
import Home from './Home'
import Aboutus from './Aboutus'
import HowItWorks from './HowItWorks'
import ForIndividual from './ForIndividual'
import ForBusiness from './ForBusiness'
import Footer from './Footer'
import CryptoWaitlist from './CryptoWaitlist'
import Signup from './Signup'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Aboutus />
            <HowItWorks />
            <ForIndividual />
            <ForBusiness />
          </>
        } />

        <Route path="/waitlist" element={<CryptoWaitlist />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
