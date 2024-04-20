import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/image/promisify-favicon-color.png";
import ppl from "../assets/image/ppl.jfif"
import pplWork from "../assets/image/pplWork.jfif"
import logoBlack from '../assets/image/logo-black.png'

const About = () => {
  return (
    <div className='home-body'>
        <nav className="navbar navbar-expand-sm bg-light fixed-top">
        <div className="container-fluid">
          <NavLink to="/promisify-bank">
            <img src={logo} className="promisify-logo" alt="" />
          </NavLink>
          <span className="brand me-auto">PROMISIFY</span>
          <div>
            <form className="ms-auto d-flex gap-3 my-2 my-lg-0">
              <NavLink to="/promisify-bank/register">
                <button className="cssbuttons-io">
                  <span>Open your Account</span>
                </button>
              </NavLink>

              <NavLink to="/promisify-bank/login">
                <button className="home-butt mt-1" type="submit">
                  Sign In
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>

        <div className="pad row pb-4" style={{backgroundColor: "#fefefe"}}>
            <div className='col-lg-6 col-md-6 col-12'>
                <h2 className='customer'>Making opportunities accessible to everyone</h2>
                <h5>Delivering on the promise of financial inclusion in Africa today to safely connect people with the places, opportunities, and experiences that they truly care about.</h5>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
                <img src={ppl} className='promisifyBank' alt="img4"/>
            </div>
        </div>

        <div className="row gap-5 px-5 pt-5 bg-light">
            <div className="col-lg-6 col-md-6 col-12">
                <img src={pplWork} className='promisifyBank' alt='img5'/>
            </div>
            <div className='col-lg-5 col-md-4 col-12'>
                <h2 className='customer '>WHO ARE WE</h2>
                <h6>We are committed to deepening financial inclusion through technology and enabling shared prosperity. We are more than a payment company, Promisfy is Empowering Your Finncial Future.</h6><br/>

                <h6>Promisify is a one-stop mobile-based platform for payments, transfers, loans, savings and other essential services for every individual. Currently, Promisify boasts of over over 35 registered site users and 1 agent in Nigeria who rely on Promisify’s services to send and receive money, pay bills and many more.</h6><br/>

                <h6>Promisify Bank LTD is a company founded by AINA PROMISE OLUWANIFEMI with footprints in emerging markets across OYO and Ogbomoso in streets like Owode, Yoaco, Esaanu-Aje and Takie.</h6>
            </div>
        </div>
        <div className="row gap-5 p-5 bg-light flex-row-reverse" style={{marginTop: "-5px"}}>
            <div className="col-lg-6 col-md-6 col-12">
                <img src={logoBlack} className='promisifyBank' alt='img6'/>
            </div>
            <div className='col-lg-5 col-md-4 col-12'>
                <h2 className='customer '>WHY WE DO IT</h2>
                <h6>Over 60% of people in Ogbomoso remain unbanked and can’t access the most basic financial services to invest in their education and businesses, which limits their full potential. Nobody should be denied access to participate in the world economy because of their circumstances or background.</h6><br/>

                <h6>With a passionate team, sophisticated mobile platform, and a fast-growing community of users, PROMISIFY is making financial services more efficient for millions of users and it starts with the ability to pay and have access to the right opportunities at the right time.</h6>
            </div>
        </div>


      <footer>
        <ul className="footer-links mt-3">
            <li><NavLink to='/promisify-bank' className='promB' style={{textDecoration: "none", color: "white"}}>Promisify Bank</NavLink></li>
            <li><NavLink to='/promisify-bank/contact-us' style={{textDecoration: "none", color: "white"}}>Contact Us</NavLink></li>
            <li><NavLink to='/promisify-bank' style={{textDecoration: "none", color: "white"}}>Legal & Privacy</NavLink></li>
            <li><NavLink to='/promisify-bank/about-us' style={{textDecoration: "none", color: "white"}}>About Us</NavLink></li>
        </ul>
    </footer>
    </div>
  )
}

export default About