import React from 'react';
import { CardEntry } from '../section1/CardEntry';
import styles from '../../../styles/Index.module.css';

export const AllEntry = ({data}) => {
    
    return (
        <>
            <div className={styles.divContainerTitleArticlesSection1}>
                <h1><b>Todas las Entradas</b></h1>
            </div>
            <div className={styles.containerRecentEntry}>
                {data.map(item => <CardEntry key={item.id} data={item}/>)}
            </div>
        </>
    )
}
