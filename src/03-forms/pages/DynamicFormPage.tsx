import { Formik, Form } from "formik";
import { MyTextInput, MySelect } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if(!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if(rule.type === 'required') {
      schema = schema.required("Este campo es requerido");
    }

    if(rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Minimo  de ${(rule as any).value || 2} caracteres`);
    }

    if(rule.type === 'email') {
      schema = schema.email('Debe ser un email valido');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type == "input" || type == "email" || type == "password") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type == "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Select a option</option>
                    {options?.map(({id, label}) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error("Invalid type");
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
