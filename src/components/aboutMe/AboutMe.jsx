import React from 'react';
import styles from './style/AboutMe.module.css';
import AboutMePlate from './AboutMePlate';

const AboutMe = () => {
    return (
        <div className={styles.AboutMe} id='AboutMe'>
            <AboutMePlate />
        </div>
    );
};

export default AboutMe;