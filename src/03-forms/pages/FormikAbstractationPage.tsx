import { Formik, Form } from "formik";
import * as Yup from "yup";
import {MyCheckbox, MyTextInput, MySelect} from "../components";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "You must accept the terms"),
          jobType: Yup.string()
            .notOneOf(["it-jr", "This option is not allowed"])
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="email@email.com"
              type="email"
            />
            <MyCheckbox label="Terms & Conditions" name="terms" />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
