import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList'
import RestaurantDetails from './components/RestaurantDetails'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🍕 Sabor Local</h1>
          <p>Conectando você aos melhores restaurantes da sua região</p>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>© 2025 Sabor Local - Desenvolvido com ❤️</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
