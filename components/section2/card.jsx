import React from 'react';
import styles from '../../styles/Home.module.css';

export const Card = ({children, img}) => {
    return (
        <div className={styles.cardSection2}>
            <div>
                <img className={styles.cardSection2Img} src={img} />
            </div>
            <div>
                <p className={styles.cardSection2Text}>
                    <b>{children}</b>
                </p>
            </div>
        </div>
    )
}
