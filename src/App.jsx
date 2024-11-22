import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import Lenis from 'lenis'
function App() {
  const lenis = new Lenis({
    duration: 1.2
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
