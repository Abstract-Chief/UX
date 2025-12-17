import Header from './components/Header'
import WeekSelector from './components/WeekSelector'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <WeekSelector />
      </main>
    </div>
  )
}

export default App

