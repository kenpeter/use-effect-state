// react
import React from 'react';
// form
import { Formik } from 'formik';
// yup, obj parser
import Yup from 'yup';

// a good drop down 
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css';
// react-vi
import 'react-virtualized/styles.css';
// react-vi select
import 'react-virtualized-select/styles.css';

// drop down items
const imaginaryThings = [
  // key, val
  { label: 'Thing 1', value: 1 },
  { label: 'Thing 2', value: 2 },
  { label: 'Thing 3', value: 3 },
  { label: 'Thing 4', value: 4 },
  { label: 'Thing 5', value: 5 },
];

// form with prop
const UserForm = (props) => {
  // field from formik????
  const {
    // props outside, become val here
    values,
    // touched
    touched,
    // err
    errors,
    // dirty
    dirty,
    // formik: submitting
    isSubmitting,
    // change
    handleChange,
    // formik: set_field_val
    setFieldValue,
    // blur
    handleBlur,
    // submit
    handleSubmit,
    // reset
    handleReset,
  } = props;

  // 1. select on change
  // 2. choice is obj
  const _handleSelect = (selectChoice) => {
    // 1. set field val, imgId, val=1, 2, 3...
    // 2. set field val from top
    setFieldValue('imaginaryThingId', selectChoice.value);
  };

  // return 
  return(
    // 1. form tag
    // 2. onSubmit
    <form className="p-5" onSubmit={handleSubmit}>
      -- form title
      <h1>Hello this is form!</h1>
      -- form group
      <div className="form-group">
        -- field name
        <label>Imaginary Email</label>
        -- input, name, type
        <input name="email" type="text" 
          // form control, mail has err, mail is touched, not valid
          className={`form-control ${errors.email && touched.email && 'is-invalid'}`}

          // val.email
          value={values.email} 

          // formik: auto_chg_chars
          onChange={handleChange}

          // formik: auto_blur
          onBlur={handleBlur} />

        -- mail has err, mail is touched, err div
        {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      -- group
      <div className="form-group">
        -- label
        <label>Imaginary Username</label>
        -- input
        -- name, type
        <input name="username" type="text" 
          // class
          className={`form-control ${errors.username && touched.username && 'is-invalid'}`}
          // u_val
          value={values.username} 

          // auto_char
          onChange={handleChange}

          // auto_blur
          onBlur={handleBlur} />

        -- u_err, u_touched, err_div
        {errors.username && touched.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>

      -- group
      <div className="form-group">
        -- label
        <label>Imaginary Thing</label>
        -- drop down 
        <VirtualizedSelect
          // name
          name="imaginaryThingId"
          // single value
          value={values.imaginaryThingId}
          // option
          options={imaginaryThings}
          // 
          onChange={_handleSelect} />
        <small className="form-text text-muted">
          This is optional
        </small>
      </div>

      -- button: disabled: is_submitting
      <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>
        -- button text: {isSubmitting ? 'WAIT PLIZ' : 'CLICK ME'}
      </button>
    </form>
  );
}

// insert form into high order formik
export default Formik({
  // pass-in-from props
  mapPropsToValues: (props) => ({ 
    email: props.user.email,
    username: props.user.username,
    imaginaryThingId: props.user.imaginaryThingId,
  }),

  // 1. formmik: validate
  // 2. yup.obj.shape
  validationSchema: Yup.object().shape({
    // mail, yup.str.mail(err_msg).req(msg)
    email: Yup.string().email('Invalid email address').required('Email is required!'),

    // 1. username, yup.str.required, ${path}?
    // 2. when email (above), callback(email, schema)
    username: Yup.string().required('This man needs a ${path}').when('email', (email, schema) => {
      // email === xxxx
      if (email === 'foobar@example.com') { 
        // re schema.label(xxx).min
        return schema.label('papidipupi').min(10);
      }

      // re schema.label(xxx)
      return schema.label('babidibiba');

    // test, is-zig, $path, val (username field) => val === xxx
    }).test('is-zigzagging', '${path} is not zigzagging', value => value === 'zigzagging'),
  }),

  // 1. formik submit: val, setSubmitting from formik
  // 2. set_time_out: api call
  // 3. done set submitting false
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit them do the server. do whatever you like!
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(UserForm); // high order custom_form