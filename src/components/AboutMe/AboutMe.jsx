
import Lottie from 'react-lottie';
import animaction from './../../../public/coding.json';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animaction,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
   <div className="md:pt-[200px]  " id='about'>
      <div className="relative">
        <hr
          className="absolute left-0 w-full border-t-2 border-gray-300"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        />
      </div>
   
      <div className="md:flex items-center">
        <div className="md:w-8/12 text-left md:gap-6">
          <h2 className="md:text-2xl font-bold md:pt-3">Who I am</h2>
          <p className="md:text-lg md:pt-3">
            My name is Md Firoj Hasan. I'm a web designer and developer based in Dhaka, Bangladesh. <br />
            <br />
            I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude.
            I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks
            of Software Engineering. My current stack includes Nodejs, Nestjs, React, NextJs, Redux, Bootstrap, Ant Design,
            Material UI, MongoDB, Mysql, PostgreSQL, Firebase, Cloudinary, etc.
          </p>
        </div>
        <div className="md:w-4/12">
          <Lottie options={animationOptions} />
        </div>
      </div>
    </div>
   
  );
};

export default AboutMe;
