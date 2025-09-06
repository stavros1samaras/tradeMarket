import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";

import Navigation1 from './components/Navigation1.jsx'
import Navigation2 from './components/Navigation2.jsx'
import MainTemp from './components/MainTemp.jsx'
import ServiceLayout from './layouts/ServiceLayout.jsx'
import SecondaryLayout from './layouts/SecondaryLayout.jsx'
import Item12 from './components/Item12.jsx';
import Item13 from './components/Item13.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ServiceLayout />}>
            <Route element={<SecondaryLayout />}>
              <Route index element={<MainTemp />} />

              <Route path="/Item12" element={<Item12 />} />
              <Route path="/Item13" element={<Item13 />} />


            </Route>
          </Route>

        </Routes>
      </BrowserRouter >



      {/* <Navigation1 />
      <Navigation2 />
      <MainTemp /> */}
    </>
  )
}

export default App
