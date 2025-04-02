import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from '../pages/Home/Main.jsx'
import Login from '../pages/Login/Login.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider autoHideDuration={5000} maxSnack={3}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastre-se" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>
)
