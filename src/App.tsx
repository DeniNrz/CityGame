import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CitiesGame from './pages/CitiesGame'
import { cities } from './cities'
import Home from './pages/Home'
import Out from './pages/Out'
import Victoty from './pages/Victoty'

function App() {
  return (
    <div className="w-567 bg-white mx-auto mt-13 items-center rounded-xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<CitiesGame citiesList={cities} />} />
        <Route path="/out" element={<Out />} />
        <Route path="/victoty" element={<Victoty />} />
      </Routes>
    </div>
  )
}

export default App
