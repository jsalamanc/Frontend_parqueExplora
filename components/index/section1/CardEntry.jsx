import React from 'react';
import styles from '../../../styles/Index.module.css';

export const CardEntry = ({data}) => {
    console.log(data.yoast_head_json.twitter_misc);


    return (
        <>
            <a className={styles.a} href={data.link} target='_blank' rel='noreferrer'>
                <article className={`${styles.section1} shadow-lg`}>
                    <div className='imgCardEntry'>
                    </div>

                    <div className='p-4'>
                        <div>
                            <h3 className={styles.h3ArticleIndexSection3}><b>{data.title.rendered}</b></h3>
                        </div>
                        <div className={styles.divH1ArticleIndexSection3}>
                            <span className={`mr-4 ${styles.spanTIndexArticleSection1}`}>{data.yoast_head_json.twitter_misc["Escrito por"]}</span>
                            <span className={styles.spanTIndexArticleSection1}>{data.yoast_head_json.twitter_misc["Tiempo de lectura"]}</span>
                        </div>
                        <div>
                            <p className={styles.pIndexArticleSection1}>{data.yoast_head_json.description}</p>
                        </div>
                        <div>
                            <span className={styles.spanTypeArticleIndexSection1}>{data.yoast_head_json.og_type}</span>
                        </div>
                    </div>

                </article>
            </a>

            <style jsx>{`
                .imgCardEntry {
                    background-image: url(${data.jetpack_featured_media_url});
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                @media (min-width: 320px) {
                    .imgCardEntry{
                        display: none;
                    }
                }

                @media (min-width: 1300px){
                    .imgCardEntry{
                        display: block;
                    }
                }
            `}</style>
        </>
    )
}
