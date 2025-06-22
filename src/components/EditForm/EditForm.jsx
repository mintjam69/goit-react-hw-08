import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { useId } from 'react';
import { useDispatch } from 'react-redux';

import { updateContact } from '../../redux/contacts/operations';
import css from '../EditForm/EditForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const EditForm = ({ contact: { id, name, number }, onClose }) => {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleUpdate = (values, actions) => {
    const { name, number } = values;
    dispatch(updateContact({ id, name, number }))
      .unwrap()
      .then(() => {
        toast.success('Successfully updated!');
      })
      .catch(() => {
        toast.error("This didn't work.");
      });
    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={{
        name: name || '',
        number: number || '',
      }}
      onSubmit={handleUpdate}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formContainer}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <div className={css.button_container}>
          <button className={css.editBtn} type="submit">
            Save
          </button>
          <button className={css.editBtn} type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
