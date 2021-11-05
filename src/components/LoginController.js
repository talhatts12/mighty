import React from "react";
import { Formik } from 'formik';

class Login extends React.Component{

  

    render() {
        let {responseMessage} = this.props.msg;

        
        return (

            <div>
              <section className="loginScreen">
                <img src="/images/rgtrewgt.png" alt="Site Logo" width="30%" />
                
                <Formik
                    initialValues={{ password: '' }}
                    validate={values => {
                      const errors = {};
                      if (!values.password) {
                        errors.password = 'Access Key is Required';
                      }
                      return errors;
                    }}
                    onSubmit={(values, actions) => {
                      actions.setSubmitting(false);                      
                      this.props.handleOnSubmit( values, actions)
                      
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit} className="loginForm">
                        { ! responseMessage ? <p className="errorResponse">{this.props.msg}</p> : ''}

                        <input
                          type="password"
                          name="password"
                          id="pwd"
                          placeholder="Enter Your Access key..."
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting} >
                          Submit
                        </button>
                      </form>
                    )}
                </Formik>
                
              </section>
            </div>
          )
    }
}

export default Login;