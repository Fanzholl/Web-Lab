import React from 'react';
import styles from './style/AboutMePlate.module.css';
import Me from '../../images/Me.jpg';

const AboutMePlate = () => {
    return (
        <div className={styles.AboutMePlate}>
            <img src={Me} className={styles.Me} alt='Me' />
            <span className={styles.AboutMeText}>
                <h2>Обо мне</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, vel! Veniam ut qui adipisci cum consequatur nostrum. Ab obcaecati voluptatibus maiores sequi ea qui harum, mollitia enim eum placeat optio. Harum nihil possimus, unde blanditiis quisquam error ex quam sint. Autem repellat reiciendis aperiam quae consequuntur, deleniti repudiandae, omnis, eos harum sed assumenda veniam. Architecto consequuntur non hic rem corporis atque quisquam omnis porro itaque excepturi autem dolor cum odit earum, quo blanditiis accusantium ab in similique, dolores et. Expedita earum quibusdam tempore ipsam, repellat aut debitis nisi magnam et, illo perferendis, enim voluptates doloribus ducimus est eligendi velit animi!</p>
            </span>
        </div>
    );
};

export default AboutMePlate;