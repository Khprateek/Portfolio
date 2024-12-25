// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
      <Navbar/>
        <Routes>
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
