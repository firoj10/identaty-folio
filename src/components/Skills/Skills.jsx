import Marquee from "react-fast-marquee";
import './Skills.css';
import { skillsImage } from '../../utils/skillsImage';

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
        'Docker',
        'Next JS',
        'Bootstrap',
        'Go',
        'Typescript',
        'Figma',
        'MongoDB',
        'Tailwind',
        'MySQL',
        'PostgreSQL',
        'MaterialUI',
        'Firebase'
    ]
    
    return (
        <div className="skills xl:w-[1800px] mx-auto" id="skills" >
            <div className="skillsHeader">
                <h2 className="text-blue-500 ">Skills</h2>
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
