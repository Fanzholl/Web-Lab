import React from 'react';
import styles from './style/LifeIllustrationDescription.module.css';

const LifeIllustrationDescription = ({text}) => {
    return (
        <div className={styles.LifeIllustrationDescription}>
            <p>{text}</p>
        </div>
    );
};

export default LifeIllustrationDescription;