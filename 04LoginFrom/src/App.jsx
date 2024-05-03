import { useState } from 'react'
import './App.css'
import LoginFrom from './componenets/LoginFrom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginFrom/>
    </>
  )
}

export default App
