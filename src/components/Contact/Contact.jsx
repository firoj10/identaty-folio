import animaction from './../../../public/message.json';
import Lottie from 'react-lottie';
import { FaFacebook, FaGithub, FaLinkedinIn, FaMediumM,  FaStackOverflow, FaTwitter,  } from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animaction,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='xl:w-[1800px]  w-full mx-auto'  id='contact'>
       <h1 className="text-center text-4xl py-14 mt-20 text-blue-500"> Contact</h1>
      <div className='lg:flex block lg:justify-between justify-center mx-auto  '>
     
        <div className='card lg:w-[600px] '>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='text' placeholder='email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='text' placeholder='password' className='input input-bordered' />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </div>
        </div>

        <div>
          <div className=''>
            <div className='flex items-center mx-3 my-5  rounded-lg'>
              <FiAtSign

                style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} /> <span>mdfiroj.info@gmail.com</span>

            </div>
            <div className='flex items-center mx-3 my-5  rounded-lg'>
              <FiAtSign
                style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span>mdfiroj.info@gmail.com</span>
            </div>
            <div className='flex items-center  mx-3 my-5 rounded-lg'>
              <FiPhone
                style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span>mdfiroj.info@gmail.com</span>
            </div>


          </div>
          <div className='md:flex mt-[100px]  w-full '>
           
            <FaTwitter aria-label='Twitter'
              className='social-icon rounded-lg mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaGithub aria-label='GitHub'
              className='social-icon rounded-lg mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaLinkedinIn aria-label='LinkedIn'
              className='social-icon rounded-lg mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaMediumM aria-label='Medium'
              className='social-icon rounded-lg mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
          
            <FaFacebook aria-label='facebook'
              className='social-icon rounded-lg mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaStackOverflow aria-label='Stack Overflow'
              className='social-icon rounded-lg mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />

          </div>
        </div>
        <div className=' md:w-[400px]  '>
          <Lottie options={animationOptions} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
