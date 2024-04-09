import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div style={{background: color}} className='w-full h-screen duration-200 overflow-hidden'></div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className="flex flex-wrap bg-slate-200 px-2 py-3 rounded-xl space-x-4 > * + *">
      <button className='px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"red"}}  onClick={() => setColor("red")}>Red</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"black"}}   onClick={() => setColor("black")}>Black</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"green"}}   onClick={() => setColor("green")}>Green</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"blue"}}   onClick={() => setColor("blue")}>Blue</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"grey"}}   onClick={() => setColor("grey")}>Grey</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"purple"}}   onClick={() => setColor("purple")}>Purple</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"yellow"}}   onClick={() => setColor("yellow")}>Yellow</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"lavender"}}   onClick={() => setColor("lavender")}>Lavender</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"pink"}}   onClick={() => setColor("pink")}>Pink</button>
      <button className='px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"white"}}   onClick={() => setColor("white")}>White</button>

    </div>
    </div>
    </>
  )
}

export default App
