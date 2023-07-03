import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog/Blog.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import ProjectSection from './components/ProjectSection/ProjectSection.jsx';
import Contact from './components/Contact/Contact.jsx';
import Skills from './components/Skills/Skills.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
     
      {
        path: "/about",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/experience",
        element: <Experience></Experience>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/education",
        element: <Education></Education>
      },
      {
        path: "/project",
        element: <ProjectSection></ProjectSection>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]

  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)



