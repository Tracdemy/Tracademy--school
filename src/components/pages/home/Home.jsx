import React from 'react'
import "./Home.css"
import SignUPPage from '../signUpPage/SignUPPage'
const Home = () => {
  return (
    <div className='homeWrapper'>
        <div className='homeContents'>
        <SignUPPage />
        </div>
    </div>
  )
}

export default Home