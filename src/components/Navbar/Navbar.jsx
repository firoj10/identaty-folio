import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, } from 'react-scroll'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("body").setAttribute("data-theme", localTheme);
  }, []);

  return (
    <nav className=" ">
      <div className=" px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">

              <motion.h1
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1, fontStyle: 'italic', }}
                transition={{ duration: 1 }}

              >
                <h1 className="text-4xl font-bold pt-3 "> <Link to="/" className=" font-semibold md:text-[35px] text-blue-500">
                  Firoj Hasan
                </Link></h1>
              </motion.h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === 'dark'}
                />
                <svg className="swap-on fill-current w-[30px] h-[30px] text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                {/* moon icon */}
                <svg className="swap-off fill-current w-[30px] h-[30px] text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

              </label>


              <Link
                to="about" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium  cursor-pointer"
              >
                About
              </Link>
              <Link
                to="skills" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="education" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
              >
                Education
              </Link>
              <Link
                to="project" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="experience" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="blog" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
              >
                Blog
              </Link>
              <Link
                to="contact" spy={true} smooth={true} offset={50} duration={500}
                className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              <svg
                className="h-6 w-6 "
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Add your mobile menu content here */}
          <div className="ml-4 flex flex-col items-center md:ml-6">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === 'dark'}
              />
              <svg className="swap-on fill-current w-[30px] h-[30px] text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              {/* moon icon */}
              <svg className="swap-off fill-current w-[30px] h-[30px] text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>


            <Link
              to="about" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="education" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="project" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="experience" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="blog" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="contact" spy={true} smooth={true} offset={50} duration={500}
              className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 text py-2 rounded-md text-[20px] font-medium cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





