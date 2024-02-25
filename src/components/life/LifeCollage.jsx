import React from 'react';
import styles from './style/LifeCollage.module.css';
import LifeIllustration from './illustration/LifeIllustration';
import books from '../../images/books.jpg';
import mountain from '../../images/mountain.jpg';
import gaming from '../../images/gaming.png';
import code from '../../images/code.jpg';
import science from '../../images/science.jpg';

const LifeCollage = () => {
    return (
        <div className={styles.LifeCollage} >
            <LifeIllustration width={'480px'} height={'380px'} marginRight={'40px'} image={books} text={'Книги — корабли мысли, странствующие по волнам времени и бережно несущие свой драгоценный груз от поколения к поколению.'} />
            <LifeIllustration width={'580px'} height={'380px'} image={mountain} text={'Если бы природа не была прекрасной, она не стоила бы того, чтобы быть познанной, жизнь не стоила бы того, чтобы быть прожитой.'} />
            <LifeIllustration width={'340px'} height={'400px'} marginRight={'40px'} image={gaming} text={'Мы не потому перестаем играть, что постарели, — мы стареем, потому что перестаем играть.'} />
            <LifeIllustration width={'340px'} height={'400px'} marginRight={'40px'} image={code} text={'Для меня долгое время было загадкой, как что-то очень дорогое и технологичное может быть столь бесполезным. И вскоре я осознал, что компьютер — это глупая машина, обладающая способностями выполнять невероятно умные вещи, тогда как программисты — это умные люди, у которых талант делать невероятные глупости. Короче, они нашли друг друга.'} />
            <LifeIllustration width={'340px'} height={'400px'} image={science} text={'Наука — самое важное, самое прекрасное и нужное в жизни человека, она всегда была и будет высшим проявлением любви, только одною ею человек победит природу и себя.'} />
        </div>
    );
};

export default LifeCollage;