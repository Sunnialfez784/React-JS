import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddUser  from "./components/AddUser";
import ShowUsers from './components/ShowUsers';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from '../../SmartCartSystem/src/components/Loader';

function App() {

  return (
    <div className='bg-gray-100 min-h-screen w-full'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/adduser' element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
        <Route path='/showuser' element={<ProtectedRoute><ShowUsers /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App