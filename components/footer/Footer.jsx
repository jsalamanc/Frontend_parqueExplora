import React from 'react';
import styles from '/styles/Home.module.css';


export const Footer = () => {
    return (
        <>
            <div className={styles.divContainerFindFooter}>
                <p className={styles.footerP}>Encuéntranos en:</p>
                <div>
                    <img className={styles.divContainerFindImgFooter} src='/logo.png'/>
                </div>
                <div>
                    <img className={styles.divContainerFindImgFooter} src='/planetario-Medellin.png'/>
                </div>
            </div>
            <div className={styles.divContainerContactFooter}>
                <p className={styles.footerP}>Contáctanos</p>
                <ul>
                    <li>
                        <span>Corporación Parque Explora</span>
                    </li>
                    <li>
                        <span>{'+57(4) 516 83 00'}</span>
                    </li>
                    <li>
                        <span>comunicaciones@parqueexplora.org</span>
                    </li>
                </ul>
            </div>

            <div className={styles.divContainerDirectionFooter}>
                <p  className={styles.footerP}>Ubicación</p>
                <ul>
                    <li>
                        <span>Carrera 52 # 73 - 75</span>
                    </li>
                    <li>
                        <span>Medellín - Colombia</span>
                    </li>
                    <li>
                        <span>{'+57(4) 516 83 00'}</span>
                    </li>
                </ul>
            </div>

            <div className={styles.divContainerPCopyFooter}>
                <p className={styles.pCopyFooter}>@ 2020 PARQUE EXPLORA | TODOS LOS DERECHOS RESERVADOS</p>
            </div>

            <div className={styles.divContainerIconsFooter}>
                <a className={styles.aLinkSocialMediaFooter} href='https://www.facebook.com/ParqueExplora/' target='_blank' rel='noreferrer'>
                    <img className={styles.divContainerIconsImgFooter} src='/facebook.svg'/>
                </a>
                <a className={styles.aLinkSocialMediaFooter} href='https://twitter.com/parqueexplora' target='_blank' rel='noreferrer'>
                    <img className={styles.divContainerIconsImgFooter} src='/twitter.svg'/>
                </a>
                <a className={styles.aLinkSocialMediaFooter} href='https://www.instagram.com/parqueexplora/' target='_blank' rel='noreferrer'>
                    <img className={styles.divContainerIconsImgFooter} src='/instagram.svg'/>
                </a>
            </div>
        </>
    )
}
