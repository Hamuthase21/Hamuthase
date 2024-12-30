import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../../public/11zon_cropped.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero}
                    src={heroImg} 
                    alt="Profile picture of Hamuthase" 
                />
                <img 
                    className={styles.colorMode} 
                    src={themeIcon}
                    alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>Hamuthase</h1>
                <h2>Deep Learning</h2>
                <span>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter profile link" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub profile link" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn profile link" />
                    </a>
                </span>
                <p className={styles.descrption}>
                      Passionate about deep learning and AI,<br />creating innovative solutions to tackle <br />real-world challenges. 
                    Always exploring <br />new technologies to push boundaries.
                </p>
                <a href={CV} download>
                    <button className={styles.hover}>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
