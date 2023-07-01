// import animaction from './../../../public/message.json';
// import Lottie from 'react-lottie';
import { FaFacebook, FaGithub, FaLinkedinIn, FaMediumM, FaStackOverflow, FaTwitter, } from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';

const Contact = () => {
  // const animationOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animaction,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };

  return (
    <div className=' ' id='contact'>
      <h1 className="text-center text-4xl py-14 mt-20 text-blue-500 justify-end "> Contact</h1>
      <div className='   lg:flex items-center'>
        {/* <div className='grid grid-cols-1 md:grid-cols-2  '> */}
        <div className='flex-1 md:mt-[143px] pr-10  lg:text-centar'>
          <div className='pb-[40px]'>
            <div className='flex items-center  my-5  rounded-lg'>
              <FiAtSign
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} /> <span>mdfiroj.info@gmail.com</span>

            </div>
            <div className='flex items-center  my-5  rounded-lg'>
              <FiAtSign
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span>mdfiroj.info@gmail.com</span>
            </div>
            <div className='flex items-center   my-5 rounded-lg'>
              <FiPhone
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span className='px-2'>mdfiroj.info@gmail.com</span>
            </div>


          </div>
          <div className='flex text-center '>

            <FaTwitter aria-label='Twitter'
              className='social-icon rounded-lg mx-1 lg:mx-3 '
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaGithub aria-label='GitHub'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaLinkedinIn aria-label='LinkedIn'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaMediumM aria-label='Medium'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />

            <FaFacebook aria-label='facebook'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            <FaStackOverflow aria-label='Stack Overflow'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '5px', backgroundColor: '#1877f2' }} />
          </div>
        </div>

        <div className='card flex-1 lg:text-left '>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text  py-2 text-[20px] text-blue-500'>Email</span>
              </label>
              <input type='text' placeholder='email' className='input  border-blue-500 border-4' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text  py-2 text-[20px] text-blue-500'>Password</span>
              </label>
              <input type='text' placeholder='password' className='input   border-blue-500 border-4' />

            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text  py-2 text-[20px] text-blue-500'>Message</span>
              </label>
              <textarea id="textarea" placeholder='Message' className="textarea input  border-blue-500 border-4" rows="7" cols="50"></textarea>

            </div>
            <div className=' mt-6'>
              <button className='btn btn-white bg-blue-500'>Login</button>
            </div>
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default Contact;
