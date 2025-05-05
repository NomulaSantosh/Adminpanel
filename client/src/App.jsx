import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Socialmedia from './pages/Socialmedia'
import Password from './pages/Password'
import UserList from './pages/UserList'
import Withdraw from './pages/Withdraw'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/social-media" element={<Socialmedia />} />
      <Route path="/change-password" element={<Password />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/withdraw" element={<Withdraw />} />
    </Routes>
  )
}

export default App