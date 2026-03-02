import React, {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username , setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUser({username , password})
  }

  return (
    <div className='flex flex-col items-center border p-20 shadow-2xl align-middle'>
      <h2 className='text-6xl  mb-9'>Login</h2>
      <input 
        type="text" 
        placeholder='username'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        className='p-3 m-3 h-12 w-96 text-xl text-white'
        />
      <input 
        type="text" 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='p-3 m-3 h-12 w-96 text-xl text-white'
        />
      <button onClick={handleSubmit} className='h-16 w-40 mt-7 text-2xl text-white'>Submit</button>
    </div>
  )
}

export default Login