import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoHome from './components/TodoHome'
import Add from './components/Add'
import { Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  return (
    <>
          


              <Routes>
     
      <Route path="/home" element={<TodoHome/>} />
      <Route path="/add" element={<Add/>} />
    </Routes>
    </>
  )
}

export default App
