import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import { FaCircleUser } from "react-icons/fa6";
import { TbSettings2 } from "react-icons/tb";
import { IconContext } from 'react-icons'

const Profile = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  let token = localStorage.getItem("token");
  let url = "http://localhost:7000/bank/profile"
  useEffect(()=>{
    axios.get(url, {
      headers:{
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then((res)=>{
      if(res.data.status === true) {
        console.log("success");
        setUserData(res.data.user);
        // console.log(res.data);
      }
      else{
        localStorage.removeItem("token");
        navigate("/promisify-bank/login")
        console.log(res.status);
      }
    })
  }, []);
  return (
    <>
    <div className="profile-acc d-flex p-5">
      <div className="d-flex">
      <div>
      <IconContext.Provider value={{ className: "me-3 profile-icon" }}>
      <FaCircleUser />
      </IconContext.Provider>
      </div>
      <div className='profileInfo'>
    {userData ? (
        <div>
          <p className='Name'>Hi, {userData.firstName} {userData.lastName}</p>
          
          <p> {userData.email}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p className='mt-3'>Loading...</p>
      )}
      </div>
      </div>

      <div className='ms-auto'>
        <NavLink to='/promisify-bank/dashboard/profile/settings/uploadProfile' style={{color: "white"}}>
      <IconContext.Provider value={{ className: "mt-1 settings-icon" }}>
      <TbSettings2 />
      </IconContext.Provider>
      </NavLink>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Profile