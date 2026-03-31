import { useState } from "react"
import { createContext } from "react"

export const themeDataContext = createContext()
const ThemeContext = ({children}) => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <themeDataContext.Provider value={[theme,setTheme]}>
        {children}
      </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext