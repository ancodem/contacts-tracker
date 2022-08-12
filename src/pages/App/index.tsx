import React from 'react'
import './App.css'
import Contacts from 'pages/Contacts'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from 'pages/NotFound'

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Contacts />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
)
export default App
