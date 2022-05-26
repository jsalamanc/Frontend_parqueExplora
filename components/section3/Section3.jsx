import React from 'react';
import { Caracters } from './Caracters';
import styles from '../../styles/Home.module.css';


export const Section3 = () => {
    return (
        <div className="flex justify-center items-center">
            <div className={styles.ContainerCartInfo}>
                <h1 className={styles.ContainerCartInfoTitle}><b>Características</b></h1>
                <ul className={styles.ulSection3}>
                    <Caracters>
                        Para estudiantes de 1 a 11
                    </Caracters>
                    <Caracters>
                        Incluye viaje por el universo + actividad experimental
                    </Caracters>
                    <Caracters>
                        Grupos de 20 personas acompañados por un mediador
                    </Caracters>
                    <Caracters>
                        1 sesión de 90 minutos
                    </Caracters>
                    <Caracters>
                        Conexión privada por Zoom
                    </Caracters>
                </ul>
            </div>
        </div>
    )
}
