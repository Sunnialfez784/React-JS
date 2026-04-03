import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <div className='flex justify-center h-screen w-full flex-col items-center bg-gray-600'>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
