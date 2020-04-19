import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Modal/Modal.css';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowMsg: false,
      isSending: false,
    }
  }


  onSubmit = (values, { resetForm }) => {
    const { isShowMsg, isSending } = this.state;
    this.setState({
      isSending: true
    })
    axios.post(
      "https://formcarry.com/s/pDNgV7JpwdC5",
      values,
      { headers: { "Accept": "application/json" } }
    )
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({ isSending: false, isShowMsg: true })
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
      });


  }

  render() {

    const { isSending, isShowMsg } = this.state;

    return (
      <section className="site-section" id="contact">
        <div className="container">
          <div className="site-section__icon">
            <hr className="progress"></hr>
          </div>
          <h1 className="site-heading"> Contact </h1>
          <Formik
            className="site-form"
            initialValues={{
              name: '',
              email: '',
              message: ''
            }}
            validate={values => {
              let errors = {};
              if (!values.name) {
                errors.name = 'Name is required';
              }
              if (!values.email) {
                errors.email = 'Email is required';
              }
              if (!values.message) {
                errors.message = 'Message is required';
              }
              return errors;
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(),
              email: Yup.string().email().required(),
              message: Yup.string().required()
            })}
            onSubmit={this.onSubmit}
            render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
              <Fragment>
                <form className="site-form" onSubmit={handleSubmit}>
                  {
                    isShowMsg && <div class="alert alert-success">Thank you for sending me a message!</div>
                  }

                  <div className="row">
                    <div className="col-6">
                      <div className="site-form__form-group">
                        <label htmlFor="input-name" className="site-form__label"> Name </label>
                        <input type="text" name="name" onBlur={handleBlur} onChange={handleChange} className={`site-form__input ${errors.name && touched.name ? 'site-form__input-error' : ''}`} id="input-name" value={values.name} />
                        {
                          errors.name && touched.name &&
                          <div className="site-form__error"> {errors.name} </div>
                        }
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="site-form__form-group">
                        <label htmlFor="input-email" className="site-form__label"> Email </label>
                        <input type="email" name="email" onChange={handleChange} className={`site-form__input ${errors.email && touched.email ? 'site-form__input-error' : ''}`} id="input-email" value={values.email} />
                        {
                          errors.email && touched.email &&
                          <div className="site-form__error"> {errors.email} </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="site-form__form-group">
                        <label htmlFor="input-message" className="site-form__label"> Message </label>
                        <textarea type="text" name="message" onChange={handleChange} className={`site-form__textarea ${errors.message && touched.message ? 'site-form__input-error' : ''}`} rows="8" id="input-message" value={values.message} />
                        {
                          errors.message && touched.message &&
                          <div className="site-form__error"> {errors.message} </div>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="site-form__action">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-radius"
                      disabled={isSending}>
                      {
                        isSending ? <span className="loading-icon"> </span> : 'Submit'
                      }
                    </button>
                  </div>
                </form>
              </Fragment>
            )}
          />

        </div>
      </section>
    )
  }

}

export default Contact;