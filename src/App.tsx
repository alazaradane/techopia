/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useContext, useState } from 'react';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
import CreateProfile from './components/CreateProfile';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { load, profile } from './assets/images';
import '@mantine/tiptap/styles.css';
import { projects } from './data';
import { AuthContext } from './Context/AuthContext';
import ProtectedRoute from './components/utils/ProtectedRoute';
import Admins from './components/Admins';
import BlogDetail from './components/Blogdetail';

const Layout = () => (
  <div className='flex w-full h-fit gap-[4rem] bg-primary'>
    <div className='w-1/3 h-fit relative -left-8 overflow-x-hidden overflow-y-scroll scrollbar-hide'>
      <SideBar />
    </div>
    <div className='flex flex-col w-full'>
      <div className='w-full relative right-[4rem] z-10 object-cover'>
        <NavBar />
      </div>
      <div className='flex-grow relative -left-[5rem]'>
        <Outlet />
      </div>
    </div>
  </div>
);

const Loading = () => (
  <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
    <div className="loader text-secondary text-6xl font-bold">Loading...</div>
    <img src={load} alt="loading image" className='w-[20rem] h-[20rem]' />
  </div>
);

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [admin, setAdmin] = useState({
    fullName: 'Full Name',
    username: 'example123',
    email: 'example@gmail.com',
    password: 'example123',
    profilePic: profile,
  });

  return (
    <MantineProvider>
      <div className='w-full h-screen bg-primary text-secondary'>
        <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="projects" element={<Project />} />
                  <Route path="projects/create" element={<ProjectForm />} />
                  <Route path="projects/edit/:id" element={<ProjectForm initialData={projects[0]} />} />
                  <Route path="blogs" element={<Blog />} />
                  <Route path="blogs/create" element={<BlogForm />} />
                  <Route path="blogs/edit/:id" element={<BlogForm />} />
                  <Route path='blogs/:id' element={<BlogDetail/>}/>
                  <Route path="events" element={<Events />} />
                  <Route path="events/create" element={<EventForm />} />
                  <Route path="events/edit/:id" element={<EventForm />} />
                  <Route path="profile" element={<Profile  />} />
                  <Route path="profile/edit" element={<EditProfile />} />
                  <Route path="profile/create" element={<CreateProfile />} />
                  <Route path='admins' element={<Admins/>}/>
                </Route>
              </Route>
              <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} />} />
            </Routes>
        </Suspense>
      </div>
    </MantineProvider>
  );
};

export default App;
