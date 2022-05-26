import React from 'react';
import styles from '../../styles/Home.module.css';

export const Caracters = ({children}) => {
    return (
        <li className={styles.liSection3}>
            <div className={styles.liDivContainerImgSection3}>
                <img src='/CARACTERISTICAS-BULLET.png'/>
            </div>
            <p className={styles.pLiSection3}>
                <b>
                    {children}
                </b>
            </p>
        </li>
    )
}
