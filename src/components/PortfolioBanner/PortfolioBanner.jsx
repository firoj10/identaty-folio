import img from './../../assets/55.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
const PortfolioBanner = () => {

  return (
    <div className="md:flex items-center md:pt-[200px]  py-10 px-2">
      <div className="flex-1 text-left">
     
        
        <motion.h1
                 initial={{ opacity: 0, y: -5 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1, fontStyle: 'italic',  }}
                 transition={{ duration: 1 }}
                
              >
                                       <h1 className="text-4xl font-bold pt-3 ">MD Firoj Hasan</h1>
              </motion.h1>


        <h1 className="text-2xl font-bold pt-3 text-blue-500 ">

          <Typewriter
            words={['Front-End Developer', 'MernStack developer', 'React Developer', 'JavaScript developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p className="text-lg pt-3">
          Hello! I am Firoj Hasan, a professional and passionate programmer in my daily life. A quick learner with a
          self-learning attitude. I love to learn and explore new technologies and am passionate about problem solving.
        </p>

        <div className="  m-5">

     
          <button > <a
          className="btn btn-outline text-blue-500 md:text-[20px] text-bold m-2"
            href='https://drive.google.com/file/d/1WItcetVtWvReUwt0BKselhAZ3DpD5fl8/view?usp=sharing'
            download='resume'
            target='_blank'
            rel='noreferrer'
          >
           Download Resume
          </a></button>
        </div>
      </div>
      <div className="flex-1">
        <img src={img} alt="" className="rounded-xl ml-auto md:h-[400px] md:w-[400px]" />
      </div>
    </div>
  );
};

export default PortfolioBanner;
