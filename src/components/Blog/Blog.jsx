
import { FiArrowRight } from 'react-icons/fi';
import img from './../../assets/png/placeholder.png'

import { useState } from 'react';
const Blog = () => {
    const projectsData = [
        {
            id: 1,
            projectName: 'Ayla Networks',
            projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
            date: 'Aug 11, 2020',
            code: 'https://github.com/firoj10/clone-bistro-boss',
            demo: 'https://www.aylanetworks.com/',
            image: 'https://1.bp.blogspot.com/-XTVMsZP3HaM/Xxpl394txlI/AAAAAAAABws/zovXWiuNGg4TzBwYYVFfJ1ixDb3JfVokgCNcBGAsYHQ/w400-h195/speedtest.png',
          },
          {
            id: 1,
            title: 'GET MICHAEL\'S OR TREVOR\'S VEHICLES FULLY UPGRADED IN GTA V FOR FREE',
            projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
            date: 'Aug 11, 2020',
            code: 'https://github.com/firoj10/clone-bistro-boss',
            demo: 'https://www.aylanetworks.com/',
            image: 'https://1.bp.blogspot.com/-jhdtUBIRD_s/XxLFKQuRz9I/AAAAAAAABsM/mClfbfDFKvsUwA7Wyi25Lzu3DEmL2lxrACNcBGAsYHQ/s1919/gta.jpg',
          },
          {
            id: 1,
            title: 'CHECK INTERNET SPEED FROM THE COMMAND LINE',
            projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
            date: 'Aug 11, 2020',
            code: 'https://github.com/firoj10/clone-bistro-boss',
            demo: 'https://www.aylanetworks.com/',
            image: 'https://1.bp.blogspot.com/-OW7jX57tea4/XvnGxuEOslI/AAAAAAAABW0/R8lVT1AXDSwnvE0EGA9Ra49-LDm1ACwDgCK4BGAsYHg/s1216/wttr1.png',
          },
          {
            id: 1,
            title: 'SCRAPING BILLBOARD AND IMDB USING PYTHON SELENIUM',
            projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
            date: 'Aug 11, 2020',
            code: 'https://github.com/firoj10/clone-bistro-boss',
            demo: 'https://www.aylanetworks.com/',
            image: 'https://1.bp.blogspot.com/-XTVMsZP3HaM/Xxpl394txlI/AAAAAAAABws/zovXWiuNGg4TzBwYYVFfJ1ixDb3JfVokgCNcBGAsYHQ/w400-h195/speedtest.png',
          },
          {
            id: 1,
            title: 'CHECK WEATHER FROM TERMINAL USING WTTR.IN',
            projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
            date: 'Aug 11, 2020',
            code: 'https://github.com/firoj10/clone-bistro-boss',
            demo: 'https://www.aylanetworks.com/',
            image: 'https://1.bp.blogspot.com/-jhdtUBIRD_s/XxLFKQuRz9I/AAAAAAAABsM/mClfbfDFKvsUwA7Wyi25Lzu3DEmL2lxrACNcBGAsYHQ/s1919/gta.jpg',
          },
          {
            id: 1,
            title: 'BEING ANONYMOUS: A BEGINNERS GUIDE',
            projectDesc: 'This project about Simplifying the Development of Smart Home & IoT Solutions.',
            date: 'Aug 11, 2020',
            code: 'https://github.com/firoj10/clone-bistro-boss',
            demo: 'https://www.aylanetworks.com/',
            image: img
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-start">
      {projectsToShow.map((project) => (
        <div key={project.id} className="bg-white rounded shadow">
          <img src={project.image || img} alt="Project" className="h-48 w-full object-cover rounded-t" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.projectDesc}</p>
            <p className="text-gray-600 mb-4">{project.date}</p>
            
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
    </>
        </div>
    );
};

export default Blog;