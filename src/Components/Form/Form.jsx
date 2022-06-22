import { Formik, Form, Field, ErrorMessage } from "formik"
import style from './Form.module.css';

function Invalid({ err }) {
    return <p className={style.InvalidMessage}>{err}</p>;
}

export default function Formulario({ className, eject, value }) {
    function labelFocus(evt) {
        let target = evt.target.closest(`.${style.Field}`).firstElementChild || evt.target;
        target.classList.add(style.labelActive);
    }
    function labelBlur(evt) {
        let target = evt.target.closest(`.${style.Field}`).firstElementChild || evt.target;
        if(target.firstElementChild.value === "") {
            target.classList.remove(style.labelActive);
        }
    }
    return <div className={style.FormContainer + " " + className}>
        <div className={style.FormContent}>
            <h2>Añadir Tarea</h2>
            <Formik
                initialValues={{
                    title: '',
                    name: '',
                    description: '',
                    priority: 'Prioridad',
                    id: ''
                }}
                validate={values => {
                    let errors = {};

                    if(values.title === "") {
                        errors.title = "Ingresa un título válido";
                    }
                    if(values.name === "") {
                        errors.name = "Ingresa un nombre válido";
                    }
                    if(values.description.length < 5 || values.description.length > 150) {
                        errors.description = "La descripción debe tener entre 5 y 150 caracteres";
                    }
                    if(values.priority === "Prioridad") {
                        errors.priority = "Escoge una prioridad";
                    }

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    values.id = Math.random().toString(36).substr(2, 18);
                    eject([...value, values]);
                    resetForm();
                }}
            >
                {({ errors, handleBlur }) => (
                    <Form className={style.Form} autoComplete="off">
                        {/* Titulo - Persona - Descripcion - Prioridad */}
                        <div className={style.Field}>
                            <label htmlFor="tlt">
                                <Field
                                    type="text"
                                    name="title"
                                    id="tlt"
                                    onFocus={labelFocus}
                                    onBlur={(evt) => {handleBlur(evt); labelBlur(evt)}}
                                />
                                <span>Título</span>
                            </label>
                            <ErrorMessage name="title" component={() => <Invalid err={errors.title} />} />
                        </div>
                        <div className={style.Field}>
                            <label htmlFor="name">
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    onFocus={labelFocus}
                                    onBlur={(evt) => {handleBlur(evt); labelBlur(evt)}}
                                />
                                <span>Nombre</span>
                            </label>
                            <ErrorMessage name="name" component={() => <Invalid err={errors.name} />} />
                        </div>
                        <div className={style.Field}>
                            <label htmlFor="dsc">
                                <Field
                                    type="text"
                                    name="description"
                                    id="dsc"
                                    onFocus={labelFocus}
                                    onBlur={(evt) => {handleBlur(evt); labelBlur(evt)}}
                                />
                                <span>Descripción</span>
                            </label>
                            <ErrorMessage name="description" component={() => <Invalid err={errors.description} />} />
                        </div>
                        <div className={style.Field}>
                            <Field className={style.FieldSelect} as="select" name="priority" id="slc">
                                <option value="Prioridad">Prioridad</option>
                                <option value="Baja">Baja</option>
                                <option value="Media">Media</option>
                                <option value="Alta">Alta</option>
                            </Field>
                            <ErrorMessage name="priority" component={() => <Invalid err={errors.priority} />} />
                        </div>
                        <button type="submit">Crear Tarea</button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
}