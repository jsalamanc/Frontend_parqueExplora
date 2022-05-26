import { Container } from "../components/Container";
import axios from 'axios';
import { RecentEntry } from '../components/index/section1/RecentEntry';
import { SliderIndex } from '../components/index/section2/SliderIndex';
import styles from '../styles/Index.module.css';
export default function Home({items}) {

  return (
    <Container>
      <section className={styles.s1}>
        <SliderIndex className='h-4' data={items}/>
      </section>
      <section className='mt-32'>
        <RecentEntry data={items}/>
      </section>
      <section className={styles.section3Index}>
        <div className={styles.section3DivDegradeIndex}>
          <div className={styles.divContentVisit}>
            <h1 className={styles.h1Section3DegradeIndex}><b>Visita la web Explora en Casa</b></h1>
            <a className={styles.buttonSection3DegradeIndex} href='https://encasa.parqueexplora.org/' target='_blank' rel='noopener noreferrer'>
              <b>Visitar</b>
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}

export const getServerSideProps = async context => {
  const {data:items} = await axios.get('https://encasa.parqueexplora.org/wp-json/wp/v2/posts');

  return {
    props: {
      items
    }
  }
}