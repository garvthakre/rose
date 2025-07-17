import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import only the Demo component first to test
import CreatorPortfolio from './pages/Demo'

// Comment out other imports temporarily
import Valentine from './pages/Valentine'
import ChristmasCreator from './pages/Christmas2'
import LewdWaifuUniverse from './pages/Hentai2'
import LuxuryCreatorWebsite from './pages/Luxury'
import CreatorBioSite from './pages/Milf3'
import CreatorWebsite from './pages/Birthday2'
import CleanBaddieBio from './pages/Genz'
import Hentai from './pages/hentai2'
import NYECreatorWebsite from './pages/Neweve'
import MiaMonroeSite from './pages/Genz1'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Test with only Demo page first */}
          <Route path="/milf" element={<CreatorBioSite />} />
          <Route path="/demo" element={<CreatorPortfolio />} />
          
          {/* Comment out other routes temporarily */}
           <Route path="/valentine" element={<Valentine />} />
          <Route path="/christmas" element={<ChristmasCreator />} />
          <Route path="/hentai" element={<LewdWaifuUniverse />} />
          <Route path="/luxury" element={< MiaMonroeSite />} />
          <Route path="/bdsm" element={<CreatorBioSite />} />
          <Route path="/birthday" element={<CreatorWebsite />} />
          <Route path="/genz" element={<CleanBaddieBio />} />
          <Route path="/hentai2" element={<Hentai />} />
          <Route path="/newyear" element={<NYECreatorWebsite />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App