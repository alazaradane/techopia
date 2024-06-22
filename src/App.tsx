import React from 'react';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Blog from './components/Blog';
import Events from './components/Events';
import Profile from './components/Profile';
import ProjectForm from './components/ProjectForm';
import BlogForm from './components/BlogForm';
import Login from './components/Login';

const Layout = () => {
  return (
    <div className='flex w-full h-full'>
      <SideBar />
      <div className='flex flex-col w-full'>
        <NavBar />
        <div className='flex-grow'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'projects',
        element: <Project />,
        children: [
          {
            path: 'create', // Correct relative path for nested route
            element: <ProjectForm />,
          },
        ],
      },
      {
        path: 'blogs',
        element: <Blog />,
        children: [
          {
            path: 'create', // Correct relative path for nested route
            element: <BlogForm />,
          },
        ],
      },
      {
        path: 'events',
        element: <Events />,
        children: [
          {
            path: 'create', // Correct relative path for nested route
            element: <ProjectForm />,
          },
        ],
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className='w-full h-screen bg-primary text-secondary'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
