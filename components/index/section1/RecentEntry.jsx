import {useEffect, useState} from 'react';
import { CardEntry } from './CardEntry';
import styles from '../../../styles/Index.module.css';

export const RecentEntry = ({data}) => {

    const [EntryPosts, setEntryPosts] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 4; i++) {
            arr.push(data[i]);
        }
        setEntryPosts(arr);
    }, [data]);


    return (
        <>
            <div className={styles.divContainerTitleArticlesSection1}>
                <h1><b>Entradas Recientes</b></h1>
            </div>
            <div className={styles.containerRecentEntry}>
                {EntryPosts.map(item => <CardEntry key={item.id} data={item}/>)}
            </div>
        </>
    )
}
