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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth`, { withCredentials: true });
      setIsLoggedIn(response.status === 200);
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }

  }

  const logOut = async () => {
    await axios.get(`${import.meta.env.VITE_API_URL}/api/logout`, { withCredentials: true })
      .then((res) => {
        setIsLoggedIn(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
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
