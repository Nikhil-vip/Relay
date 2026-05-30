import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Register from './Register.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
