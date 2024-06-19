import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-100vw">
      <h1 className="text-5xl bg-slate-600">Hello this is me</h1>
    </div>
  )
}

export default App
