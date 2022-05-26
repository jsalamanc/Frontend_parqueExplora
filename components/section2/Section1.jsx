import React from 'react'
import styles from '../../styles/Home.module.css';
import { CardWtps } from '../cardWtps';

export const Section1 = () => {
    return (
        <>
        <div className={`self-center w-80% ${styles.divContentHero}`}>
            <h1>
                <b className={styles.textHero}>
                    Navegación por el universo para colegios
                </b>
            </h1>
            <br/>
            <p className={styles.textHeroSecundary}>
                En este viaje en vivo conoceremos los logros y descubrimientos que hicieron mujeres y hombres
                inquietos por observar los misterios del cosmos. Acompañados por la curiosidad y el asombro,
                seremos testigos de la diversidad de objetos que hay en nuestro universo y, a través de historias,
                viajaremos por lugares ya conocidos y por conocer.
            </p>
        </div>
        <div className="absolute inset-x-0	bottom-6 flex justify-center">
            <CardWtps styles={styles.text} img={'/INTRO-WHATSAPP.png'}/>
        </div>
        </>
    )
}
