import React, {useRef} from 'react';
import { Formik } from 'formik';
import styles from '../../styles/Home.module.css';
import emailjs from '@emailjs/browser';

export const Form = () => {

    const formRef = useRef();
    const handleSendEmail = async(e)=>{
        try {
            const serviceID = 'service_f8jp55b';
            const templateID = 'template_e6v92xh';
            console.log(e);
            const res = await emailjs.sendForm(serviceID, templateID, formRef.current, '1m0uilfbGoiDMUi_c');
            formRef.current.reset();
            alert('Mensaje enviado, por favor revise su correo electrónico');
        } catch (error) {
            alert('Error, Mensaje no enviado')
        }

    }


    return (
        <Formik
            initialValues={{
                name: '',
                movil: '',
                dni: '',
                email: '',
                iEducativa: '',
                universo: '',
            }}
            onSubmit={async e => {
                await handleSendEmail(e)
            }
            }
        >
            {({values, handleChange, handleSubmit}) => (
                <form ref={formRef} className={styles.formSection4} onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.formDivContainerLaberInputSection4}>
                            <label className={styles.formTextSection4}><p>Nombre</p></label>
                        </div>
                        <input className={styles.formInputSection4}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            placeholder='Nombre'
                        />
                    </div>
                    <div>
                        <div className={styles.formDivContainerLaberInputSection4}>
                            <label className={styles.formTextSection4}><p>Telefono celular</p></label>
                        </div>
                        <input className={styles.formInputSection4}
                            type="text"
                            name="movil"
                            onChange={handleChange}
                            value={values.movil}
                            placeholder='Telefono celular'
                        />
                    </div>
                    <div>
                        <div className={styles.formDivContainerLaberInputSection4}>
                            <label className={styles.formTextSection4}><p>Cédula</p></label>
                        </div>
                        <input className={styles.formInputSection4}
                            type="text"
                            name="dni"
                            onChange={handleChange}
                            value={values.dni}
                            placeholder='Cédula'
                        />
                    </div>
                    <div>
                        <div className={styles.formDivContainerLaberInputSection4}>
                            <label className={styles.formTextSection4}><p>Nombre de institución educativa</p></label>
                        </div>
                        <input className={styles.formInputSection4}
                            type="text"
                            name="iEducativa"
                            onChange={handleChange}
                            value={values.iEducativa}
                            placeholder='Correo Eletrónico'
                        />
                    </div>
                    <div>
                        <div className={styles.formDivContainerLaberInputSection4}>
                            <label className={styles.formTextSection4}><p>Correo electrónico</p></label>
                        </div>
                        <input className={styles.formInputSection4}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder='Institución educativa'
                        />
                    </div>
                    <div>
                        <div>
                            <label className={styles.formTextSection4}><p>Estás interesado en una navegación por el universo para:</p></label>
                        </div>
                        <select className={styles.formSelectOptionSection4}
                            name="universo"
                            as="select"
                            onChange={handleChange}
                            value={values.universo}
                            >
                            <option value="Preescolar">Preescolar</option>
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria </option>
                        </select>
                    </div>
                    <div className={styles.formContainerButtonSection4}>
                        <button className={styles.formButtonSection4} type="submit">Enviar</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}
