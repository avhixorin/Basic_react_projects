import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/avhixorin')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='w-full flex flex-row'>
      <div className='w-1/2 flex justify-center'>
        <img src={data.avatar_url} className='w-full h-full max-h-80 max-w-80'/>
      </div>  
      <div className='w-1/2 text-center text-3xl text-gray-500 flex items-center hover:text-orange-700'>Github followers: {data.followers}</div>
      
    </div>
  )
}

export default Github
