import React from 'react';
import styles from './style/BlockDescription.module.css';

const BlockDescription = ({blockName, description}) => {
    return (
        <span>
            <p className={styles.BlockName}>{blockName}</p>
            <p className={styles.BlockDescription}>{description}</p>
        </span>
    );
};

export default BlockDescription;