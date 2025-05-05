import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SocialMedia from './pages/Socialmedia'
import ChangePassword from './pages/Password'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/social-media" element={<SocialMedia />} />
      <Route path="/change-password" element={<Password />} />
    </Routes>
  )
}

export default App