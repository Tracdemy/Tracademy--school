import React from 'react'
import "./Home.css"
import SignInPage from '../signInPage/SignInPage'
const Home = () => {
  return (
    <div className='homeWrapper'>
        <div className='homeContents'>
        <SignInPage />
        </div>
    </div>
  )
}

export default Home