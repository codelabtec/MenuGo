import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from '../pages/Home/Main.jsx'
import Login from '../pages/Login/Login.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastre-se" element={<SignUp />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>
)
