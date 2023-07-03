import Marquee from "react-fast-marquee";
import './Skills.css';
import { skillsImage } from '../../utils/skillsImage';
import { motion } from 'framer-motion';
function Skills() {
    const skillBoxStyle = {
        backgroundColor: 'dark',
        boxShadow: '0px 0px 12px dark'
    }

    const skillsData = [
        'HTML',
        'Figma',
        'Javascript',
        'CSS',
        'React',
        'Bootstrap',
        'Figma',
        'MongoDB',
        'Tailwind',
        'MySQL',
        'MaterialUI',
        'Firebase'
    ]
    
    return (
        <div className="skills" id="skills" >
            <div className="skillsHeader">
            
                <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.2, fontStyle: 'italic',  }}
                 transition={{ duration: 1 }}
                
              >
                                    <h1 className='text-4xl text-center  py-14 mt-20 text-blue-500 font-bold'>Skills</h1>
              </motion.h1>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 className="text-blue-500">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
