import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/promisify-favicon-color.png";
import arrow from '../assets/image/arrow.png';
import whiteStar from "../assets/image/whiteStar.png";
import promisifyBank from "../assets/image/promisifyBank.jfif";
import customerService from "../assets/image/customerService.jfif";
import bankProm from '../assets/image/bankProm.jfif'

const Home = () => {
  return (
    <div className="home-body">
      <nav className="navbar navbar-expand-sm bg-light fixed-top shadow-sm">
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

      <div className="row pad mb-4">
        <div className="col-lg-6 col-md-6 col-12">
          <img className="stars" src={whiteStar} alt="stars" />
          <h2 className="intro">Take Control of Your Finances on the Go</h2>
          <img className="my-4" src={arrow} alt="arrow" />

          <p className="secure">Promisify Bank is committed to keeping your information safe and secure. </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <img className="promisifyBank" src={promisifyBank} alt="Img1" />
        </div>
      </div>

      <div className="bg-light row customer-service">
        <div className="col-lg-6 col-md-6 col-12">
        <h2 className="customer">Customer Satisfation, Our Priority</h2>
        <p className="provision">we are here for you to provide 7*24 quick customer service, visit our in-app customer service center or physical customer service center or send us message via official social medias or calll us via hotline as below</p>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <img className="promisifyBank" src={customerService} alt="Img2" />
        </div>
      </div>   

      <div className="row padd">
        <div className="col-lg-6 col-md-6 col-12">
            <img src={bankProm} className="promisifyBank" alt="Img3" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
        <h2 className="security">Your Security and Privacy is our priority</h2>
        <h5 className="fraud">Advanced Fraud Detection</h5>
        <h6 className="data">Your data is stored and encrypted using strong cryptography. We scan our systems daily against security threats.</h6>
        <h5 className="fraud">Security Product Safe Transactions</h5>
        <h6 className="data">We are compliant with PCI DSS. Your transactions are always encrypted and secured.</h6>
        <h5 className="fraud">Security Product</h5>
        <h6 className="data">Quick dial *111*111# or *222*222# to lock account or card if stolen or misplaced</h6>
        </div>
    </div>   

<div className="bg-light row customer-service">
    <i className="coming-soon">COMING SOON! <span> We're excited to unveil our mobile app with features that will help you:</span></i>
    <ul className="list-style">
        <li>Manage your accounts on the go (coming soon!)</li>
        <li>Easily transfer money between accounts (coming soon!)</li>
        <li>Deposit checks directly through your phone (coming soon!)</li>
        <li>Keep track of your finances (coming soon!)</li>
    </ul>
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
  );
};

export default Home;
