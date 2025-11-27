import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavigationBar from './Components/TopNavigationBar/TopNavigationBar'
import Details from './Components/Details/Details'
import BottomNavigationBar from './Components/BottomNavigationBar/BottomNavigationBar'
import CategoriesBar from './Components/Categories/CategoriesBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigationBar />
      <CategoriesBar />
      <Details />
      <BottomNavigationBar />
    </>
  )
}

export default App
