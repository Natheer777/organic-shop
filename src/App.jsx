import React, { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { Everything, Home } from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {




useEffect(()=>{

  const up = document.querySelectorAll(".up")
window.onscroll = function(){
  this.scrollY >= 1000 ? up.classList.add("look") : up.classList.remove("look");
}
up.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
}
},[])

  
  useEffect(() => {
    setInterval(() => {
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
    });
    
    const leftElements = document.querySelectorAll(".left");
    const rightElements = document.querySelectorAll(".right");
    const hiddenElements = document.querySelectorAll(".hidden");
    const topElements = document.querySelectorAll(".top");
    leftElements.forEach((el) => observer.observe(el));
    rightElements.forEach((el) => observer.observe(el));
    hiddenElements.forEach((el) => observer.observe(el));
    topElements.forEach((el) => observer.observe(el));
    
    return () => {
      leftElements.forEach((el) => observer.unobserve(el));
      rightElements.forEach((el) => observer.unobserve(el));
      hiddenElements.forEach((el) => observer.unobserve(el));
      topElements.forEach((el) => observer.unobserve(el));
    };
  }, );
  }, []);

  return (
    <>
    <button className='up'>up</button>
      <Router>
        <Routes>
          <Route path='/Organic-shop/' element={<Home />} />
          <Route path='/Everything' element={<Everything />} />
        </Routes>
      </Router>
    </>
  )
}

export default App