import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './components/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
 

  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1 className="text-center mt-5">404 - Page Not Found</h1>} />
    </Routes>
    <Footer />
  </Router>
   
  )
}

export default App
