import { useState } from 'react'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/menu'  Component={Menu}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
