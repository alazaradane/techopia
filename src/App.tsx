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
import path from 'path';
import EditProfile from './components/EditProfile';
import EventForm from './components/EventForm';

const Layout = () => {
  return (
    <div className='flex w-full h-fit gap-[4rem] bg-primary'>
      <div className='w-1/3 h-fit relative -left-8 overflow-x-hidden overflow-y-scroll scrollbar-hide'>
        <SideBar />
      </div>
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
        path: '/projects',
        element: <Project />,
      },
      {
        path: '/projects/create',
        element: <ProjectForm/>
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
      {
        path: '/blogs/create', 
        element: <BlogForm />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/events/create', 
        element: <EventForm/>,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path:'/profile/edit',
        element: <EditProfile />,
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
