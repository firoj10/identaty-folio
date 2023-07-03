import Lottie from "react-lottie";
import animaction from './../../../public/exprience.json';
import img from '../../assets/svg/education/eduImgWhite.svg'
import { motion } from 'framer-motion';
const Experience = () => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animaction,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <div className="" id="experience">
      

            <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.2, fontStyle: 'italic',  }}
                 transition={{ duration: 1 }}
                
              >
                  <h1 className="text-center text-4xl  font-bold py-14 mt-20 text-blue-500"> Experience</h1>

              </motion.h1>
            <div className="md:flex  ">
                <div className="md:w-5/12">
                    <Lottie options={animationOptions} />
                </div>

                <div className='md:w-7/12'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 8 }}
                    >
                        <div className=" flex items-center border bg-slate-200 text-blue-500  hover:bg-blue-500 outline-0   hover:text-white  p-5 m-3 rounded-md ">
                            <div className="">
                                <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex  me-2  items-center justify-center">
                                    <img src={img} alt="" className="w-[40px] " />
                                </div>
                            </div>
                            <div className=" text-left  md:ps-10">
                                <p className="text-lg">Jan 2023-Present</p>
                                <h3 className="text-xl">React Developer</h3>
                                <h4 className="text-xl">Programming Hero</h4>
                            </div>
                        </div>


                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, y: 100 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 8 }}
                    >
                        <div className=" flex items-center border bg-slate-200 text-blue-500  hover:bg-blue-500 outline-0  hover:text-white  p-5 m-3 rounded-md ">
                            <div className="">
                                <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex hover:slate-200  me-2    items-center justify-center">
                                    <img src={img} alt="" className="w-[40px]" />
                                </div>
                            </div>
                            <div className=" text-left  md:ps-10">
                                <p className="text-lg">Jan 2022</p>
                                <h3 className="text-xl">React Developer</h3>
                                <h4 className="text-xl">Collage projects</h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, x: -70 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 8 }}
                    >
                        <div className=" flex items-center border bg-slate-200 text-blue-500  hover:bg-blue-500 outline-0   hover:text-white  p-5 m-3 rounded-md ">
                            <div className="">
                                <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex hover:slate-200 me-2   items-center justify-center">
                                    <img src={img} alt="" className="w-[40px]" />
                                </div>
                            </div>
                            <div className=" text-left  md:ps-10">
                                <p className="text-lg">Jan 2023</p>
                                <h3 className="text-xl">React Developer</h3>
                                <h4 className="text-xl">Fiverr - Freelanceing</h4>
                            </div>
                        </div>
                    </motion.div>
                </div>




            </div>


        </div>
    );
};

export default Experience;