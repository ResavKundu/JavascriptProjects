import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginform from './components/Loginform'
import ComplexLoginForm from './components/ComplexLoginForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComplexLoginForm/>
    </>
  )
}

export default App
