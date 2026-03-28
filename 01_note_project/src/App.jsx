import React, { useState } from 'react'
import './index.css'
import Notes from './assets/components/Notes'
import Navbar from './assets/components/Navbar'
import From from './assets/components/From'

//Functions

const App = () => {


  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState('');

  return (
    <div className=''>
      <Navbar />
      < div className='w-full flex flex-wrap'>
        <From title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          notes={notes}
          setNotes={setNotes}


          />
        <Notes 
        
        notes={notes}
        setNotes={setNotes}
        />

      </div>
    </div>
  )
}

export default App
