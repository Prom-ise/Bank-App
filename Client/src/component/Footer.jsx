import React from "react";
import { NavLink } from "react-router-dom";
import { SiHomebridge } from "react-icons/si";
import { IoDiamond } from "react-icons/io5";
import { TbCoinRupee } from "react-icons/tb";
import { TbBrandCashapp } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  
  return (
    <>
      <div className="footer py-1 fixed-bottom bg-light rounded-5 pt-2 m-3 px-1">
        <div className="footered">
          <div className="centered-div">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <NavLink
                to="/promisify-bank/dashboard/home"
                className={({ isActive }) =>
                  isActive ? "activate" : "no-active"
                }
              >
                <SiHomebridge />
              </NavLink>
            </IconContext.Provider>
          </div>
          <div>
            <NavLink
              to="/promisify-bank/dashboard/home"
              className={({ isActive }) =>
                isActive ? "footLinked" : "footLink"
              }
            >
              <div>Home</div>
            </NavLink>
          </div>
        </div>

        <div className="footered">
          <div className="centered-div">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <NavLink
                to="/promisify-bank/dashboard/rewards"
                className={({ isActive }) =>
                  isActive ? "activate" : "no-active"
                }
              >
                <IoDiamond />
              </NavLink>
            </IconContext.Provider>
          </div>
          <NavLink
            to="/promisify-bank/dashboard/rewards"
            className={({ isActive }) => (isActive ? "footLinked" : "footLink")}
          >
            <div>Rewards</div>
          </NavLink>
        </div>

        <div className="footered">
          <div className="centered-div">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <NavLink
                to="/promisify-bank/dashboard/finance"
                className={({ isActive }) =>
                  isActive ? "activate" : "no-active"
                }
              >
              <TbCoinRupee />
              </NavLink>
            </IconContext.Provider>
          </div>
          <NavLink
            to="/promisify-bank/dashboard/finance"
            className={({ isActive }) => (isActive ? "footLinked" : "footLink")}
          >
            <div>Finance</div>
          </NavLink>
        </div>

        <div className="footered">
          <div className="centered-div">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <NavLink
                to="/promisify-bank/dashboard/loan"
                className={({ isActive }) =>
                  isActive ? "activate" : "no-active"
                }
              >
                <TbBrandCashapp />
              </NavLink>
            </IconContext.Provider>
          </div>
          <NavLink
            to="/promisify-bank/dashboard/loan"
            className={({ isActive }) => (isActive ? "footLinked" : "footLink")}
          >
            <div>Loans</div>
          </NavLink>
        </div>

        <div className="footered">
          <div className="centered-div">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <NavLink
                to="/promisify-bank/dashboard/profile"
                className={({ isActive }) =>
                  isActive ? "activate" : "no-active"
                }
              >
                <FaUser />              </NavLink>
            </IconContext.Provider>
          </div>
          <NavLink
            to="/promisify-bank/dashboard/profile"
            className={({ isActive }) => (isActive ? "footLinked" : "footLink")}
          >
            <div>Me</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
