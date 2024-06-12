import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import Events from "./components/Events"
import Blogs from "./components/Blogs"
import Projects from "./components/Projects"
import Signup from "./components/Signup"
import Login from "./components/Login"


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
        path:'/event:id',
        element: <Events/>,
      },
      {
        path:'/blog:id',
        element: <Blogs/>,
      },
      {
        path: '/projects:id',
        element: <Projects/>
      }
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
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App