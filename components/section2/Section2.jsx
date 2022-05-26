import React from 'react';
import styles from '../../styles/Home.module.css';
import { Card } from "./card";

export const Section2 = () => {
    return (
        <>
            <div className={styles.divSectionObjetives}>
                <div>
                    <h1 className={styles.h1SectionObj}>¿Cuáles son los objetivos de estos encuentros?</h1>
                </div>

                <Card img="/OBJETIVO-NUM-1.png">
                    Motivar la observación del cielo e incentivar la curiosidad sobre algunos temas relacionados
                    con la Astronomía como planetas, estrellas y galaxias.
                </Card>

                <Card img="/OBJETIVO-NUM-2.png">
                    Fortalecer la divulgación de la Astronomía a través de entornos digitales que permitan mantener la
                    conexión con estudiantes y maestros.
                </Card>

                <Card img="/OBJETIVO-NUM-3.png">
                    Mostrar la Tierra como un planeta muy especial que nos conecta con su familia planetaria y el universo
                    en general.
                </Card>
            </div>
            <div className={styles.divContainerImgSection2}>
                <img className={styles.imgSection2} src="/OBJETIVOS-TELESCOPIO.png"/>
            </div>
        </>
    )
}
