import { useState } from 'react'
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage';
import Layout from './components/layout';
import About from './pages/about_us';
import Products from './pages/products';
import Blog from './pages/blog';
import Contact from './pages/contact';
import './App.css'

function App() {

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <Router>
        <Routes>
          <Route path = "/" element = {<Layout />} >
            <Route index element = {<Homepage />} />
            <Route path = "/about" element = {<About />} />
            <Route path = '/products' element = {<Products/>} />
            <Route path = "/blog" element = {<Blog />} />
            <Route path = "/contact" element = {<Contact />} />
          </Route>
          {/* <Route path = "*" element = {<Navigate to= "/" />} /> */}
          {/* <Route path = "/about" element = {<About />} />
          <Route path = "/blog" element = {<Blog />} />
          <Route path = "/contact" element = {<Contact />} /> */}
        </Routes>
    </Router>
  );
};

export default App;
