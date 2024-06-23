import React, { Suspense } from 'react';
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
import EditProfile from './components/EditProfile';
import EventForm from './components/EventForm';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import { load } from './assets/images';
import '@mantine/tiptap/styles.css';
import { projects } from './data';


const Layout = () => {
  return (
    <div className='flex w-full h-fit gap-[4rem] bg-primary'>
      <div className='w-1/3 h-fit relative -left-8 overflow-x-hidden overflow-y-scroll scrollbar-hide'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full'>
        <div className=' w-full relative right-[4rem] z-10 object-cover'>
          <NavBar />
        </div>
        <div className='flex-grow relative -left-[5rem]'>
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
        path:"/projects/edit/:id",
        element: <ProjectForm initialData={projects[0]}/>
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


const Loading = () => (
  <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
    <div className="loader text-secondary text-6xl font-bold">Loading...</div>
    <img src={load} alt="loading image" className=' w-[20rem] h-[20rem]' />
  </div>
);

const App = () => {
  return (
    <MantineProvider>
      <div className='w-full h-screen bg-primary text-secondary'>
        <Suspense fallback={<Loading/>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </MantineProvider>
  );
};

export default App;
