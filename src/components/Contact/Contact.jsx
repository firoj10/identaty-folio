import { FaAddressBook, FaFacebook, FaGithub, FaLinkedinIn, FaLocationArrow, FaMediumM, FaStackOverflow, FaTwitter, FaWhatsapp, } from 'react-icons/fa';
import { FiAtSign, FiPhone, FiVoicemail } from 'react-icons/fi';

const Contact = () => {
  https://www.linkedin.com/in/md-firoj-hasan-251014280/

  return (
    <div className='py-9 ' id='contact'>
      <h1 className="text-center text-4xl py-14 mt-20 text-blue-500 justify-end "> Contact</h1>
      <div className='   lg:flex items-center'>
        {/* <div className='grid grid-cols-1 md:grid-cols-2  '> */}
        <div className='flex-1 md:mt-[143px] pr-10  lg:text-centar'>
          <div className='pb-[40px]'>

            <div className='flex items-center   my-5 rounded-lg'>
              <FiPhone
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span className='px-2'>+8801704296487</span>
            </div>
            <div className='flex items-center   my-5 rounded-lg'>
              <FiAtSign
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span className='px-2'>mdfirojhasan.info@gmail.com</span>
            </div>

            <div className='flex items-center  my-5  rounded-lg'>
              <FaWhatsapp
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span>+8801798554947</span>
            </div>
            <div className='flex items-center  my-5  rounded-lg'>
              <FaLocationArrow
                className='social-icon rounded-lg mx-3 '
                style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
              <span>Haripur, Thakurgaon, Bangladesh</span>

            </div>

          </div>
          <div className='flex text-center '>



            <a href="https://www.linkedin.com/in/md-firoj-hasan-251014280/"> <FaLinkedinIn aria-label='Linkedin'
              className='social-icon rounded-lg mx-1 lg:mx-3 '
              style={{ width: '40px', height: '40px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} /></a>
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
              <textarea id="textarea" placeholder='Message' className="textarea   border-blue-500 border-4" rows="4" cols="10"></textarea>

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
