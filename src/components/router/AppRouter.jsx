import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import StudentDashboard from '../pages/studentDashboard/StudentDashboard'
import AdminDashboard from '../pages/adminDashboard/AdminDashboard'
import AdminSignInPage from '../pages/adminSignIn/AdminSignInPage'
const AppRouter = () => {
  return (
    <div className='appRouter'>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/student-dashboard' element={<StudentDashboard />}/>
        <Route path='/admin-sign-in' element={<AdminSignInPage />}/>
        <Route path='/admin-dashboard' element={<AdminDashboard />}/>
      </Routes>
    </div>
  )
}

export default AppRouter