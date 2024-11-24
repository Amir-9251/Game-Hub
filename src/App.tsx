import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Navbar/>
  )
}

export default App
