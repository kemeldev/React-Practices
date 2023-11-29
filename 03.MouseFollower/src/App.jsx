

import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {

  const [enable, setEnable] = useState(false) 
  const enableText = enable ? "Disable Mouse Following" : "ENABLE Mouse Following" 

  const [mousePosition , setMousePosition] = useState({X:0, Y: 0})
  
  useEffect(()=>{

    const handlePointerMove = (e) =>{
      setMousePosition({X: e.clientX, Y:e.clientY})
    }

    if(enable) {
      window.addEventListener('pointermove', handlePointerMove)
    } else {
      window.removeEventListener('pointermove', handlePointerMove)
    }   

    return ()=> {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [enable])


  useEffect(()=>{
    document.body.classList.toggle('no-pointer')

    return () => {
      document.body.classList.remove('no-cursor')
    }


  }, [enable])
  
  return (
    <>
      <div style={
        {
          height: 50,
          width:50, 
          backgroundColor: "gray",
          borderRadius: 50,
          border: "solid 1px darkblue",
          opacity: 0.5,
          position: "absolute",
          pointerEvents: 'none',
          top:-25,
          left:-25,
          transform: `translate(${mousePosition.X}px, ${mousePosition.Y}px) `
        }
      }></div>

      {/* {console.log("x", mousePosition.X, "y", mousePosition.Y)} */}
      <button onClick={()=> setEnable(!enable)} >{enableText}</button>

    </>
  )
}

function App() {
  

  return (
    <>
      <main>
        <FollowMouse/>
      </main>
    </>
  )
}

export default App
