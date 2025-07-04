import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Sidebar from "./components/Sidebar.jsx"
import Resume from "./components/Resume.jsx"
function App() {

  const [textObject, setTextObject] = useState({
    pd: {form1: '', form2: '', form3: ''}, 
    edu: {form1: '', form2: '', form3: ''}, 
    exp: {form1: '', form2: '', form3: ''}
  })

  const [showObjects, setShowObjects] = useState({
    pdShow: false,
    eduShow: false,
    expShow: false
  })


  function onSubmit(title, object) {
    if (title === "Personal Details") {
      setTextObject({...textObject, pd: object})
      setShowObjects({...showObjects, pdShow: true})
    } else if (title === "Education") {
      setTextObject({...textObject, edu: object})
      setShowObjects({...showObjects, eduShow: true})
    } else {
      setTextObject({...textObject, exp: object})
      setShowObjects({...showObjects, expShow: true})
    }
  }

  return (
    <>
      <Sidebar 
        onSubmit={onSubmit}
      />
      <Resume 
        textObject={textObject}
        pdShow={showObjects.pdShow}
        eduShow={showObjects.eduShow}
        expShow={showObjects.expShow}
      />
    </>
  )
}

export default App
