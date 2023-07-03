import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedinIn, FaLocationArrow, FaStackOverflow, FaWhatsapp, } from 'react-icons/fa';
import { FiAtSign, FiPhone, } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleadded = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Informaction has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className='py-9 ' id='contact'>
    
      <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.2, fontStyle: 'italic',  }}
                 transition={{ duration: 1 }}
                
              >
                     <h1 className="text-center text-4xl py-14 mt-20 font-bold text-blue-500 justify-end "> Contact</h1>
              </motion.h1>
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

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cardd"
            >
              <div>
                <a href="https://www.linkedin.com/in/md-firoj-hasan-251014280/">
                  <FaLinkedinIn
                    aria-label='Linkedin'
                    className='social-icon rounded-lg mx-1 lg:mx-3 cardd'
                    style={{
                      width: '50px',
                      height: '50px',
                      color: '#ffffff',
                      padding: '10px',
                      backgroundColor: '#1877f2'
                    }}
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cardd"
            >
              <div>
              <a href="https://web.facebook.com/mdfirojhasann/"><FaFacebook aria-label='facebook'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} /></a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cardd"
            >
              <div>
              <a href="https://github.com/firoj10"> <FaGithub aria-label='GitHub'
              className='social-icon rounded-lg mx-1 lg:mx-3'
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} /></a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cardd"
            >
                    <FaStackOverflow aria-label='facebook'
              className='social-icon rounded-lg mx-1 lg:mx-3 '
              style={{ width: '50px', height: '50px', color: '#ffffff', padding: '10px', backgroundColor: '#1877f2' }} />
            </motion.div>


       

        

     


          </div>
        </div>

        <div className='card flex-1 lg:text-left '>
          <div className='card-body'>
            <form action="">

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text  py-2 text-[20px] text-blue-500'>Email</span>
                </label>
                <input type='text' placeholder='email' className='input  border-blue-500 border-4' required />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text  py-2 text-[20px] text-blue-500'>Password</span>
                </label>
                <input type='text' placeholder='password' className='input   border-blue-500 border-4' required />

              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text  py-2 text-[20px] text-blue-500'>Message</span>
                </label>
                <textarea id="textarea" placeholder='Message' className="textarea   border-blue-500 border-4" rows="4" cols="10" required></textarea>

              </div>
              <div className=' mt-6'>

                <input type="submit" value="Submit" className='input  text-white  btn bg-blue-500' onClick={() => handleadded()} />

              </div>



            </form>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Contact;
