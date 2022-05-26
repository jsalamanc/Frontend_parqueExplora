import { Container } from "../components/Container";
import styles from "../styles/Home.module.css";


export default function Page404() {
    return(
        <Container>
            <section className="flex justify-center items-center h-screen">
                <img className={styles.page404} src="/404.jpg" alt=""/>
            </section>
        </Container>
    )
}