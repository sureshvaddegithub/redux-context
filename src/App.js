
import React from 'react'

import Home from './Components/Home'
import MyCard from './Components/MyCard'

import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/MyCard' element={<MyCard/>}/>
      
      {/* <CardList/> */}
      </Routes>
     
    </div>
  )
}

export default App