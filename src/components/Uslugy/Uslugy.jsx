import React from 'react';
import styles from './style/Uslugy.module.css';
import BlockDescription from '../UI/BlockDescription';
import ListItem from './ListItem';

const Uslugy = () => {
    return (
        <div className={styles.Uslugy}>
            <div>
                <BlockDescription blockName={'Услуги'} description={'Разработка сайтов, приложений & Составление макетов'} />
                <div className={styles.UslugyListItemContainer}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
        </div>
    );
};

export default Uslugy;