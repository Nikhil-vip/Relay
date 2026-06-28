import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Register from './Register.jsx'
import Log_in from './Log_in.jsx'
import Chat_page from './Chat_page.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/Log_in.jsx' element={<Log_in />} />
        <Route path='/Chat_page.jsx' element={<Chat_page />} />
      </Routes>
    </>
  )
}

export default App
