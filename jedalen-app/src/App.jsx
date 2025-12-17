import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kontakt from './pages/Kontakt'
import Alergeny from './pages/Alergeny'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/alergeny" element={<Alergeny />} />
      </Routes>
    </div>
  )
}

export default App

