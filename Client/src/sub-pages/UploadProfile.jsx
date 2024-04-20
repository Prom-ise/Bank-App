import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/image/logo-color.png'
import { FaCamera } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Upload = () => {
  let url = "http://localhost:7000/bank/uploadPic"
  let cloudinaryUrl = "https://dbchij0q8.cloudinary.com/Promisify"; // Replace with your Cloudinary details

  
  const [myFile, setMyFile] = useState(null);
  const [myImageUrl, setMyImageUrl] = useState(''); // Store the image URL from Cloudinary
  
  const handleFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setMyFile(reader.result);
    };
  };
  
  const uploaded = async () => {
    const formData = new FormData();
    formData.append('myFile', myFile); // Assuming 'myFile' is a variable holding the file data
  
    axios.post(url, {myFile})
        .then((res) => {
            // console.log(res.data.result.url);
            setMyImageUrl(res.data.result.url)
            console.log(res);
           
        })
        
        .catch((err) => {
            console.error(err);
        })
  };

  return (
    <div>
    <div className="profile-acc p-5 mb-4">
    <div className='me-3'>
        <NavLink to='/promisify-bank/dashboard/profile' style={{color: "white"}}>
      <IconContext.Provider value={{ className: "mt-1 arrow-icon" }}>
      <MdOutlineArrowBackIos />
      </IconContext.Provider>
      </NavLink>
      </div>
      
        <div className='upload fs-3 fw-bold'>Upload Profile</div>
       
        </div>
        <div className='moveToCenter mt-5'>
        <div className="img-container">
        {myImageUrl ? (
        <img className='img-profile' src={myImageUrl} alt="Profile Picture" />
      ) : (
        <FaUser className='img-icon' />
      )}
       
        </div>
        <IconContext.Provider value={{ className: "me-3 camera-icon" }}>
      <label htmlFor="fileInput" className="camera-icon-label">
      <FaCamera />
        <input type="file" id="fileInput" accept="image/*" onChange = {(e) => handleFile(e)} style={{ display: 'none' }} />
      </label>
    </IconContext.Provider>
        
        </div>
        {/* <div className='moveToCenter'>
        <input type="file" onChange = {(e) => handleFile(e)} />
        </div> */}
        <div className="moveToCenter">
        <button className='uploadButton rounded-3 text-white' onClick={() => uploaded()}>Upload Profile Picture</button>
        </div>
        <div>
            {/* <input type="file" capture="user"/> */}
        </div>
    </div>
  )
}

export default Upload