import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contacts from 'pages/Contacts'
import PageNotFound from 'pages/NotFound'
import Layout from 'components/Layout'
import './App.css'
import SignIn from 'pages/SignIn'

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Contacts />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="sign-in" element={<SignIn />} />
    </Route>
  </Routes>
)
export default App
