import React from 'react'
import Home from './Home'
import Searched from './Searched';
import {Route, Routes, useLocation} from 'react-router-dom';
import Recipe from './Recipe';
import Cuisine from './Cuisine';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
  )
}

export default Pages;