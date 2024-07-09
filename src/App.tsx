import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserForm from './components/UserForm'
import SecondPage from './components/SecondPage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/second-page" element={<SecondPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
