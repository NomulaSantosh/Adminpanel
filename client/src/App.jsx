import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Settings from './pages/Settings'; 

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/Settings" element={<Settings />} /> 
    </Routes>
  )
}

export default App
