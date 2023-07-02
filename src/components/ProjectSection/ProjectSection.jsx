
import { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from './../../assets/svg/projects/eight.svg';
import img2 from './../../assets/svg/projects/eleven.svg';
import img3 from './../../assets/svg/projects/seven.svg';
import img4 from './../../assets/svg/projects/six.svg';
import img5 from './../../assets/svg/projects/five.svg';
// import img6 from './../../assets/svg/projects/four.svg';
import { FiArrowRight, FiCode, FiPlay, } from 'react-icons/fi';

const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      projectName: 'Drawing School',
      projectDesc: 'Summer drawing school is a full-stack react web application with Admin and student dashboard.',
      tags: ['React', 'MongoDB', 'Tailwind CSS', 'Firebase,'],
      clint: 'https://github.com/firoj10/summer-camp-drawing-school-client',
      server: 'https://github.com/firoj10/summer-camp-droing-school-server',
      demo: 'https://summery-camp-drowing-school.web.app/',
      image: img1
    },
    {
      id: 1,
      projectName: 'kids action toys',
      projectDesc: 'kids action toys is a full-stock react application with authentication and database integration.',
      tags: ['React', 'MongoDB', 'Tailwind CSS', 'Firebase,'],
      clint: 'https://github.com/firoj10/action-toys-client',
      server: 'https://github.com/firoj10/action-toys-server',
      demo: 'https://action-toys-auth.web.app/',
      image: img2
    },
    {
      id: 1,
      projectName: 'Bengali chef recipe',
      projectDesc: 'Bengali chef recipe is single-page application with Firebase authentication and database integration',
      tags: ['React', 'Bootstrap CSS', 'Firebase,', 'express js'],
      clint: 'https://github.com/firoj10/bangali-chef-recipe',
      server: 'https://github.com/firoj10/bangla-shef-recip-server',
      demo: 'https://bangali-chef-recipe.web.app/',
      image: img3
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions. ',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      clint: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img4
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      clint: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img5
    },

    // Rest of the project data
  ];

  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className='' id='project'>
      <div className='text-center py-20'>
        <h2 className='text-4xl text-blue-500 font-bold'>Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cardd">
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
            <div className='cardd '>
              <div key={project.id} className="bg-white rounded shadow ">
                <img src={project.image || img1} alt="Project" className="h-48 w-full object-cover rounded-t" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 ">{project.projectName}</h3>
                  <p className="text-gray-600 mb-4">{project.projectDesc}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-200 text-blue-500   hover:text-white  hover:bg-blue-500  rounded-full px-2 py-1 text-sm mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                  {project.clint && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="00 hover:underline font-bold"
                    >
                      <div className='flex justify-between items-center text-blue-500'>

                        <span>Client</span>

                        <FiCode
                          style={{ width: '50px', height: '50px', padding: '10px' }}
                        />

                      </div>
                    </a>
                  )}
                  {project.server && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline font-bold"
                    >
                      <div className='flex justify-between items-center  text-blue-500'>
                        <span>  Server </span> <FiCode

                          style={{ width: '50px', height: '50px', padding: '10px' }}
                        />
                      </div>
                    </a>
                  )}
                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline font-bold"
                    >
                      <div className='flex justify-between items-center  text-blue-500'>
                        <span>  Demo </span>

                        <FiPlay

                          style={{ width: '50px', height: '50px', padding: '10px' }}
                        />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!showAll && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid justify-items-end py-10"
        >
          <button
            className="text-white bg-blue-500 btn hover:underline"
            onClick={handleShowAll}
          >
            Show All
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{ yoyo: Infinity, duration: 3 }}
            >
              <FiArrowRight
                style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px' }}
              />
            </motion.div>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectSection;
