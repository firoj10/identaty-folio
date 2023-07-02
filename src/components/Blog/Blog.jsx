
import { FiArrowRight } from 'react-icons/fi';

import { motion } from 'framer-motion';
import { useState } from 'react';
import box from './../../assets/png/placeholder.png'
import html from './../../assets/png/1.jpg'
import css from './../../assets/png/css.jpg'
import javascript from './../../assets/png/javascript.jpg'
import bootstrap from './../../assets/png/bootstrap.jpg'
import tailwind from './../../assets/png/tailwind.jpg'
const Blog = () => {
    const projectsData = [
        {
            id: 1,
            title: 'What Is HTML?',
            projectDesc: 'HTML stands for HyperText Markup Language, which can be a confusing term for many beginners yperText Markup Language.',
            date: 'Aug 11, 2020',
            image: html
          },
          {
            id: 1,
            title: 'What Is JavaScript?',
            projectDesc: 'JavaScript is used by almost every website on the internet, so I embarked on a quest to find the  JavaScript blogs. JavaScript blogs',
            date: 'Aug 11, 2020',
            image: javascript
          },
          {
            id: 1,
            title: 'Is React good for a blogging site',
            projectDesc: 'React is a great framework for creating blogs because it is SEO-friendly. SEO  is a very important and critical factor to consider ',
            date: 'Aug 11, 2020',
            image: box
          },
          {
            id: 1,
            title: 'Is Tailwind faster than CSS?',
            projectDesc: ' Tailwind is a modern CSS framework that offers several advantages over traditional CSS. Its ut  make styling HTML components faster, ',
            date: 'Aug 11, 2020',
            image: tailwind
          },
          {
            id: 1,
            title: 'Is Bootstrap JS or CSS?',
            projectDesc: 'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites mobile-first websites',
            date: 'Aug 11, 2020',
            image: bootstrap
           
          },
          {
            id: 1,
            title: 'What is grid in Tailwind?',
            projectDesc: 'What is Tailwind Grid System​ Unlike Twitter s Bootstrap and Foundation, that still use flexbox to implement their 12 column layout under the hood,.',
            date: 'Aug 11, 2020',
            image: css
          },
      ];
      const [showAll ,setShowAll]= useState(false)
      const projectsToShow = showAll ? projectsData :  projectsData.slice(0, 3);
      const handleShowAll= ()=>{
        setShowAll(true)
      }

    return (
        <div className='' id='blog'>
       <>
    <div className=' py-20'>
        <h2 className='text-4xl text-center  py-14 mt-20 text-blue-500 font-bold'>Blog</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-start">
      {projectsToShow.map((project) => (
        <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cardd"
      >
        <div key={project.id} className="bg-white rounded shadow">
          <img src={project.image || img} alt="Project" className="h-48 w-full object-cover rounded-t" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.projectDesc}</p>
            <p className="text-gray-600 mb-4">{project.date}</p>
            
          </div>
          
        </div>
        </motion.div>
      ))}
    
    </div>
    {!showAll && (
        <div className="grid  justify-items-end py-10">
          <button
            className="text-white bg-blue-500 btn hover:underline"
            onClick={handleShowAll}
           
         >
            Show All
            <FiArrowRight
            style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px',  }} />
          </button>
        </div>
      )}
    </>
        </div>
    );
};

export default Blog;