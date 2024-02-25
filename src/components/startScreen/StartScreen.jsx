import React from 'react';
import styles from './style/StartScreen.module.css';
import Label from './Label';

const StartScreen = () => {
    return (
        <div className={styles.StartScreen}>
            <Label />
        </div>
    );
};

export default StartScreen;