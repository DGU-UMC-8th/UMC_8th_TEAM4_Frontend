import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import HomeLayout from './layouts/HomeLayout'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import NavBar from "../components/NavBar"
// import GaugeBar from "../components/GaugeBar"
import Button from "../components/Button"
import VitaCheckPage from './pages/VitaCheckPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      }, 
      {
        index: true, // path = "/"와 같은 의미
        element: <div>Home</div>,
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'mypage',
        element: <MyPage />
      },
      {
        path: 'vitacheck',
        element: <VitaCheckPage />
      }
    ]
  }
])
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
