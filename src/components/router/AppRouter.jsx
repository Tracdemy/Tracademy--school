import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import StudentDashboard from '../pages/studentDashboard/StudentDashboard'
const AppRouter = () => {
  return (
    <div className='appRouter'>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/student-dashboard' element={<StudentDashboard />}/>
      </Routes>
    </div>
  )
}

export default AppRouter