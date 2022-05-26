import React from 'react';
import styles from '../../styles/Home.module.css';


export const HeadSection4 = ({img1,img2}) => {
    return (
        <div className={styles.divHeadContainerSection4}>
            <div className={styles.divContainerImgSection4}>
                <img src={img1} alt=""/>
            </div>
            <div>
                <h1  className={styles.formH1Section4}>¿Quieres más información?</h1>
                <p  className={styles.formTextSection4}>Déjanos tus datos y te contactaremos</p>
            </div>
            <div>
                <img className={styles.divContainerImgSection4} src={img2} alt=""/>
            </div>
        </div>
    )
}
