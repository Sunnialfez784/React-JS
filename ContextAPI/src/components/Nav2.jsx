import { useContext } from "react"
import { themeDataContext } from "../Context/ThemeContext"

const Nav2 = () => {

  const [theme,setTheme] = useContext(themeDataContext)

  return (
    <div className='flex gap-8 font-semibold'>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Services</h2>
      <h2>Contact</h2>
      <h2>{theme}</h2>
    </div>
  )
}

export default Nav2