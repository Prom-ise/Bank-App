import React from 'react'
import { NavLink } from "react-router-dom";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import { GrMultimedia } from "react-icons/gr";
import { IconContext } from "react-icons";
import logo from "../assets/image/promisify-favicon-color.png";

const Contact = () => {
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

      <div className='pad bg-light text-center pb-5'>
                <h2 className='customer fw-bolder'>Contact Us</h2>
                <h5 className='mb-5'>Promisify gives you the freedom to make quick and easy payments, earn money, spend smart, and save more.</h5>
            </div>

        <div className='row space my-5'>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 carde text-start my-4 p-5" style={{width: "24em"}}>
                <div className="card-img-top">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <RiCustomerService2Fill />
                </IconContext.Provider>
                </div>
                <div className="card-body">
                    <h4 className="card-title">In-Site Customer Service</h4>
                    <p className="card-text">Need help? Contact us through the self-service feature or the live chat feature on the site to chat with a customer service representative.</p>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 carde text-start my-4 p-5" style={{width: "24em"}}>
                <div className="card-img-top">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                <PiPhoneCallFill />
                </IconContext.Provider>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Mobile</h4>
                    <p className="card-text">Call us on <span>0210 5678 910</span> or <span>020 11234 328</span>(App & Card queries)</p>
                    <p className="card-text"><span>0210 5678 910</span> or <span>020 11234 328</span>(POS Business queries)</p>
                    <p className="card-text fw-bolder">Available 24/7</p>
                    <p className="card-text">Or Chat with us on Whatsapp -<span>+2343109876542</span></p>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-12 carde text-start my-4 p-5" style={{width: "24em"}}>
                <div className="card-img-top">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                <GrMultimedia />
                </IconContext.Provider>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Social Media</h4>
                    <p className="card-text">You can also reach us via any of our verified social media pages.</p>
                    <p className="card-text">Instagram:<br/><span>https://www.instagram.com/</span></p>
                    <p className="card-text">Twitter:<br/><span>https://www.twitter.com/</span></p>
                    <p className="card-text">Facebook:<br/><span>https://www.facebook.com/</span></p>
                </div>
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

export default Contact