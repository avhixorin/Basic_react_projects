import {React, useId} from 'react'

const InputBox = () => {
    const uniqueId = useId();
  return (

        <div className="h-12 w-full rounded-md bg-white flex">
            <div className="w-1/2 h-full flex justify-around flex-col ml-2 ">
                <label htmlFor={uniqueId} className="text-black/40 text-xl">From</label>
                <input
                className="outline-none w-full bg-transparent py-1.5"
                type='number'
                id={uniqueId}
                ></input>
            </div>
            <div className="w-1/2 h-full flex justify-around items-end flex-col mr-2">
                <p
                className="text-black/40 text-xl"
                >Currency Type</p>
                <select
                className="align-right h-7 w-1/3 rounded-lg bg-gray-100 cursor-pointer outline-none"
                ></select>
            </div>
            
            
        </div>

   
  )
}

export default InputBox
