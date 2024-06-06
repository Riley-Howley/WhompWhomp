import './App.css'
import React, { useState } from 'react'
import { Header } from './Components/Header/Header'
import { One } from './Components/Sections/One/One'
import { Three } from './Components/Sections/Three/Three'
import { Two } from './Components/Sections/Two/Two'
import { Four } from './Components/Sections/Four/Four'
import { Five } from './Components/Sections/Five/Five'
import { Sidebar } from './Components/Sidebar/Sidebar'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </>
  )
}

export default App
