import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import {
  FormikAbstractationPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DynamicFormPage
} from "../03-forms/pages";

import logo from "../assets/react.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstractation"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponentsPage />} />
          <Route
            path="formik-abstractation"
            element={<FormikAbstractationPage />}
          />
          <Route
            path="formik-register"
            element={<RegisterFormikPage />}
          />
          <Route
            path="dynamic-form"
            element={<DynamicFormPage />}
          />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
