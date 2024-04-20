import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Register from './component/Register'
import Login from './component/Login'
import Dashboard from './pages/Dashboard'
import Reward from './pages/Reward'
import Finance from './pages/Finance'
import Loan from './pages/Loan'
import Profile from './pages/Profile'
import UploadProfile from './sub-pages/UploadProfile'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer'
import NotFound from './component/NotFound'

function App() {
  const token = localStorage.getItem('token')
  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <Routes>
      <Route path='/' element={<Navigate to='/promisify-bank' />} />
      <Route path='/promisify-bank' element={<Home/>} />
      <Route path='/promisify-bank/about-us' element={<About/>} />
      <Route path='/promisify-bank/contact-us' element={<Contact/>} />
      <Route path='/promisify-bank/register' element={<Register/>} />
      <Route path='/promisify-bank/login' element={<Login/>} />
      <Route path='/promisify-bank/dashboard' element={<Navigate to='/promisify-bank/dashboard/home' />} />
      <Route path='/promisify-bank/dashboard/home' element={<Dashboard/>} />
      <Route path='/promisify-bank/dashboard/rewards' element={<Reward/>} />
      <Route path='/promisify-bank/dashboard/finance' element={<Finance/>} />
      <Route path='/promisify-bank/dashboard/loan' element={<Loan/>} />
      <Route path='/promisify-bank/dashboard/profile' element={<Profile/>} />
      <Route path='/promisify-bank/dashboard/profile/settings/uploadProfile' element={<UploadProfile/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
      
    </>
  )
}

export default App
