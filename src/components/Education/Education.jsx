import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import animaction from './../../../public/education.json';

import img from '../../assets/svg/education/eduImgWhite.svg'

const Education = () => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animaction,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <div className="my-20" id='education'>
          
            <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.2, fontStyle: 'italic',  }}
                 transition={{ duration: 1 }}
                
              >
                  <h1 className="text-center text-4xl font-bold py-14 mt-20 text-blue-500 md:my-20"> Education</h1>

              </motion.h1>
            <div className="md:flex gap-10">
                <div className="md:w-5/12">
                    <Lottie options={animationOptions} />
                </div>
                <div className='md:w-7/12'>
              
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 6 }}
                    >
                     <div className=" flex items-center border bg-slate-200 text-blue-500  hover:bg-blue-500 outline-0   hover:text-white  p-5 m-3 rounded-md ">
                        <div className="">
                            <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex me-2    items-center justify-center">
                                <img src={img} alt="" className="w-[40px]" />
                            </div>
                        </div>
                        <div className=" text-left  md:ps-10">
                            <p className="text-lg">Jan 2018-2022</p>
                            <h3 className="text-xl">computer science and technology(diploma)</h3>
                            <h4 className="text-xl">Thakurgaon Polytechnic Institute</h4>
                        </div>
                    </div>


                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 6 }}
                    >
                   <div className=" flex items-center border bg-slate-200 text-blue-500  hover:bg-blue-500 outline-0   hover:text-white  p-5 m-3 rounded-md ">
                        <div className="">
                            <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex me-2    items-center justify-center">
                                <img src={img} alt="" className="w-[40px]" />
                            </div>
                        </div>
                        <div className=" text-left  md:ps-10">
                            <p className="text-lg">Jan 2018</p>
                            <h3 className="text-xl">Secondary School Certificate</h3>
                            <h4 className="text-xl">Birgor Dehatta Tecnical High School</h4>
                        </div>
                    </div>


                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 8 }}
                    >
                    <div className=" flex items-center border bg-slate-200 text-blue-500  hover:bg-blue-500 outline-0   hover:text-white  p-5 m-3 rounded-md ">
                        <div className="">
                            <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex  me-2   items-center justify-center">
                                <img src={img} alt="" className="w-[40px]" />
                            </div>
                        </div>
                        <div className=" text-left  md:ps-10">
                            <p className="text-lg">Present</p>
                            <h3 className="text-xl">Junior School Certificate</h3>
                            <h4 className="text-xl">Chowrangi high school</h4>
                        </div>
                    </div>


                    </motion.div>
              
               
                    

                </div>



            </div>

        </div>

    );
};

export default Education;