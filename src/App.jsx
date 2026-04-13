import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter basename="/~rsd2/">
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App