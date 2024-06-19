import { useState } from 'react'
import { InputBox } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-100vw bg-page-bg bg-cover bg-center flex flex-col justify-center items-center">
      <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form>
                    <div className="w-full">
                        <InputBox/>
                    </div>
                    <div className="relative w-full h-0.5">
                    <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox/>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
