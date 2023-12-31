import React from 'react'
import "./Main.css"
import { Route, Routes } from 'react-router-dom'
import Simpson3_8rule from '../../integration/Simpson3_8rule'
import Input1 from '../../inputs/Input1'
import Keyboard from '../../keyboard/Keyboard'

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Keyboard/>}/>
        <Route path="/integration" element={<Simpson3_8rule/>} />
        <Route path="/statistics" element={<Input1 />} />
      </Routes>    
    </main>
    
  )
}

export default Main