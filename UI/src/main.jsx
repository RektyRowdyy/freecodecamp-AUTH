import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import HomePage from './components/HomePage/HomePage.jsx'
import SignIn from './components/Auth/SignIn/SignIn.jsx'
import SignUp from './components/Auth/SignUp/SignUp.jsx'
import Courses from './components/Courses/Courses.jsx'
import ProtectedRoute from './utilities/ProtectedRoute.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'courses',
        element: <ProtectedRoute element={<Courses />} />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
