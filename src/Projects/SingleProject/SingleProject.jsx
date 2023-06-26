// import React from 'react';
// import { FaCode, FaPlay } from 'react-icons/fa';
// import { makeStyles } from '@material-ui/core/styles';


// import placeholder from './../../assets/png/placeholder.png';
import './SingleProject.css';

// const useStyles = makeStyles((theme) => ({
//   iconBtn: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//     border: `2px solid ${theme.palette.tertiary}`,
//     color: theme.palette.tertiary,
//     transition: 'all 0.2s',
//     '&:hover': {
//       backgroundColor: theme.palette.secondary,
//       color: theme.palette.primary,
//       transform: 'scale(1.1)',
//       border: `2px solid ${theme.palette.secondary}`,
//     },
//   },
//   icon: {
//     fontSize: '1.1rem',
//     transition: 'all 0.2s',
//   },
// }));

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
//   const classes = useStyles(theme);

  return (
    // <div className="single-project">
    //   <div className="project-image">
    //     <img src={image || placeholder} alt="Project" />
    //   </div>
    //   <div className="project-details">
    //     <h2>{name}</h2>
    //     <p>{desc}</p>
    //     <ul className="project-tags">
    //       {tags.map((tag, index) => (
    //         <li key={index}>{tag}</li>
    //       ))}
    //     </ul>
    //     <div className="project-actions">
    //       <a href={code} target="_blank" rel="noopener noreferrer">
    //         <div className={classes.iconBtn}>
    //           <FaCode className={classes.icon} />
    //         </div>
    //       </a>
    //       <a href={demo} target="_blank" rel="noopener noreferrer">
    //         <div className={classes.iconBtn}>
    //           <FaPlay className={classes.icon} />
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <h2>home</h2>
  );
}

export default SingleProject;
