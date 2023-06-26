
import img from './../../assets/22.png';
import { Typewriter } from 'react-simple-typewriter';

const PortfolioBanner = () => {


  return (
    <div className="md:flex items-center md:pt-[200px] max-w-[1280px] mx-auto">
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold pt-3 ">MD Firoj Hasan</h1>


        <h1 className="text-2xl font-bold pt-3 text-blue-500 ">
      
        <Typewriter
          words={['Front-End Developer', 'MernStack developer' ,'React Developer', 'JavaScript developer']}
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

        <div className="flex m-5">
          
          <button className="btn btn-outline text-blue-500  text-bold m-2">Download Cv</button>
          <button className="btn btn-outline text-blue-500 text-bolder m-2">Contact Us</button>
        </div>
      </div>
      <div className="flex-1">
        <img src={img} alt="" className="rounded-xl ml-auto md:h-[400px] md:w-[400px]" />
      </div>
    </div>
  );
};

export default PortfolioBanner;
