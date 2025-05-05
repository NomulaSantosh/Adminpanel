import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Socialmedia from './pages/Socialmedia'
import Password from './pages/Password'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/social-media" element={<Socialmedia />} />
      <Route path="/change-password" element={<Password />} />
    </Routes>
  )
}

export default App