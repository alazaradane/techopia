import { Suspense, lazy } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { load } from './assets/images';

const Events = lazy(() => import("./pages/Events"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Projects = lazy(() => import("./pages/Projects"));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./components/Home"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/projects',
        element: <Projects />
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/blogs/:id",
    element: <BlogDetail />
  }
]);

const Loading = () => (
  <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
    <div className="loader text-secondary text-6xl font-bold">Loading...</div>
    <img src={load} alt="loading image" className=' w-[20rem] h-[20rem]' />
  </div>
);

const App = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
