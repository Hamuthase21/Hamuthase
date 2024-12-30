import React from 'react';
import styles from './ProjectsStyles.module.css'; // Ensure this CSS file exists and has correct styles
import viberr from '../../assets/images.png'; // Ensure the image path is correct
import ProjectCard from '../../common/ProjectCard'; // Ensure the ProjectCard component is correctly implemented

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* First Project */}
        <ProjectCard 
          src={viberr} 
          link="https://github.com/Hamuthase/studentfeedback" 
          h3="Student Feedback" 
          p="An automation process that gathers, analyzes, and stores feedback from students about a course or program." 
        />

        {/* Second Project */}
        <ProjectCard 
          src={viberr} 
          link="https://github.com/Hamuthase/studentfeedback" 
          h3="Student Feedback" 
          p="An automation process that gathers, analyzes, and stores feedback from students about a course or program." 
        />
      </div>
    </section>
  );
}

export default Projects;
