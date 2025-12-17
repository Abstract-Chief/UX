import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kontakt from './pages/Kontakt'
import Alergeny from './pages/Alergeny'
import Menu from './pages/Menu'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/alergeny" element={<Alergeny />} />
        <Route path="/menu/:canteenId" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App

