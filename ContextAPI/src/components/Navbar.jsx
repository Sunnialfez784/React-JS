import { useContext } from 'react'
import Nav2 from './Nav2'
import { themeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
  
  const [theme] = useContext(themeDataContext)

  return (
    <div className={theme}>
      <h1 className='font-bold text-2xl'>Appsile</h1>
      <Nav2 />
    </div>
  )
}

export default Navbar 