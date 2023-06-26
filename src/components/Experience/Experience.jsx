import Lottie from "react-lottie";
import animaction from './../../../public/exprience.json';
import img from '../../assets/svg/education/eduImgWhite.svg'
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
    <div className="max-w-[1280px] mx-auto" id="experience">
    <h1 className="text-center text-4xl py-14 mt-20 text-blue-500"> Experience</h1>
    <div className="md:flex  ">
      <div className="md:w-5/12">
        <Lottie options={animationOptions} />
      </div>
    
      <div className='md:w-7/12'>
                    <div className=" flex items-center border bg-slate-200 text-blue-500  p-5 m-3 ">
                        <div className="">
                            <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex items-center justify-center">
                                <img src={img} alt="" className="w-[40px]" />
                            </div>
                        </div>
                        <div className=" text-left  md:ps-10">
                            <p className="text-lg">Jan 2022-Present</p>
                            <h3 className="text-xl">Full-Stack Developer</h3>
                            <h4 className="text-xl">Fiverr (freelance)</h4>
                        </div>
                    </div>
                    <div className=" flex items-center border bg-slate-200 text-blue-500  p-5 m-3 ">
                        <div className="">
                            <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex items-center justify-center">
                                <img src={img} alt="" className="w-[40px]" />
                            </div>
                        </div>
                        <div className=" text-left  md:ps-10">
                            <p className="text-lg">Jan 2022-Present</p>
                            <h3 className="text-xl">Full-Stack Developer</h3>
                            <h4 className="text-xl">Fiverr (freelance)</h4>
                        </div>
                    </div>
                    <div className=" flex items-center border bg-slate-200 text-blue-500  p-5  m-3">
                        <div className="">
                            <div className="rounded-[50%] w-[55px] h-[55px] text-slate-200 bg-blue-500 flex items-center justify-center">
                                <img src={img} alt="" className="w-[40px]" />
                            </div>
                        </div>
                        <div className=" text-left  md:ps-10">
                            <p className="text-lg">Jan 2022-Present</p>
                            <h3 className="text-xl">Full-Stack Developer</h3>
                            <h4 className="text-xl">Fiverr (freelance)</h4>
                        </div>
                    </div>

                </div>



      </div>

 
    </div>
  );
};

export default Experience;