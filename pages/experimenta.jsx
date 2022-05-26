import { Container } from "../components/Container";
import styles from "../styles/Home.module.css";
import { Slide } from "../components/section3/Slide";
import { Section1 } from "../components/section2/Section1";
import { Section2 } from "../components/section2/Section2";
import { Section3 } from "../components/section3/Section3";
import { Form } from "../components/section4/Form";
import { HeadSection4 } from "../components/section4/HeadSection4";
import { CardWtps } from "../components/cardWtps";

export default function Experimenta() {
    return(
        <>
            <Container>
                <section className={styles.sectionHero}>
                    <Section1/>
                </section>

                <section className={styles.SectionObjetives}>
                    <Section2/>
                </section>

                <section className={styles.ctrs}>
                    <Slide/>
                    <Section3/>
                </section>

                <section className={styles.section4}>
                    <div className={styles.divContainerSection4}>
                        <HeadSection4 img1={'/FORMULARIO-PLANETA-1.png'} img2={'/FORMULARIO-PLANETA-2.png'}/>
                        <Form/>
                        <CardWtps styles={styles.divWtpsText} img={'/FORMULARIO-WHATSSAPP.png'}/>
                        <div>
                            <p className={styles.divPInfoFormSection4}>
                                Al diligenciar este formulario aceptas seguir recibiendo información del Parque Explora
                                y nos autorizas para que incluyamos tus datos personales en nuestras bases de datos, en calidad
                                de responsable y encargado de los mismos, con la finalidad de enviarte información sobre eventos
                                y actividades. También te das por enterado de los derechos que tienes de consultarlos, actualizarlos,
                                rectificarlos y suprimirlos en cualquier momento, y conoces la política de manejo de datos de la
                                Corporación, que se encuentran en la página web www.parqueexplora.org/condiciones-legales. En ella
                                se encuentran descritos los canales de atención para el ejercicio de tus derechos y la presentación
                                de quejas y reclamos. Así mismo comprendes que esta autorización es requerida de acuerdo a lo
                                dispuesto por la ley 1581 de 2012 y sus decretos reglamentarios. Esta autorización la otorgas
                                gratuitamente sin ninguna limitación de carácter temporal o territorial.
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}