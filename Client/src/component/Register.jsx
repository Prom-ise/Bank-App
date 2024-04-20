import { React, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik"; 
// import toast from 'react-hot-toast';
import * as Yup from "yup";
import promisify from "../assets/image/logo-no-background.png";
import promisifyworld from "../assets/image/promisify-world.png";
import logo from '../assets/image/promisify-favicon-color.png'

const Register = () => {
  const Navigate = useNavigate();
  const [successMessage, setsuccessMessage] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  let url = "http://localhost:7000/bank/register";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name Required")
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more"),
      lastName: Yup.string()
        .required("Last Name Required")
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Valid email Required"),
      password: Yup.string()
        .required("Password Required")
        .min(8, "Must be 8 characters or more")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Must contain at least one special character"
        ),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      axios
        .post(url, values)
        .then((res) => {
          setsuccessMessage("User Created Successfully");
          seterrorMessage("");
          setTimeout(() => {
            setsuccessMessage("");
          }, 4000);
          console.log(res.data);
          Navigate("/promisify-bank/login");
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.error) {
            // If the server returns an error message, use it
            seterrorMessage(err.response.data.error);
          } else if (err.message) {
            // If there's a general error message, use it
            seterrorMessage(err.message);
          } else {
            // Otherwise, use a default error message
            seterrorMessage("Internal server error");
          }
          setsuccessMessage("");
          setTimeout(() => {
            seterrorMessage("");
          }, 4000);
          console.error(err); // Log the error for debugging
        });
    },
  });

  return (
    <div className="register px-4">
      <div className="row container-flui">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <section className="bg-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>
          <NavLink to="/promisify-bank"><img className="promisify" src={promisify} alt="" /></NavLink>
          <img
            src={promisifyworld}
            className="promisify-world"
            alt="Img-World"
          />
        </div>
        <form
          action=""
          className="container col-lg-6 col-md-6 col-sm-12 col-12 py-4 shadow-sm mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div>
          <NavLink to="/promisify-bank"><img src={logo} className='logo-com' alt="logo-com" /></NavLink>
          <div className="heading text-center">Create your account</div>
         </div>
          <div className="bank">
          <span>With </span><span className="small">PROMISIFY BANK...</span>
          </div>
          {successMessage && (
            <h6 style={{ color: "lime", textAlign: "center" }}>
              {successMessage}
            </h6>
          )}
          {errorMessage && (
            <h6 style={{ color: "red", textAlign: "center" }}>
              {errorMessage}
            </h6>
          )}
          <div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <label htmlFor="input-field" className="input-label">
                First Name
              </label>
              <span className="input-highlight"></span>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className="input-container">
              <input
                type="text"
                className="input-field"
                id="lastName"
                name="lastName"
                placeholder="Enter your Last Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <label className="input-label" label="input-field">
                Last Name:
              </label>
              <span className="input-highlight"></span>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div className="input-container">
              <input
                type="email"
                className="input-field"
                id="email"
                name="email"
                placeholder="Enter your Email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label className="input-label" label="input-field">
                Email:
              </label>
              <span className="input-highlight"></span>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="input-container">
              <input
                type="password"
                className="input-field"
                id="password"
                name="password"
                placeholder="Input your Password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <label className="input-label" htmlFor="password">
                Password:
              </label>
              <span className="input-highlight"></span>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mx-3 mt-2">
              <span className="check me-2">
                <input type="checkbox" name="Accept" id="" />
              </span>
              <span className="accept">Accept Terms and Services</span>
            </div>

            <div className="flexing mt-3">
              <button className="butt" type="submit">
                Sign up
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </div>
            <div className="text-center account mt-3">
              Already have an Account? <NavLink to="/promisify-bank/login">Login</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
