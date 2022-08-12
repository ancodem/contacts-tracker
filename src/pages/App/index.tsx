import React from 'react'
import './App.css'
import Contacts from 'pages/Contacts'
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => (
  <Routes>
    <Route path='/' element={<Contacts />} />
  </Routes>
)
export default App
