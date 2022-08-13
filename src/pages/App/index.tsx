import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from 'pages/NotFound'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

const Contacts = React.lazy(() => import('pages/Contacts'))
const SignIn = React.lazy(() => import('pages/SignIn'))

const App: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  </Suspense>
)
export default App
