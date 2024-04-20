import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'
import { TiUser } from "react-icons/ti";
import { RiCustomerService2Fill, RiSecurePaymentLine, RiAccountPinBoxFill } from "react-icons/ri";
import { IoIosNotifications, IoIosArrowForward } from "react-icons/io";
import { BiSolidBank, BiMoneyWithdraw } from "react-icons/bi";
import { FaSquarePhone } from "react-icons/fa6";
import { TbMobiledata, TbGiftCardFilled } from "react-icons/tb";
import { IoFootball } from "react-icons/io5";
import { MdOutlineElectricBolt, MdMore, MdSavings } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { GrBitcoin } from "react-icons/gr";
import { GiLoveLetter, GiDiamondTrophy, GiCoins } from "react-icons/gi";
import { SiCashapp } from "react-icons/si";
import { IconContext } from "react-icons";

const Dashboard = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  let token = localStorage.getItem("token");
  let url = "http://localhost:7000/bank/dashboard"
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
    <div className='mx-4'>
    <div className='my-4 d-flex'>
      <div className='d-flex gap-1'>
    <div>
    <IconContext.Provider value={{ className: "me-2 home-icon" }}>
  <div>
  <TiUser />
  </div>
</IconContext.Provider>
    </div>

    
        <div className='userGreet'>
        {userData ? (
        <div>
          <p>Hi, {userData.firstName}</p>
          {/* <p>Last Name: {userData.lastName}</p> */}
          {/* <p>Email: {userData.email}</p> */}
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
     
        {/* <div>Loading...</div> */}
     
    </div>

    <div className='d-flex gap-4 ms-auto'>
      <div>
    <IconContext.Provider value={{ className: 'home-icon' }}>
                    <RiCustomerService2Fill />
                </IconContext.Provider>
    </div>
    <div>
    <IconContext.Provider value={{ className: 'home-icon' }}>
    <IoIosNotifications />
    </IconContext.Provider>
    </div>
    </div>

    </div>

    <div className="userBalance p-4">
      <div className='d-flex mb-3'>
      <div className='d-flex gap-3'>
      <div>
      <IconContext.Provider value={{ className: 'secure-icon' }}>
      <RiSecurePaymentLine />
    </IconContext.Provider>
      </div>
      <div className='avail'>Available Balance</div>
    </div>
    <div className='d-flex ms-auto gap-1'>
    <div className='avail'>Transaction History</div>

      <div>
      <IconContext.Provider value={{ className: 'mt-1 secure-icon1' }}>
      <IoIosArrowForward />
    </IconContext.Provider>
      </div>
    </div>
    </div>

    <div className='d-flex'>
      <div className="accBal">
        <span className='currency'>₦</span>20,000.48
      </div>
      <div className='ms-auto'>
        <button className='addMoney'>+ Add Money</button>
      </div>
    </div>
    </div>

    <div className='transferAcc mt-3 py-4'>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <RiAccountPinBoxFill />
        </IconContext.Provider>
        </div>
        <div className='indicate'>To Promisify</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <BiSolidBank />
        </IconContext.Provider>
        </div>
        <div className='indicate'>To Bank</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <BiMoneyWithdraw />
        </IconContext.Provider>
        </div>
        <div className='indicate'>Withdraw</div>
      </div>
    </div>

    <div className='services mt-3 py-4'>
      <div className='service-row'>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <FaSquarePhone />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Airtime</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <TbMobiledata />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Data Buy</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <IoFootball />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Betting </div>
      </div>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <MdOutlineElectricBolt />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Electricity</div>
      </div>
      </div>

      <div className='service-row mt-4'>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <PiTelevisionSimpleFill />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Television</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <GrBitcoin />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Investing</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <MdSavings />
        </IconContext.Provider>
        </div>
        <div className='indicator'>PromSave</div>
      </div>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <TbGiftCardFilled />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Gift Card</div>
      </div>
      </div>

      <div className='service-row mt-4'>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <GiLoveLetter />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Invitation</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <GiDiamondTrophy />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Win Big</div>
      </div>

      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <GiCoins />
        </IconContext.Provider>
        </div>
        <div className='indicator'>Ref & Earn</div>
      </div>
      <div className='footered'>
        <div className='centered-div'>
        <IconContext.Provider value={{ className: 'transfer-icon' }}>
        <MdMore />
        </IconContext.Provider>
        </div>
        <div className='indicator'>More</div>
      </div>
      </div>
    </div>

    <div className='referals d-flex mt-3 px-3 py-4'>
        <div>
           <IconContext.Provider value={{ className: 'transfer-icon' }}>
           <SiCashapp />
        </IconContext.Provider>
        </div>
        <div className='ms-4'>
        <h3>Cash up for grabs</h3>
        <p>Invite friends and earn up to <span>₦5,300</span> Cash</p>
        </div>
    </div>

   
    </div>
    <Footer/>
    </>
  )
}


export default Dashboard