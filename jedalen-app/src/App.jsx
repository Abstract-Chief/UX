import { useState } from 'react'
import Header from './components/Header'
import WeekSelector from './components/WeekSelector'
import CanteenGrid from './components/CanteenGrid'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState({
    name: 'Utorok',
    date: '25.11.2025'
  });

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <WeekSelector selectedDay={selectedDay} onDayChange={setSelectedDay} />
        <CanteenGrid selectedDay={selectedDay} />
      </main>
    </div>
  )
}

export default App

