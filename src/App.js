import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Followers } from './pages/Followers'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Following } from './pages/Following'
import { Repositorys } from './pages/Repositorys'
import { AnotherUser } from './pages/AnotherUser'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
        <Route path="/repos" element={<Repositorys />} />
        <Route path="/anotherUser/:username" element={<AnotherUser />} />
      </Routes>
    </BrowserRouter>
  )
}
