import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import Events from "./pages/Events"
import Blogs from "./pages/Blogs"
import Projects from "./pages/Projects"
import Signup from "./components/Signup"
import Login from "./components/Login"
import  Home  from "./components/Home"




const Layout = ()=>{
  return(
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/events',
        element: <Events/>,
      },
      {
        path:'/blogs',
        element: <Blogs/>,
      },
      {
        path: '/projects',
        element: <Projects/>
      },
    ]
  },
  {
    path: "/signup",
    element:<Signup/>
  },
  {
    path: "/login",
    element:<Login/>
  }
])

const App = () => {
  return (
    <div className=" w-full h-screen bg-primary">
      <RouterProvider router={router} />
    </div>
  )
}

export default App