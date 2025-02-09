import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './store/useAuthStore'
import {Toaster} from "react-hot-toast"
import { useThemeStore } from './store/useThemeStore'


const App = () => {
  const {authUser,checkAuth,ischeckingAuth} = useAuthStore()
  const{theme} = useThemeStore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth]) 

  

  if(ischeckingAuth && !authUser){
    return(
      <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-spinner loading-lg"></span>

      </div>
    )

  }
  return(
    <div data-theme={theme}>
      <Navbar/>

      <Routes>
        <Route path='/' element={authUser?<HomePage/>:<Navigate to="/login"/>}/>
        <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to="/"/>}/>
        <Route path='/signup' element={!authUser?<SignupPage/>:<Navigate to="/"/>}/>
        <Route path='/settings' element={authUser?<SettingsPage/>:<Navigate to="/login"/>}/>
        <Route path='/profile' element={authUser?<ProfilePage/>:<Navigate to="/login"/>}/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App