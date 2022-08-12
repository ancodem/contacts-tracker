import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contacts from 'pages/Contacts'
import PageNotFound from 'pages/NotFound'
import Layout from 'components/Layout'
import './App.css'

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Contacts />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
)
export default App
