import { useState } from 'react';
import img1 from './../../assets/svg/projects/eight.svg';
import img2 from './../../assets/svg/projects/eleven.svg';
import img3 from './../../assets/svg/projects/seven.svg';
import img4 from './../../assets/svg/projects/six.svg';
import img5 from './../../assets/svg/projects/five.svg';
import img6 from './../../assets/svg/projects/four.svg';
import { FiArrowRight, } from 'react-icons/fi';

const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      code: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img1
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      code: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img2
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      code: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img3
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      code: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img4
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      code: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img5
    },
    {
      id: 1,
      projectName: 'Ayla Networks',
      projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
      tags: ['React', 'SAAS', 'React Bootstrap'],
      code: 'https://github.com/firoj10/clone-bistro-boss',
      demo: 'https://www.aylanetworks.com/',
      image: img6
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projectsToShow.map((project) => (
        <div key={project.id} className="bg-white rounded shadow">
          <img src={project.image || img1} alt="Project" className="h-48 w-full object-cover rounded-t" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{project.projectName}</h3>
            <p className="text-gray-600 mb-4">{project.projectDesc}</p>
            <div className="flex flex-wrap mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Demo
              </a>
            )}
          </div>
        </div>
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
    </div>
  );
};

export default ProjectSection;









