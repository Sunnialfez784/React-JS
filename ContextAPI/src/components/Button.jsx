import React, { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext';

const Button = () => {

  const [theme,setTheme] = useContext(themeDataContext)

  const changeTheme = () =>{
    setTheme('dark')
  }

  const changeTheme2 = () =>{
    setTheme('light')
  }

  return (
    <div>
      <button className='h-8 w-28 rounded m-4 bg-gray-400' onClick={changeTheme}>Click me</button>
      <button className='h-8 w-28 rounded m-4 bg-gray-400' onClick={changeTheme2}>Click me</button>
    </div>
  )
}

export default Button