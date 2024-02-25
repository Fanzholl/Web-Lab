import React from 'react';
import styles from './style/Life.module.css';
import BlockDescription from '../UI/BlockDescription';
import LifeCollage from './LifeCollage';

const Life = () => {
    return (
        <div className={styles.Life}>
            <div className={styles.LifeLabel}>
                <BlockDescription blockName={'Жизнь'} description={'МОИ САМЫЕ ЗНАЧИМЫЕ УВЛЕЧЕНИЯ'} />
            </div>

            <LifeCollage />

            <div className={styles.LifeBackground}>

            </div>
        </div>
    );
};

export default Life;