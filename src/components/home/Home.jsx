import React from 'react'
import Aside from './aside/Aside'
import Main from './main/Main'
import "./Home.css"
import Right from './right/Right'

function Home() {
  return (
    <div className='Container'>
      <Aside />
      <Main />
      <Right />
    </div>
  )
}

export default Home