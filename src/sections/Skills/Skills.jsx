import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'



function Skills() {
  return (<section id="skills" className={styles.container}>
    <h1 className="sectionTitle">skills</h1>
    
    <div className={StyleSheet.skillList}>
    <SkillList src={checkMarkIcon} skill="Data Structures in C Language"/>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        
       
    </div> 
    
    </section>
  )
}

export default Skills
