import React from 'react';
import styles from './style/LifeIllustration.module.css';
import LifeIllustrationDescription from './LifeIllustrationDescription';

const LifeIllustration = ({image, text, width, height, marginRight}) => {
    return (
        <div className={styles.LifeIllustration} style={{width: width,
            height: height,
            marginRight: marginRight,
            backgroundImage: `url(${image})`}}>

            <LifeIllustrationDescription text={text} />

        </div>
    );
};

export default LifeIllustration;