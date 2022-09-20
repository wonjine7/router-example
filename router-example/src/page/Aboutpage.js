import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate();

  const goToHomepage=()=>{
    navigate('/');
  }

  return (
    <div>
      <h1>About page!</h1>
      <button onClick={goToHomepage}>Go to home page</button>
    </div>
  )
}

export default AboutPage
