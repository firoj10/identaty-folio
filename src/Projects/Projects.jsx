import { Fade } from 'react-reveal';

import './projects.css';

const Projects = () => {
  const projectsData = [
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1280px] mx-auto">
      {projectsData.map((project) => (
        <Fade key={project.id}>
          <div className="p-4 rounded shadow relative project-background">
            <div
              className="absolute top-0 left-0 w-full h-full z-10"
            ></div>
                      <div className="relative justify-center items-center bg-slate-500 bg-opacity-80 ">
              <h3 className="text-xl font-bold text-white">{project.projectName}</h3>
              <p className="mt-2 text-white">{project.projectDesc}</p>
              <ul className="mt-4">
                {project.tags.map((tag) => (
                  <li key={tag} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                  </li>
                ))}
              </ul>
              {project.code && (
                <a href={project.code} className="block mt-4 text-blue-500">
                  Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="block mt-1 text-blue-500">
                  Demo
                </a>
              )}
            </div>

          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Projects;
