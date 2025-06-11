import { useState } from 'react'
import Home from './components/Home';
import BlogList from './components/BlogList';
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound'; 
function App() {
 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
   
  )
}

export default App
