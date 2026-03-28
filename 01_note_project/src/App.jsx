import React from 'react'
import './index.css'
import Notes from './assets/components/Notes'
import Navbar from './assets/components/Navbar'
import From from './assets/components/From'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      < div className='w-full flex flex-wrap'>
      <From/>
      <Notes/>

      </div>
    </div>
  )
}

export default App
