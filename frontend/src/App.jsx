import { Route, Routes } from 'react-router-dom'
import  Dashboard  from './pages/Dashboard'
import Landing from './pages/Landing'
import Leaderboard from './pages/Leaderboard'
import { Login } from './pages/Login'
import { SignUpPage } from './pages/Signup'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/slices/authSlice';
import NotFoundPage from './pages/NotFound'
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) return;
    dispatch(fetchUser());
  }, [user, dispatch]);


  return (
    <>
    <Routes>
      <Route path='/*' element={ <NotFoundPage/>} />
      <Route path="/" element={ !user ?  <Landing /> : <Navigate to="/dashboard" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/signin" element={ !user ? <SignUpPage /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/leaderboard" element={ user ? <Leaderboard /> : <Navigate to="/login" />} />
        
    </Routes>
    <Toaster/>
   
    </>
  )
}

export default App
