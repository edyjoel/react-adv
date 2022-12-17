import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1"), null], "Passwords must match")
            .required("Required"),
        })}
      >
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput
                label="Nombre"
                name="name"
                placeholder="Nombre"
              />
              <MyTextInput
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <MyTextInput
                label="Password"
                name="password1"
                placeholder="Password"
                type="password"
              />
              <MyTextInput
                label="Confirm Password"
                name="password2"
                placeholder="Confirm Password"
                type="password"
              />
              <button type="submit">Submit</button>
              <button type="reset" onClick={ handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
