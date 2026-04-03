import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

  const {user} =  useContext(UserContext);

  if (!user) return <div className='m-24 bg-black text-white w-28 h-7 py-1 px-2 rounded-md'>Please Login</div>

  return <div className=' bg-black text-white w-36 h-7 py-1 px-4 rounded-md'>Welcome {user.username}</div>
}

export default Profile