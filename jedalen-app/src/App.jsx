import Header from './components/Header'
import WeekSelector from './components/WeekSelector'
import CanteenGrid from './components/CanteenGrid'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <WeekSelector />
        <CanteenGrid />
      </main>
    </div>
  )
}

export default App

