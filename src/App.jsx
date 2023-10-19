import { useState,useRef,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Box1 from './components/Box1'
import Box2 from './components/Box2'

function App() {
  let parentRef= useRef()

  let counter=1

  function boxOne(){
    var box1= document.querySelector('.box1')
    box1.style.zIndex=++counter
  }
  
  function boxTwo(){
    var box2= document.querySelector('.Box2')
    box2.style.zIndex=++counter
  }




  

  return (
    <div className='App' ref={parentRef}>

<Box1 bo1={boxOne} parent={parentRef} />
<Box2 bo2={boxTwo} parent={parentRef} />
    </div>
     
  )
}

export default App
