import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>visit Google</a>
// )

//react method and  () -> that is object
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
