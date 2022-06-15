import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const Signup = () => {
  const createuser = (event) => {
    event.preventDefault();

    let formdata = {
      FirstName: event.target[0].value,
      LastName: event.target[1].value,
      Email: event.target[2].value,
      Password: event.target[3].value,
      Major: event.target[5].value,
      
    };

    console.log(formdata);
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    email: Yup.string().email("Email is invalid").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),

    Major: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        Major: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>

          <Form onSubmit={createuser}>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <TextField label="Study Major" name="Study Major" type="text" />

            <Link to={"/Landing"}>
              <button className="btn btn-dark mt-3" type="submit">
                Register
              </button>
            </Link>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>

            <p></p>
          </Form>
        </div>
      )}
    </Formik>
  );
};
