import React from "react";
import { Field, Formik } from "formik";
import "./Register.scss";
import { registerSchema } from "./register.schema";

function Register(props) {
  return (
    <div className="Register">
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          agreeToTerms: false,
        }}
        validationSchema={registerSchema}
      >
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <Field classname="form-control" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <Field type="email" classname="form-control" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              classname="form-control"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" />
          </div>
          <div className="form-group form-check mb-3">
            <Field
              type="checkbox"
              classname="form-control"
              id="agreeToTerms"
              name="agreeToTerms"
            />
            <label className="form-check-label" htmlFor="agreeToTerms">
              Agree to terms
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
