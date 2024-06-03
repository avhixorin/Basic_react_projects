import './App.css'
import { useState } from 'react'

function App() {

  const [color,setColor] = useState('black')
  return (
    <div className='w-full h-screen flex flex-col justify-end items-center'
    style={{backgroundColor: color}}
    >
      <div className='bg-white rounded-full h-10 w-80 mb-10 flex flex-row justify-evenly items-center'> 
        <button onClick={() => {setColor('red')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'red'}}>Red</button>
        <button onClick={() => {setColor('blue')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'blue'}}>Blue</button>
        <button onClick={() => {setColor('green')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'green'}}>Green</button>
        <button onClick={() => {setColor('olive')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'olive'}}>Olive</button>
        <button onClick={() => {setColor('yellow')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'yellow'}}>Yellow</button>
        <button onClick={() => {setColor('pink')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'pink'}}>Pink</button>
        <button onClick={() => {setColor('purple')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'purple'}}>Purple</button>
        <button onClick={() => {setColor('#E6E6FA')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: '#E6E6FA'}}>Lavander</button>
        <button onClick={() => {setColor('white')}} className='outline-none rounded-full px-4 py-1' style={{backgroundColor: 'white'}}>White</button>
        <button onClick={() => {setColor('black')}} className=' text-white outline-none rounded-full px-4 py-1' style={{backgroundColor: 'black'}}>Black</button>

      </div>
    </div>

    
  )
}

export default App
