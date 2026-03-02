import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div className='text-2xl'>Please Login</div>

  return <div className='text-2xl'>Welcome  {user.username}</div>
}

export default Profile