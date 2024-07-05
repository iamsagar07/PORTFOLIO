import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from './Layout/AppLayout'
import Homepage from './pages/homepage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/contactPage';
import Resume from './pages/Resume';
import { useEffect, useState } from 'react';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  if (loading) {
    return <div className='flex min-h-screen overflow-hidden w-full items-center justify-center animate-spin'>
      <img src='./logo.png' alt='logo' width={50} />
    </div>; 
  }
  const router = createBrowserRouter([
    {
      element : <AppLayout />,


      children : [
        {
          path : '/',
          element : <Homepage />,
        },
        {
          path : '/about',
          element : <AboutPage />
        },
        {
          path : '/projects',
          element : <ProjectsPage />
        },
        {
          path : '/contact',
          element : <ContactPage />
        },
        {
          path: '/resume',
          element: <Resume />
        },
       
      ]}
  ])

  
  return (
    <>
   
      <RouterProvider router={router} />

    </>
  )
}

export default App
