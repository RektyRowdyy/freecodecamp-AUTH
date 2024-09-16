import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { AuthProvider } from './contexts/auth.js';
import Toast from './components/Toast/Toast.jsx'
import { toast } from 'react-toastify';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkIsLoggedIn = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth`, { withCredentials: true });
      setIsLoggedIn(res.status === 200);
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  }

  const logOut = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/logout`, { withCredentials: true })
      checkIsLoggedIn();
      setIsLoggedIn(false);
      toast.warn("User Logged Out Successfully!");
      await checkIsLoggedIn();
    } catch (error) {
      toast.error(err.response?.data?.message || "Logout failed.");
    }
  }

  useEffect(() => checkIsLoggedIn, []);

  return (
    <>
      <AuthProvider value={{ isLoggedIn, checkIsLoggedIn, logOut, isLoading }}>
        <NavBar />
        <Toast />
        <Outlet />
      </AuthProvider>
    </>
  )
}

export default App
