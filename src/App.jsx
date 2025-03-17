import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Advertisement from './Advertisement.jsx';

function App() {
  

  return (
    <>
    <Navbar/>
      <Header/>
      <Advertisement/>
    </>
  )
}

export default App
