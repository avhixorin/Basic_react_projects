
import { useParams } from 'react-router-dom'
function CustomRoute() {
    const {id} = useParams()
  return (
    <div className='bg-red-700 text-white text-4xl flex justify-center p-4'>
      User: {id}
    </div>
  )
}

export default CustomRoute
