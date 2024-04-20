import React from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from '../assets/image/promisify-favicon-color.png'
import signIn from '../assets/image/SignIn.gif'

const Login = () => {
  const navigate = useNavigate();
  let URL = "http://localhost:7000/bank/login"
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      axios
      .post(URL, values)
      .then((res) => {
        console.log(res);
        toast.success("Login Successfully");
        let token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/promisify-bank/Dashboard");
      })
      .catch((err) =>{
        console.log(err);
        toast.error("Invalid Credentials, Pls check your Email or Password and Try again");
      });
    },
  });
  return (
    <div className="login row">
      <div className='col-lg-5 col-md-12 col-sm-12 col-12 mx-auto'>
        <img className='login-img' src={signIn} alt="" />
      </div>
      <form action="" className='login-form col-lg-7 col-md-12 col-sm-12' onSubmit={formik.handleSubmit}>
      <NavLink to="/promisify-bank"><img src={logo} className='logo-com' alt="logo-com" /></NavLink>
        <h2 className="sign-in">
         Sign in to your Account
        </h2>
      
      <label className='login-label' htmlFor="email">Email:</label>
        <input
        className="login-input"
        type="email"
        placeholder="Input Your Email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        />

        <label className='login-label' htmlFor="pass">Password:</label>
        <input
        className="login-input"
        type="password"
        placeholder="Input your Password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}/>
      
      
        <button type="submit" className="login-butt">Sign In</button>
        <div className="mt-2 create-account">Don't have an Account? <NavLink to="/promisify-bank/register" style={{textDecoration: "none", fontWeight: "700", fontSize: "22px"}}>Create one now</NavLink></div>
      

      </form>
    </div>
  )
}

export default Login