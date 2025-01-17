import React, { useId } from "react";
import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Має бути мінімум три символи!")
    .max(50, "Має бути не більше 50 символів!")
    .required("Це поле має бути заповнено"),
  number: Yup.string()
    .min(3, "Має бути мінімум три символи!")
    .max(50, "Має бути не більше 50 символів!")
    .required("Це поле має бути заповнено"),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({ id: nanoid(), name: values.name, number: values.number });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div>
            <label htmlFor={nameId}>
              <span>Name</span>
              <Field type="text" name="name" className={s.input} id={nameId} />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
          </div>
          <div>
            <label htmlFor={numberId}>
              <span>Number</span>
              <Field
                type="text"
                name="number"
                className={s.input}
                id={numberId}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
          </div>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
