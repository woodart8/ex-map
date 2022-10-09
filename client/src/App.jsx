import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MapPage from '../src/pages/MapPage'

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
